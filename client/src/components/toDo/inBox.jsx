import React, { useState, useEffect } from "react";
import Navbar from "../nav/navbar";
import AddTask from "./component/addTask";
import Tasks from "./component/tasks";
import Completed from "./component/completed";
import "./inBox.css";
import moment from "jalali-moment";
import axios from "axios";

const InBox = (props) => {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("inbox");

  function randomNumberInRange() {
    return Math.floor(Math.random() * (100000 - 1 + 1)) + 1;
  }
  function getToday() {
    return moment(new Date()).locale("fa").format("YYYY/MM/DD");
  }

  const handleAddTask = async (textTop, textBottom, date, star, alarm) => {
    const addTodoInformation = {
      id: randomNumberInRange(),
      email: localStorage.getItem("tokenEmail"),
      textTop: textTop,
      textBottom: textBottom,
      date: date,
      star: star,
      alarm: alarm,
    };

    setTasks((t) => [
      ...t,
      {
        id: addTodoInformation.id,
        textTop: textTop,
        textBottom: textBottom,
        date: date,
        star: star,
        alarm: alarm,
        checked: false,
      },
    ]);

    if (addTodoInformation.email && addTodoInformation.textTop) {
      await axios.post(
        "http://localhost:9000/api/todo/add",
        addTodoInformation
      );
    }
  };

  const handleCheckTask = async (id, checked) => {
    const checkTaskInformaion = {
      email: localStorage.getItem("tokenEmail"),
      id: id,
      checked: checked,
    };
    const newState = tasks.map((t) => {
      if (t.id === id) {
        return { ...t, checked: !checked };
      }

      return t;
    });

    setTasks(newState);

    if (checkTaskInformaion.email && checkTaskInformaion.id) {
      await axios.post(
        "http://localhost:9000/api/todo/tick",
        checkTaskInformaion
      );
    }
  };

  const handleDeletedTask = async (id) => {
    const deletedInformaion = {
      email: localStorage.getItem("tokenEmail"),
      id: id,
    };

    const users = tasks.filter((u) => u.id !== deletedInformaion.id);
    setTasks(users);

    if (deletedInformaion.email && deletedInformaion.id) {
      await axios.post(
        "http://localhost:9000/api/todo/deleted",
        deletedInformaion
      );
    }
  };

  const getTasks = async () => {
    const getTodoInformation = {
      email: localStorage.getItem("tokenEmail"),
    };
    if (getTodoInformation.email) {
      const response = await axios.post(
        "http://localhost:9000/api/todo/get",
        getTodoInformation
      );
      setTasks(response.data.data);
    }
  };


  useEffect(() => {
    getTasks();
    // checkNotification();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-8 col-sm-10">
            <h2 className="title-component">
              <span
                onClick={() => setTitle("inbox")}
                className={`mx-1 ${title === "inbox" && "active-title"}`}
              >
                تمام‌وظایف{" "}
              </span>
              <span
                onClick={() => setTitle("today")}
                className={`mx-1 ${title === "today" && "active-title"}`}
              >
                وظایف‌امروز{" "}
              </span>
              <span
                onClick={() => setTitle("upcoming")}
                className={`mx-1 ${title === "upcoming" && "active-title"}`}
              >
                وظایف‌آینده{" "}
              </span>
            </h2>
            <br />
            <small className="tasks-title">
              وظایف -{" "}
              {
                tasks.filter((t) =>
                  title === "today"
                    ? t.date === getToday() && t.checked === false
                    : title === "upcoming"
                    ? t.date > getToday() && t.checked === false
                    : t.checked === false
                ).length
              }
            </small>
            {tasks
              .filter((tasks) =>
                title === "today"
                  ? tasks.checked === false &&
                    tasks.star === true &&
                    tasks.date === getToday()
                  : title === "upcoming"
                  ? tasks.checked === false &&
                    tasks.star === true &&
                    tasks.date > getToday()
                  : tasks.checked === false && tasks.star === true
              )
              .map((tasks, index) => (
                <Tasks
                  key={index}
                  id={tasks.id}
                  textTop={tasks.textTop}
                  textBottom={tasks.textBottom}
                  date={tasks.date}
                  star={tasks.star}
                  alarm={tasks.alarm}
                  checked={tasks.checked}
                  handleCheckTask={handleCheckTask}
                  handleDeletedTask={handleDeletedTask}
                />
              ))}
            {tasks
              .filter((tasks) =>
                title === "today"
                  ? tasks.checked === false &&
                    tasks.star === false &&
                    tasks.date === getToday()
                  : title === "upcoming"
                  ? tasks.checked === false &&
                    tasks.star === false &&
                    tasks.date > getToday()
                  : tasks.checked === false && tasks.star === false
              )
              .map((tasks, index) => (
                <Tasks
                  key={index}
                  id={tasks.id}
                  textTop={tasks.textTop}
                  textBottom={tasks.textBottom}
                  date={tasks.date}
                  star={tasks.star}
                  alarm={tasks.alarm}
                  checked={tasks.checked}
                  handleCheckTask={handleCheckTask}
                  handleDeletedTask={handleDeletedTask}
                />
              ))}
            <br />
            <small className="tasks-title">
              انجام شده -{" "}
              {
                tasks.filter((t) =>
                  title === "today"
                    ? t.date === getToday() && t.checked === true
                    : title === "upcoming"
                    ? t.date > getToday() && t.checked === true
                    : t.checked === true
                ).length
              }
            </small>
            {tasks
              .filter((tasks) =>
                title === "today"
                  ? tasks.checked === true &&
                    tasks.star === true &&
                    tasks.date === getToday()
                  : title === "upcoming"
                  ? tasks.checked === true &&
                    tasks.star === true &&
                    tasks.date > getToday()
                  : tasks.checked === true && tasks.star === true
              )
              .map((tasks, index) => (
                <Completed
                  key={index}
                  id={tasks.id}
                  textTop={tasks.textTop}
                  textBottom={tasks.textBottom}
                  date={tasks.date}
                  star={tasks.star}
                  alarm={tasks.alarm}
                  checked={tasks.checked}
                  handleCheckTask={handleCheckTask}
                  handleDeletedTask={handleDeletedTask}
                />
              ))}
            {tasks
              .filter((tasks) =>
                title === "today"
                  ? tasks.checked === true &&
                    tasks.star === false &&
                    tasks.date === getToday()
                  : title === "upcoming"
                  ? tasks.checked === true &&
                    tasks.star === false &&
                    tasks.date > getToday()
                  : tasks.checked === true && tasks.star === false
              )
              .map((tasks, index) => (
                <Completed
                  key={index}
                  id={tasks.id}
                  textTop={tasks.textTop}
                  textBottom={tasks.textBottom}
                  date={tasks.date}
                  star={tasks.star}
                  alarm={tasks.alarm}
                  checked={tasks.checked}
                  handleCheckTask={handleCheckTask}
                  handleDeletedTask={handleDeletedTask}
                />
              ))}
            <AddTask handleAddTask={handleAddTask} />
          </div>
        </div>
      </div>
    </>
  );
};

export default InBox;

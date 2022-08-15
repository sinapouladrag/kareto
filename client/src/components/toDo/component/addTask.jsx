import React from "react";
import "./addTask.css";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { useRef, useState } from "react";
import { AiOutlineStar } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import { BiAlarm } from "react-icons/bi";
import moment from "jalali-moment";
// datepicker
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import "react-multi-date-picker/styles/colors/purple.css";
import "react-multi-date-picker/styles/backgrounds/bg-dark.css";
import transition from "react-element-popper/animations/transition";
import InputIcon from "react-multi-date-picker/components/input_icon";

const AddTask = (props) => {
  let taskTextTop = useRef(null);
  let taskTextBottom = useRef(null);
  const [value, setValue] = useState();
  const [boxStatus, setBoxStatus] = useState("first");
  const [star, setStar] = useState(false);
  const [alarm, setAlarm] = useState(false);

  const convertNumbers2English = (string) => {
    return string
      .replace(/[\u0660-\u0669]/g, function (c) {
        return c.charCodeAt(0) - 0x0660;
      })
      .replace(/[\u06f0-\u06f9]/g, function (c) {
        return c.charCodeAt(0) - 0x06f0;
      });
  };

  const handleAddTask = async () => {
    if (taskTextTop.current.value) {
      props.handleAddTask(
        taskTextTop.current.value,
        taskTextBottom.current.value,
        convertNumbers2English(value.format("YYYY/MM/DD")),
        star,
        alarm
      );
      setBoxStatus("first");
      setAlarm(false);
      setStar(false);
      setValue(moment(new Date()).locale("fa").format("YYYY/MM/DD"));
    }
  };

  return (
    <>
      <hr />
      {boxStatus === "first" ? (
        <div className="add-task-first d-flex align-items-center">
          <BsFillPlusCircleFill
            onClick={() => setBoxStatus("second")}
            className="plus-icon m-1"
            size="1.5rem"
            color="#bb86fc"
            id="plus-icon"
          />
          <label htmlFor="plus-icon" className="first-text">
            ایجاد وظیفه جدید
          </label>
        </div>
      ) : (
        <>
          <div className="add-task-second d-flex flex-column align-items-center p-1 pb-3">
            <input
              type="text"
              ref={taskTextTop}
              className="form-control add-task-title"
              placeholder="برنامه امرزت چیه ..."
            />
            <textarea
              className="form-control add-task-description"
              ref={taskTextBottom}
              rows={3}
              placeholder="توضیحات ..."
            />
            <div className="add-task-footer container-fluid d-flex flex-row align-items-end">
              {star ? (
                <AiFillStar
                  size={"1.2rem"}
                  style={{ cursor: "pointer" }}
                  color={"#bb86fc"}
                  className="ms-1 ms-md-3"
                  onClick={() => setStar(false)}
                />
              ) : (
                <AiOutlineStar
                  size={"1.2rem"}
                  style={{ cursor: "pointer" }}
                  className="ms-1 ms-md-3"
                  color={"#e3e3e3"}
                  onClick={() => setStar(true)}
                />
              )}
              {alarm ? (
                <BiAlarm
                  size={"1.2rem"}
                  style={{ cursor: "pointer" }}
                  color={"#bb86fc"}
                  onClick={() => setAlarm(false)}
                />
              ) : (
                <BiAlarm
                  size={"1.2rem"}
                  style={{ cursor: "pointer" }}
                  color={"#e3e3e3"}
                  onClick={() => setAlarm(true)}
                />
              )}
              <div className={"date-picker ms-auto d-flex flex-row"}>
                <DatePicker
                  mapDays={({
                    date,
                    today,
                    selectedDate,
                    currentMonth,
                    isSameDate,
                  }) => {
                    let props = {};

                    props.style = {
                      borderRadius: "50px",
                      position: "relative",
                      margin: "auto",
                    };
                    if (isSameDate(date, selectedDate))
                      props.style = {
                        ...props.style,
                        backgroundColor: "#d500f9",
                      };

                    return props;
                  }}
                  className="purple bg-dark"
                  render={<InputIcon />}
                  minDate={moment(new Date()).locale("fa").format("YYYY/MM/DD")}
                  calendar={persian}
                  locale={persian_fa}
                  animations={[transition({ duration: 800, from: 35 })]}
                  value={moment(new Date()).locale("fa").format("YYYY/MM/DD")}
                  onChange={setValue}
                  format={"YYYY/MM/DD"}
                />
              </div>
            </div>
          </div>
          <button className="btn-add-task" onClick={handleAddTask}>
            ایجاد
          </button>
          <button
            onClick={() => setBoxStatus("first")}
            className="btn-cancle-task"
          >
            لغو
          </button>
        </>
      )}
    </>
  );
};

export default AddTask;

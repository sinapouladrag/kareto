import React, { useEffect, useState } from "react";
import Navbar from "./../nav/navbar";
import "./project.css";
import Tasks from "./component/tasks";
import AddTask from "./component/addTask";
import Completed from "./component/completed";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { useRef } from "react";
import { MdDelete } from "react-icons/md";
import axios from "axios";

const Project = (props) => {
  const [accordionStatus, setAccordionStatus] = useState(null);
  const [project, setProject] = useState([]);

  let addProjectText = useRef(null);

  function randomNumberInRange() {
    return Math.floor(Math.random() * (100000 - 1 + 1)) + 1;
  }

  const handleAddProject = async () => {
    if (addProjectText.current.value !== "") {
      const addProjectInformaion = {
        email: localStorage.getItem("tokenEmail"),
        id: randomNumberInRange(),
        projectTitle: addProjectText.current.value,
        data: [],
      };

      addProjectText.current.value = "";

      setProject((p) => [
        ...p,
        {
          id: addProjectInformaion.id,
          projectTitle: addProjectInformaion.projectTitle,
          data: [],
        },
      ]);

      if (addProjectInformaion.email) {
        await axios.post(
          "http://localhost:9000/api/project/add",
          addProjectInformaion
        );
      }
    }
  };

  const handleDeleteProject = async (id) => {
    const deletedProjectInformaion = {
      email: localStorage.getItem("tokenEmail"),
      id: id,
    };

    if (id) {
      const proj = project.filter((p) => p.id !== id);
      setProject(proj);
    }

    if (deletedProjectInformaion.email && deletedProjectInformaion.id) {
      await axios.post(
        "http://localhost:9000/api/project/deleted",
        deletedProjectInformaion
      );
    }
  };

  const handleAddTask = async (textTop, textBottom, date, star, alarm) => {
    const addTaskInformation = {
      email: localStorage.getItem("tokenEmail"),
      projectid: accordionStatus,
      id: randomNumberInRange(),
      textTop: textTop,
      textBottom: textBottom,
      checked: false,
      star: star,
      date: date,
      alarm: alarm,
    };

    let items = [...project];
    let index = items.findIndex((p) => p.id === accordionStatus);
    items[index].data = [
      ...items[index].data,
      {
        id: addTaskInformation.id,
        textTop: textTop,
        textBottom: textBottom,
        checked: false,
        star: star,
        date: date,
        alarm: alarm,
      },
    ];
    setProject(items);

    await axios.post(
      "http://localhost:9000/api/project/task/add",
      addTaskInformation
    );
  };

  const handleCheckTask = async (id, checked) => {
    const chechedInformaion = {
      email: localStorage.getItem("tokenEmail"),
      id: id,
      projectId: accordionStatus,
    };
    const items = [...project];
    const index = items.findIndex((p) => p.id === accordionStatus);
    const index2 = items[index].data.findIndex((p) => p.id === id);
    items[index].data[index2].checked = !checked;

    setProject((p) => (p = items));
    if (chechedInformaion.email && chechedInformaion.id) {
      await axios.post(
        "http://localhost:9000/api/project/task/checked",
        chechedInformaion
      );
    }
  };

  const handleDeletedTask = async (id) => {
    const deletedInformaion = {
      email: localStorage.getItem("tokenEmail"),
      id: id,
      projectId: accordionStatus,
    };

    const items = [...project];

    const index = items.findIndex((p) => p.id === accordionStatus);
    const newProject = items[index].data.filter(
      (d) => d.id !== deletedInformaion.id
    );
    items[index].data = newProject;
    setProject((p) => (p = items));

    if (deletedInformaion.email && deletedInformaion.id) {
      await axios.post(
        "http://localhost:9000/api/project/task/deleted",
        deletedInformaion
      );
    }
  };

  const getProject = async () => {
    const getProjectInformation = {
      email: localStorage.getItem("tokenEmail"),
    };
    if (getProjectInformation.email) {
      const response = await axios.post(
        "http://localhost:9000/api/project/get",
        getProjectInformation
      );
      setProject(response.data.data);
    }
  };

  useEffect(() => {
    getProject();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-8 col-sm-10 py-4">
            <div className="add-project p-3 d-flex flex-row justify-content-between align-items-center">
              <input
                className="add-project-input"
                type="text"
                placeholder="نام پروژه را وارد کنید ..."
                ref={addProjectText}
              />
              <BsFillPlusCircleFill
                onClick={handleAddProject}
                style={{ cursor: "pointer" }}
                color="#bb86fc"
                size={"1.3rem"}
              />
            </div>
            {project.map((p, index) => {
              return (
                <div key={index} className={`accordion my-3`}>
                  <div
                    onClick={() => setAccordionStatus(p.id)}
                    className={`accordion p-3 d-flex flex-row justify-content-between align-items-center`}
                  >
                    <h2
                      className={`accordion-header ${
                        accordionStatus === p.id && "accordion-header-active"
                      }`}
                      id="headingOne"
                    >
                      {p.projectTitle}
                    </h2>
                    <MdDelete
                      onClick={() => handleDeleteProject(p.id)}
                      className={"me-auto deleted-icon"}
                      size={"1.3rem"}
                      color="#bb86fc"
                    />
                  </div>
                  <div className={`accordion-collapse`}>
                    {accordionStatus === p.id && (
                      <div className="accordion-body">
                        {project[index].data
                          .filter(
                            (project) =>
                              project.checked === false && project.star === true
                          )
                          .map((project, index) => (
                            <Tasks
                              key={index}
                              id={project.id}
                              textTop={project.textTop}
                              textBottom={project.textBottom}
                              date={project.date}
                              star={project.star}
                              alarm={project.alarm}
                              checked={project.checked}
                              handleCheckTask={handleCheckTask}
                              handleDeletedTask={handleDeletedTask}
                            />
                          ))}
                        {project[index].data
                          .filter(
                            (project) =>
                              project.checked === false &&
                              project.star === false
                          )
                          .map((project, index) => (
                            <Tasks
                              key={index}
                              id={project.id}
                              textTop={project.textTop}
                              textBottom={project.textBottom}
                              date={project.date}
                              star={project.star}
                              alarm={project.alarm}
                              checked={project.checked}
                              handleCheckTask={handleCheckTask}
                              handleDeletedTask={handleDeletedTask}
                            />
                          ))}

                        {project[index].data
                          .filter(
                            (project) =>
                              project.checked === true && project.star === true
                          )
                          .map((project, index) => (
                            <Completed
                              key={index}
                              id={project.id}
                              textTop={project.textTop}
                              textBottom={project.textBottom}
                              date={project.date}
                              star={project.star}
                              alarm={project.alarm}
                              checked={project.checked}
                              handleCheckTask={handleCheckTask}
                              handleDeletedTask={handleDeletedTask}
                            />
                          ))}
                        {project[index].data
                          .filter(
                            (project) =>
                              project.checked === true && project.star === false
                          )
                          .map((project, index) => (
                            <Completed
                              key={index}
                              id={project.id}
                              textTop={project.textTop}
                              textBottom={project.textBottom}
                              date={project.date}
                              star={project.star}
                              alarm={project.alarm}
                              checked={project.checked}
                              handleCheckTask={handleCheckTask}
                              handleDeletedTask={handleDeletedTask}
                            />
                          ))}

                        <AddTask handleAddTask={handleAddTask} />
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;

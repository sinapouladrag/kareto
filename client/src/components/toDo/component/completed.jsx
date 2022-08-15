import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import "./completed.css";
import { BiAlarm } from "react-icons/bi";

const Completed = (props) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleDeleteTask = async () => {
    props.handleDeletedTask(props.id);

    // const deletedInformaion = {
    //   email: localStorage.getItem("tokenEmail"),
    //   taskId: props.id,
    // };
    // console.log(deletedInformaion);
    // if (deletedInformaion.email && deletedInformaion.taskId) {
    //   await axios.post(
    //     "http://localhost:9000/api/todo/deleted",
    //     deletedInformaion
    //   );
    // }
  };

  const handleCheckeUnCompletedTask = async () => {
    props.handleCheckTask(props.id, props.checked);
    // const tickInformaion = {
    //   email: localStorage.getItem("tokenEmail"),
    //   taskId: props.id,
    //   tick: props.tick,
    // };
    // if (tickInformaion.email && tickInformaion.taskId) {
    //   await axios.post("http://localhost:9000/api/todo/tick", tickInformaion);
    // }
  };

  return (
    <>
      {showDetails ? (
        <div
          className={`d-flex flex-column px-3 py-1 completed show-details ${
            props.star ? "active-start" : ""
          }`}
        >
          <div
            onClick={() => setShowDetails(!showDetails)}
            className={"d-flex top-of-task flex-row align-items-center"}
          >
            <div
              onClick={handleCheckeUnCompletedTask}
              className="tik ms-3 d-flex justify-content-center align-items-center"
            >
              <TiTick size={"1.3rem"} color="#1f1f1f" />
            </div>
            <div className="task-text-need d-flex flex-column">
              <input
                className="completed-text ms-auto"
                type="text"
                value={props.textTop}
              />

              {/* <del className="completed-text ms-auto">{props.textTop}</del> */}
              <input
                className=" completed-text-detail ms-auto"
                type="text"
                value={props.textBottom}
              />

              {/* <del className="completed-text-detail ms-auto">
                {props.textBottom}
              </del> */}
            </div>
            <div className=" me-auto">
              <MdDelete
                className="deleted-icon"
                onClick={handleDeleteTask}
                size={"1.3rem"}
                color="#bb86fc"
              />
            </div>
          </div>
          <div className="bottom-of-task d-flex flex-row">
            <span className="show-date">{props.date}</span>
            {props.alarm && <BiAlarm size={"1rem"} color={"#bb86fc"} />}
          </div>
        </div>
      ) : (
        <div
          onClick={() => setShowDetails(!showDetails)}
          className={
            props.star
              ? "completed active-start p-3 d-flex flex-row align-items-center"
              : "completed p-3 d-flex flex-row align-items-center"
          }
        >
          <div
            onClick={handleCheckeUnCompletedTask}
            className="tik ms-3 d-flex justify-content-center align-items-center"
          >
            <TiTick size={"1.3rem"} color="#1f1f1f" />
          </div>
          <input
            className="completed-text ms-auto"
            type="text"
            value={props.textTop}
          />

          {/* <del className="completed-text ms-auto">{props.textTop}</del> */}
          <MdDelete
            className="deleted-icon"
            onClick={handleDeleteTask}
            size={"1.3rem"}
            color="#bb86fc"
          />
        </div>
      )}
    </>
  );
};

export default Completed;

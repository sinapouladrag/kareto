import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import "./tasks.css";
import { BiAlarm } from "react-icons/bi";

const Tasks = (props) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleDeleteTask = async () => {
    props.handleDeletedTask(props.id);
  };

  const handleCheckeCompletedTask = async () => {
    props.handleCheckTask(props.id, props.checked);
  };

  return (
    <>
      {showDetails ? (
        <div
          className={`d-flex flex-column px-3 py-1 tasks show-details ${
            props.star ? "active-start" : ""
          }`}
        >
          <div
            onClick={() => setShowDetails(!showDetails)}
            className={`d-flex top-of-task flex-row align-items-center `}
          >
            <span
              onClick={handleCheckeCompletedTask}
              className="tik-box ms-3"
            ></span>
            <div className="task-text-need d-flex flex-column">
              <input
                className="task-text ms-auto"
                type="text"
                value={props.textTop}
              />
              {/* <span className=" task-text ms-auto">{props.textTop}</span> */}
              <input
                className=" task-text-detail ms-auto"
                type="text"
                value={props.textBottom}
              />
              {/* <span className="task-text-detail ms-auto">
                {props.textBottom}
              </span> */}
            </div>
            <div className=" me-auto">
              <MdDelete
                onClick={handleDeleteTask}
                className={"me-auto deleted-icon"}
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
          className={`tasks p-3 d-flex flex-row align-items-center ${
            props.star ? "active-start" : ""
          }`}
        >
          <span
            onClick={handleCheckeCompletedTask}
            className="tik-box ms-3"
          ></span>
          <input
            className="task-text ms-auto"
            type="text"
            value={props.textTop}
          />
          {/* <span className="task-text ms-auto">{props.textTop}</span> */}
          <MdDelete
            onClick={handleDeleteTask}
            className={"deleted-icon"}
            size={"1.3rem"}
            color="#bb86fc"
          />
        </div>
      )}
    </>
  );
};

export default Tasks;

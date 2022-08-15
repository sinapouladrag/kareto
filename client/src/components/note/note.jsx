import React from "react";
import { MdDelete } from "react-icons/md";
import "./note.css";

const Note = (props) => {
  const handleDeleteNote =  () => {
    props.deletenote(props.id);
  };

  return (
    <>
      <div className="col-lg-4 col-md-6 col-sm-12 p-4">
        <div className="note d-flex flex-column">
          <span className="note-top overflow-auto m-2 ps-2">{props.text}</span>
          <div className="note-bottom d-flex justify-content-between flex-row-reverse mt-auto">
            <small>{props.date}</small>
            <MdDelete
              onClick={handleDeleteNote}
              className="delete-icon"
              size="1.3rem"
              color="#bb86fc"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Note;

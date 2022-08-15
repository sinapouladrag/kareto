import React from "react";
import "./addNote.css";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { useRef } from "react";

const AddNote = (props) => {
  let addNoteText = useRef();

  const handleAddNote = async () => {
    props.addnote(addNoteText.current.value);
    addNoteText.current.value = "";
  };

  return (
    <div className="col-lg-4 col-md-6 col-sm-12 p-4">
      <div className="add-note-box d-flex flex-column justify-content-between">
        <div className="top-box">
          <textarea
            placeholder="یادداشت خود را وارد کنید ......"
            className="form-control"
            rows={7}
            ref={addNoteText}
          ></textarea>
        </div>
        <BsFillPlusCircleFill
          onClick={handleAddNote}
          className="plus-icon"
          size="1.3rem"
          color="#bb86fc"
        />
      </div>
    </div>
  );
};

export default AddNote;

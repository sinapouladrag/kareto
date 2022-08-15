import React from "react";
import Note from "./note";
import Navbar from "../nav/navbar";
import "./notesList.css";
import AddNote from "./addNote";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import moment from "jalali-moment";

const NotesList = () => {
  const [notes, setNotes] = useState([]);

  function randomNumberInRange() {
    return Math.floor(Math.random() * (100000 - 1 + 1)) + 1;
  }

  const handleAddNote = async (tasktext) => {
    const addNoteInformation = {
      email: localStorage.getItem("tokenEmail"),
      id: randomNumberInRange(),
      taskText: tasktext,
      date: moment(new Date()).locale("fa").format("YYYY/MM/DD").toString(),
    };
    if (addNoteInformation.taskText) {
      setNotes((n) => [
        ...n,
        {
          id: addNoteInformation.id,
          taskText: addNoteInformation.taskText,
          date: addNoteInformation.date,
        },
      ]);
    }
    if (addNoteInformation.email && addNoteInformation.taskText) {
      await axios.post(
        "http://localhost:9000/api/note/add",
        addNoteInformation
      );
    }
  };

  const handleDeleteNote = async (id) => {
    const deletedInformaion = {
      email: localStorage.getItem("tokenEmail"),
      id: id,
    };

    const users = notes.filter((u) => u.id !== deletedInformaion.id);
    setNotes(users);

    if (deletedInformaion.email && deletedInformaion.id) {
      await axios.post(
        "http://localhost:9000/api/note/deleted",
        deletedInformaion
      );
    }
  };

  const getNotes = async () => {
    const getNoteInformation = {
      email: localStorage.getItem("tokenEmail"),
    };
    if (getNoteInformation.email) {
      const response = await axios.post(
        "http://localhost:9000/api/note/get",
        getNoteInformation
      );
      setNotes(response.data.data);
    }
  };

  useEffect(() => {
    getNotes();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          {notes
            .filter((notes) => notes != null)
            .map((notes, index) => (
              <Note
                key={index}
                text={notes.taskText}
                date={notes.date}
                id={notes.id}
                deletenote={handleDeleteNote}
              />
            ))}
          <AddNote addnote={handleAddNote} />
        </div>
      </div>
    </>
  );
};

export default NotesList;

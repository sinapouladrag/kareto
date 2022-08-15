import "./App.css";
import axios from "axios";
import { useEffect } from "react";
import Login from "./components/login/login";
import Register from "./components/register/register";
import NotesList from "./components/note/notesList";
import InBox from "./components/toDo/inBox";
import Project from "./components/toDo/project";
import SolarCalendar from "./components/calendar/calendar";
import ContactUs from "./components/contactUs/contactUs";
import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom";
import moment from "jalali-moment";

function App() {

  function getToday() {
    return moment(new Date()).locale("fa").format("YYYY/MM/DD");
  }

  const pushNotification = () => {
    if (!("Notification" in window)) {
      alert("This browser does not support desktop notification");
    } else if (Notification.permission === "granted") {
      const notification = new Notification("برنامه امروزت یادت نره!");
    } else if (Notification.permission !== "denied") {
      Notification.requestPermission().then(function (permission) {
        if (permission === "granted") {
          const notification = new Notification("برنامه امروزت یادت نره!");
        }
      });
    }
  };

  const checkNotification = async () => {
    const getTodoInformation = {
      email: localStorage.getItem("tokenEmail"),
    };

    if (getTodoInformation.email) {
      const response = await axios.post(
        "http://localhost:9000/api/todo/get",
        getTodoInformation
      );
      const newTasks = response.data.data;

      const task = newTasks.find(
        (t) => t.date === getToday() && t.checked === false && t.alarm === true
      );
      if (task) {
        pushNotification();
      }
    }
  };

  useEffect(() => {
    checkNotification();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/contactus"} element={<ContactUs />} />
          <Route path={"/calendar"} element={<SolarCalendar />} />
          <Route path={"/inbox"} element={<InBox />} />
          <Route path={"/project"} element={<Project />} />
          <Route path={"/note"} element={<NotesList />} />
          <Route path={"/login"} element={<Login />} />
          <Route path={"/register"} element={<Register />} />
          <Route path="*" element={<Navigate to="/inbox" replace />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

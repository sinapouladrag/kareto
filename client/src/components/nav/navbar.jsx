import React, { useState, useEffect } from "react";
import { CgClose } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";
import { GoNote } from "react-icons/go";
import { FaProjectDiagram } from "react-icons/fa";
import { MdToday } from "react-icons/md";
import { BsListTask } from "react-icons/bs";
import { BsPersonCircle } from "react-icons/bs";
import { MdOutlineContactMail } from "react-icons/md";
import { Link } from "react-router-dom";
import "./navbar.css";
import axios from "axios";

const Navbar = (props) => {
  const [sidebar, setSidebar] = useState(false);
  const [loginedUser, setLoginedUser] = useState("not Availible");

  const showSidebar = () => setSidebar(!sidebar);

  useEffect(() => {
    async function fetchData() {
      const userInformation = {
        email: localStorage.getItem("tokenEmail"),
        password: localStorage.getItem("tokenPassword"),
      };

      if (userInformation.email && userInformation.password) {
        const response = await axios.post(
          "http://localhost:9000/api/login",
          userInformation
        );
        if (response.data.message === "Availible") {
          setLoginedUser("Availible");
        } else {
          setLoginedUser("not Availible");
        }
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <div className="navbar px-4">
        <Link to="#" className="ms-auto menu-bars">
          <GiHamburgerMenu onClick={showSidebar} color="#e3e3e3" />
        </Link>
        <Link className="navbar-brand" to={"/"}>
          <span className="ms-3 navbar-logo">کارتو</span>
        </Link>
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items navbar-nav">
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars nav-link me-auto">
              <CgClose color="#e3e3e3" onClick={() => setSidebar(!sidebar)} />
            </Link>
          </li>

          {loginedUser === "Availible" ? (
            <li className="px-3 d-flex flex-column justify-content-center align-items-center">
              <BsPersonCircle className="" size={"4rem"} color="#e3e3e3" />
              <small className="mt-2" style={{ color: "#E3E3E3" }}>
                {localStorage.getItem("tokenEmail")}
              </small>
              <Link
                to={"/"}
                onClick={() => {
                  localStorage.removeItem("tokenEmail");
                  localStorage.removeItem("tokenPassword");
                  showSidebar();
                  window.location("/");
                }}
                className="mt-3 btn btn-login"
              >
                خروج
              </Link>
            </li>
          ) : (
            <li className="px-3 d-flex flex-column justify-content-center align-items-center">
              <Link
                to={"/login"}
                onClick={() => {
                  showSidebar();
                }}
                className="ms-auto btn btn-login"
              >
                ورود | ثبت نام
              </Link>
            </li>
          )}

          <hr />
          <li className="nav-item pe-3">
            <Link onClick={showSidebar} className="nav-link" to={"/inbox"}>
              <BsListTask className="nav-li-icon" color="#e3e3e3" />
              تمام وظایف
            </Link>
          </li>
          <li className="nav-item pe-3">
            <Link onClick={showSidebar} className="nav-link" to={"/calendar"}>
              <MdToday className="nav-li-icon" color="#e3e3e3" />
              تقویم
            </Link>
          </li>
          <li className="nav-item pe-3">
            <Link onClick={showSidebar} className="nav-link" to={"/project"}>
              <FaProjectDiagram className="nav-li-icon" color="#e3e3e3" />
              پروژه ها
            </Link>
          </li>
          <li className="nav-item pe-3">
            <Link onClick={showSidebar} className="nav-link" to={"/note"}>
              <GoNote className="nav-li-icon" color="#e3e3e3" />
              یادداشت
            </Link>
          </li>
          <li className="nav-item pe-3">
            <Link onClick={showSidebar} className="nav-link" to={"/contactus"}>
              <MdOutlineContactMail className="nav-li-icon" color="#e3e3e3" />
              ارتباط با ما
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;

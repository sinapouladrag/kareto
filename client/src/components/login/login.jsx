import React from "react";
import Navbar from "../nav/navbar";
import logo from "../../img/nav-logo.png";
import "./login.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Alert } from "react-bootstrap";
import ReCAPTCHA from "react-google-recaptcha";

const Login = () => {
  const [alertStatus, setAlertStatus] = useState("false");

  const userNameLogin = useRef(null);
  const passwordLogin = useRef(null);
  const captcha = useRef(null);

  const navigate = useNavigate();
  const grecaptchaObject = window.grecaptcha; // You must provide access to the google grecaptcha object.

  return (
    <>
      <Navbar />
      <div className="container-fluid min-vh-100 d-flex justify-content-center align-items-center context">
        <div className="container from">
          <div className="row">
            <div
              className="col-md-6 d-flex flex-column justify-content-center align-items-center p-4"
              style={{ backgroundColor: "#1f1f1f" }}
            >
              <img src={logo} alt="kareto logo" width={200} />
              <h1 className="text">
                با <span style={{ color: "#BB86FC" }}>کارتو</span>، کارتو برنامه
                ریزی کن.
              </h1>
              <br />
              <h6>
                برنامه ریزی روزانه به روال خود یک مرحله آسان - اما ضروری - برای
                ایجاد تعادل در زندگی شما است: به شما این امکان را می دهد تا
                زمانی را که برای کار می گذرانید و زمانی را که برای هر چیز دیگری
                در اختیار دارید به وضوح از هم جدا کنید.
              </h6>
            </div>
            <div className="col-md-6" style={{ border: "1px solid #1f1f1f" }}>
              <form
                onSubmit={handleSubmit}
                action=""
                className="d-flex flex-column flex-column p-5"
              >
                <h1 className="top-label">ورود</h1>
                <div className="form-group d-flex flex-column-reverse">
                  <input
                    ref={userNameLogin}
                    type="email"
                    className="form-control input"
                    id="email"
                    placeholder="name@example.com"
                  />
                  <label htmlFor="email" className="form-label">
                    ایمیل
                  </label>
                </div>
                <div className="form-group d-flex flex-column-reverse">
                  <input
                    ref={passwordLogin}
                    type="password"
                    className="form-control input"
                    id="password"
                  />
                  <label htmlFor="password" className="form-label">
                    رمز عبور
                  </label>
                </div>
                <ReCAPTCHA
                  style={{
                    marginTop: "10px",
                    transform: "scale(0.77)",
                    transformOrigin: "100%",
                  }}
                  ref={captcha}
                  sitekey="6LeGMlshAAAAAA6fsN0GhU6l_uhGNYFnRuL0VuwL"
                  theme={"dark"}
                  grecaptcha={grecaptchaObject}
                />
                <button className="btn btn-login-page">ورود</button>
                <span className="">
                  حساب کاربری ندارید؟
                  <Link to={"/register"} className="m-2">
                    ثبت نام
                  </Link>
                </span>
                <br />
                {handleAlert()}
              </form>
            </div>
          </div>
        </div>
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </>
  );

  async function handleSubmit(e) {
    e.preventDefault();

    const loginInformation = {
      email: userNameLogin.current.value,
      password: passwordLogin.current.value,
    };
    if (
      loginInformation.email &&
      loginInformation.password &&
      captcha.current.getValue()
    ) {
      const response = await axios.post(
        "http://localhost:9000/api/login",
        loginInformation
      );
      if (response.data.message === "Availible") {
        localStorage.setItem("tokenEmail", loginInformation.email);
        localStorage.setItem("tokenPassword", loginInformation.password);
        navigate("/inbox");
      } else {
        setAlertStatus("true");
      }
    }
  }

  function handleAlert() {
    if (alertStatus === "true") {
      return <Alert variant="danger">اطلاعات وارد شده صحیح نمی‌باشد!</Alert>;
    }
  }
};

export default Login;

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Navbar from "../nav/navbar";
import image from "../../img/undraw_online_calendar_re_wk3t.svg";
import "./contactUs.css";
import { Alert } from "react-bootstrap";

export const ContactUs = () => {
  const [alertStatus, setAlertStatus] = useState("false");

  const form = useRef();

  function handleAlert() {
    if (alertStatus === "true") {
      return <Alert variant="success">پیام با موفقیت ارسال شد. </Alert>;
    } else if (alertStatus === "null") {
      return <Alert variant="danger">تمام فیلد ها را پر کنید. </Alert>;
    }
  }

  const sendEmail = (e) => {
    e.preventDefault();
    if (
      form.current.user_name.value &&
      form.current.user_email.value &&
      form.current.message.value
    ) {
      emailjs
        .sendForm(
          "service_vi78u6a",
          "template_5awlmd1",
          form.current,
          "rGSRBePDl0pU14s9T"
        )
        .then(
          (result) => {
            console.log(result.text);
            setAlertStatus("true");
          },
          (error) => {
            console.log(error.text);
          }
        );
    } else {
      setAlertStatus("null");
    }
  };

  return (
    <>
      <Navbar />
      <div className="container-fluid min-vh-100 d-flex justify-content-center align-items-center context">
        <div className="container contactus-from">
          <div className="row">
            <div className="col-md-6 d-flex flex-column  p-4">
              <h1 className="contactus-title">ارتباط با ما</h1>
              <img
                className="contactus-img align-self-center"
                src={image}
                alt=""
              />
            </div>
            <div className="col-md-6 d-flex flex-column p-5">
              <form ref={form} onSubmit={sendEmail}>
                <input
                  className="form-control contactus-input contactus-input contactus-name"
                  type="text"
                  name="user_name"
                  placeholder="نام"
                />
                <br />
                <input
                  className="form-control contactus-input contactus-input contactus-email"
                  type="email"
                  name="user_email"
                  placeholder="ایمیل"
                />
                <br />
                <textarea
                  className="form-control contactus-input contactus-input contactus-text"
                  name="message"
                  placeholder="پیام ..."
                />
                <input
                  className="contactus-btn btn"
                  type="submit"
                  value="ارسال"
                />
                {handleAlert()}
              </form>
            </div>
          </div>
        </div>
        <ul class="circles">
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
};

export default ContactUs;

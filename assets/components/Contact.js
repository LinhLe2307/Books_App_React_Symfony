import React from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

//install: npm install emailjs-com --save
const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("gmail", "book_nook_template", e.target, "JgVe0jEEd03wg5njc")
      .then(
        (result) => {
          Swal.fire({
            icon: "success",
            title: "Email sent successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          console.log(result.text);
        },
        (error) => {
          Swal.fire({
            icon: "error",
            title: "An error occurred",
            showConfirmButton: false,
            timer: 1500,
          });
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div
      id="contact"
      className="d-flex flex-column justify-content-center align-items-center"
    >
      <h2>Let me know what's on your mind</h2>
      <form className="d-flex flex-column" onSubmit={sendEmail}>
        <div className="row gx-5">
          <div className="col">
            <label>First Name</label>
            <input type="text" className="text-line" name="fname" />
          </div>
          <div className="col">
            <label>Last Name</label>
            <input type="text" className="text-line" name="lname" />
          </div>
        </div>
        <div className="row gx-5">
          <div className="col">
            <label>Email Name*</label>
            <input type="email" className="text-line" name="email" required />
          </div>
          <div className="col">
            <label>Leave me a message</label>
            <textarea className="textarea-line" name="message"></textarea>
          </div>
        </div>
        <button
          type="submit"
          className="btn align-self-center mb-5"
          id="btnSubmit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;

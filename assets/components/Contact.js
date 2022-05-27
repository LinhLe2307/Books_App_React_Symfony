import React from "react";

const Contact = () => {
  return (
    <div
      id="contacts"
      className="d-flex flex-column justify-content-center align-items-center"
    >
      <h2>Let us know what's on your mind</h2>
      <form className="d-flex flex-column">
        <div className="row gx-5">
          <div className="col">
            <label>First Name</label>
            <input type="text" className="text-line" />
          </div>
          <div className="col">
            <label>Last Name</label>
            <input type="text" className="text-line" />
          </div>
        </div>
        <div className="row gx-5">
          <div className="col">
            <label>Email Name</label>
            <input type="text" className="text-line" />
          </div>
          <div className="col">
            <label>Leave us a message</label>
            <textarea></textarea>
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

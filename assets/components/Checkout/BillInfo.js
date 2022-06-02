import React from "react";

const BillInfo = ({ change }) => {
  return (
    <div>
      <h1>Billing details</h1>
      <form
        className="billing form border rounded  p-4"
        action="#payment-card"
        onSubmit={(e) => {
          e.preventDefault();
          window.scrollTo(0, 800);
          return false;
        }}
      >
        {/*.............. First name ...............*/}
        <div className="form-group ">
          <label htmlFor="nameCard">First name</label>
          <input
            type="text"
            className="form-control"
            name="firstname"
            onChange={change}
            required
          ></input>
        </div>
        {/*.............. Last name ...............*/}
        <div className="form-group">
          <label htmlFor="lastname">Last Name</label>
          <input
            type="text"
            className="form-control"
            name="lastname"
            onChange={change}
            required
          ></input>
        </div>
        {/*.............. Email ...............*/}
        <div className="form-group ">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            onChange={change}
            required
          ></input>
        </div>
        {/*.............. Street ...............*/}
        <div className="form-group ">
          <label htmlFor="streetAddress">Street address</label>
          <input
            type="text"
            className="form-control"
            name="streetAddress"
            onChange={change}
            required
          ></input>
        </div>
        {/*.............. Apt ...............*/}
        <div className="form-group ">
          <label htmlFor="aptAddress">Apt, suite, etc.</label>
          <input
            type="text"
            className="form-control"
            name="aptAddress"
            onChange={change}
            required
          ></input>
        </div>
        {/*.............. City ...............*/}
        <div className="form-group ">
          <label htmlFor="cityAddress">City</label>
          <input
            type="text"
            className="form-control"
            name="cityAddress"
            onChange={change}
            required
          ></input>
        </div>
        {/*.............. Country ...............*/}
        <div className="form-group ">
          <label htmlFor="countryAddress">Country</label>
          <input
            type="text"
            className="form-control"
            name="countryAddress"
            onChange={change}
            required
          ></input>
        </div>
        {/*.............. Postal code ...............*/}
        <div className="form-group ">
          <label htmlFor="zipAddress">Postal code</label>
          <input
            type="text"
            className="form-control"
            name="zipAddress"
            onChange={change}
            required
          ></input>
        </div>
        {/*.............. Phone ...............*/}
        <div className="form-group ">
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            className="form-control"
            name="phone"
            pattern="[0-9]{10,13}"
            onChange={change}
            required
          ></input>
        </div>
        {/*.............. Save info ...............*/}
        <div className="form-check">
          <input
            type="checkbox"
            name="saveAddress"
            className="form-check-input"
            onChange={change}
          ></input>
          <label htmlFor="saveAddress" className="form-check-label">
            Save this information for the next time
          </label>
        </div>
        {/*............. Buttons ...................*/}
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <button type="reset" className="btn btn-light p-2 mx-3">
          Reset
        </button>
      </form>
    </div>
  );
};
export default BillInfo;

import React from 'react';

const BillInfo = ({ change }) => {
  return (
    <div>
      <h1>Billing details</h1>
      <form className="border rounded m-3 p-3">
        {/*.............. First name ...............*/}
        <div className="form-group ">
          <label htmlFor="firstname">First name</label>
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
          <label htmlFor="lastname">Last name</label>
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
          <label htmlFor="apt">Apt, suite, etc.</label>
          <input
            type="text"
            className="form-control"
            name="apt"
            onChange={change}
            required
          ></input>
        </div>
        {/*.............. City ...............*/}
        <div className="form-group ">
          <label htmlFor="apt">City</label>
          <input
            type="text"
            className="form-control"
            name="city"
            onChange={change}
            required
          ></input>
        </div>
        {/*.............. Country ...............*/}
        <div className="form-group ">
          <label htmlFor="country">Country</label>
          <input
            type="text"
            className="form-control"
            name="country"
            onChange={change}
            required
          ></input>
        </div>
        {/*.............. Postal code ...............*/}
        <div className="form-group ">
          <label htmlFor="zip">Postal code</label>
          <input
            type="text"
            className="form-control"
            name="zip"
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
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
            onChange={change}
            required
          ></input>
        </div>
        {/*.............. Save info ...............*/}
        <div className="form-group">
          <input type="checkbox" name="saveAddress" onChange={change}></input>
          <label htmlFor="saveAddress">
            Save this information for the next time
          </label>
        </div>
      </form>
    </div>
  );
};
export default BillInfo;

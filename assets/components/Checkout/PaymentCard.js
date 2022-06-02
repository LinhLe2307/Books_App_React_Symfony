import React from "react";

const PaymentCard = ({ change }) => {
  return (
    <div>
      <h1>Payment card</h1>
      <form className="border rounded m-3 p-3">
        {/*.............. First name...............*/}
        <div className="form-group ">
          <label htmlFor="nameCard">Name Card</label>
          <input
            type="text"
            className="form-control"
            name="nameCard"
            onChange={change}
            required
          ></input>
        </div>
        {/*.............. Last name...............*/}
        <div className="form-group ">
          <label htmlFor="validMonth">valid month</label>
          <input
            type="text"
            className="form-control"
            name="validMonth"
            onChange={change}
            required
          ></input>
        </div>
        {/*.............. Card number...............*/}
        <div className="form-group ">
          <label htmlFor="cardNumber">Card number</label>
          <input
            type="tel"
            className="form-control"
            name="cardNumber"
            inputMode="numeric"
            pattern="[0-9\s]{13,19}"
            autoComplete="cc-number"
            maxLength="19"
            placeholder="xxxx xxxx xxxx xxxx"
            onChange={change}
            required
          ></input>
        </div>
        {/*.............. CVV...............*/}
        <div className="form-group ">
          <label htmlFor="cvv">CVV</label>
          <input
            type="tel"
            inputMode="numeric"
            pattern="[0-9]{3,4}"
            className="form-control"
            name="cvv"
            onChange={change}
            required
          ></input>
        </div>
        {/*.............. Save info ...............*/}
        <div className="form-group">
          <input type="checkbox" name="saveCard" onChange={change}></input>
          <label htmlFor="saveCard">
            Save this information for the next time
          </label>
        </div>
      </form>
    </div>
  );
};

export default PaymentCard;

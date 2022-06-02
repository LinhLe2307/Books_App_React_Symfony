import React from 'react';

const PaymentCard = ({ change }) => {
  return (
    <div>
      <h1>Payment card</h1>
      <form
        id="payment-card"
        className="payment-card border rounded p-4 m-3"
        action="#"
        onSubmit={(e) => {
          e.preventDefault();
          window.scrollTo(0, 0);
          return false;
        }}
      >
        {/* <div className="row">
          <div className="col"> */}
        {/*.............. First name...............*/}
        {/* <div className="form-group ">
              <label htmlFor="firstname">First name</label>
              <input
                type="text"
                className="form-control"
                name="firstname"
                onChange={change}
                required
              ></input>
            </div>
          </div>
          <div className="col"> */}
        {/*.............. Last name...............*/}
        {/* <div className="form-group ">
              <label htmlFor="lastname">Last name</label>
              <input
                type="text"
                className="form-control"
                name="lastname"
                onChange={change}
                required
              ></input>
            </div>
          </div> */}
        {/* </div> */}
        <div className="">
          {/*.............. Name...............*/}
          <div className="form-group ">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              onChange={change}
              required
            ></input>
          </div>
        </div>
        <div className="row">
          <div className="col-8">
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
          </div>
          <div className="col">
            {/*.............. CVV...............*/}
            <div className="form-group ">
              <label htmlFor="cvv">CVV</label>
              <input
                type="tel"
                inputMode="numeric"
                pattern="[0-9]{3,4}"
                className="form-control"
                placeholder="••••"
                name="cvv"
                onChange={change}
                required
              ></input>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            {/*.............. Valid month ...............*/}
            <div className="form-group ">
              <label htmlFor="validMonth">Valid until month</label>
              <input
                type="tel"
                className="form-control"
                name="validMonth"
                onChange={change}
                pattern="[0-9]{2}"
                required
              ></input>
            </div>
          </div>
          <div className="col">
            {/*.............. Valid year ...............*/}
            <div className="form-group ">
              <label htmlFor="validYear">Valid until year</label>
              <input
                type="tel"
                className="form-control"
                name="validYear"
                pattern="[0-9]{2}"
                onChange={change}
                required
              ></input>
            </div>
          </div>
        </div>

        {/*.............. Save info ...............*/}
        <div className="form-check">
          <input
            type="checkbox"
            name="saveCard"
            className="form-check-input"
            onChange={change}
          ></input>
          <label htmlFor="saveCard" className="form-check-label">
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

export default PaymentCard;

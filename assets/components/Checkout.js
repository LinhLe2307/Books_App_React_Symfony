import React from 'react';

const Checkout = (props) => {
  return (
    <div>
      {/*....... Billing details .......*/}
      <h1>Billing details</h1>
      <form className="border rounded m-3 p-3">
        <div className="form-group ">
          <label htmlFor="firstname">First name</label>
          <input type="text" className="form-control" name="firstname"></input>
        </div>
        <div className="form-group">
          <label htmlFor="lastname">Last name</label>
          <input type="text" className="form-control" name="lastname"></input>
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input type="text" className="form-control" name="address"></input>
        </div>
        <button className="btn btn-primary">SUBMIT</button>
      </form>
      {/*....... Order overview .......*/}
      <div className="border rounded m-3 p-3">
        <h3>Your order</h3>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Product</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Item 1</td>
              <td>20€</td>
            </tr>
            <tr>
              <td>Item 2</td>
              <td>18€</td>
            </tr>
          </tbody>
        </table>
        <button className="btn btn-primary">PLACE ORDER</button>
      </div>
    </div>
  );
};
export default Checkout;

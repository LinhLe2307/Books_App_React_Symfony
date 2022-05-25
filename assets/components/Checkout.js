import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';

const Checkout = (props) => {
  const [orders, setOrders] = useState([]);
  const [address, setAddress] = useState({
    firstname: '',
    lastname: '',
    address: '',
    productName: '',
  });
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = () => {
    axios
      .get('/api/checkout')
      .then((res) => {
        setOrders(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log('Axios error: ', err);
      });
  };

  const handlePost = () => {
    setIsSaving(true);
    let formData = new FormData();
    let dataToSend =
      address.productName +
      ', ' +
      address.firstname +
      ' ' +
      address.lastname +
      ', ' +
      address.address;
    formData.append('address', dataToSend);
    axios
      .post('/api/checkout', formData)
      .then((res) => {
        Swal.fire({
          icon: 'success',
          title: 'Order placed successfully',
          showConfirmButton: false,
          timer: 1500,
        });
        setIsSaving(false);
        setAddress('');
      })
      .catch((err) => {
        console.log('Axios error: ', err);
        Swal.fire({
          icon: 'error',
          title: 'An error occured',
          showConfirmButton: false,
          timer: 1500,
        });
        setIsSaving(false);
      });
  };

  return (
    <div>
      {/*....... Billing details .......*/}
      <h1>Billing details</h1>
      <form className="border rounded m-3 p-3">
        <div className="form-group ">
          <label htmlFor="firstname">First name</label>
          <input
            type="text"
            className="form-control"
            name="firstname"
            onChange={(e) => {
              setAddress({ ...address, firstname: e.target.value });
            }}
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="lastname">Last name</label>
          <input
            type="text"
            className="form-control"
            name="lastname"
            onChange={(e) => {
              setAddress({ ...address, lastname: e.target.value });
            }}
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            className="form-control"
            name="address"
            onChange={(e) => {
              setAddress({ ...address, address: e.target.value });
            }}
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="address">Book name</label>
          <input
            type="text"
            className="form-control"
            name="productName"
            onChange={(e) => {
              setAddress({ ...address, productName: e.target.value });
            }}
          ></input>
        </div>
      </form>
      {/*....... Order overview .......*/}
      <div className="border rounded m-3 p-3">
        <h3>Your order</h3>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Book name</th>
              <th scope="col">First name</th>
              <th scope="col">Last name</th>
              <th scope="col">Address</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{address.productName}</td>
              <td>{address.firstname}</td>
              <td>{address.lastname}</td>
              <td>{address.address}</td>
            </tr>
          </tbody>
        </table>
        <button
          disabled={isSaving}
          className="btn btn-primary"
          onClick={handlePost}
        >
          PLACE ORDER
        </button>
      </div>
      {/*....... Order history .......*/}
      <div className="border rounded m-3 p-3">
        <h4>Order history</h4>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Order ID</th>
              <th scope="col">Order info</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, key) => {
              return (
                <tr key={key}>
                  <td>{order.order_id}</td>
                  <td>{order.address}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Checkout;

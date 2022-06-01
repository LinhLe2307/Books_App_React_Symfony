import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import axios from '../../../web/node_modules/axios';
import { useLocation } from '../../../web/node_modules/react-router-dom';

import BillInfo from './Checkout/BillInfo';
import PaymentCard from './Checkout/PaymentCard';

const Checkout = (props) => {
  const [orders, setOrders] = useState([]);
  const [billInfo, setBillInfo] = useState({
    firstname: '',
    lastname: '',
    email: '',
    streetAddress: '',
    apt: '',
    city: '',
    country: '',
    zip: '',
    phone: '',
    saveAddress: false,
  });
  const [cardInfo, setCardInfo] = useState({
    firstname: '',
    lastname: '',
    cardNumber: '',
    cvv: '',
    saveCard: false,
  });
  const [isSaving, setIsSaving] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const location = useLocation();
  const order = location.state?.data ? location.state.data : '';

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = () => {
    axios
      .get('/api/checkout')
      .then((res) => {
        setOrders(res.data);
      })
      .catch((err) => {
        console.log('Axios error: ', err);
      });
  };

  const handleInputBilling = (e) => {
    //Handle checkbox input
    if (e.target.name == 'saveAddress') {
      setBillInfo({ ...billInfo, [e.target.name]: [e.target.checked] });
    } else {
      //Handle other input
      setBillInfo({
        ...billInfo,
        [e.target.name]: [e.target.value],
      });
    }
  };

  const handleInputCard = (e) => {
    //Handle checkbox input
    if (e.target.name == 'saveAddress') {
      setCardInfo({ ...cardInfo, [e.target.name]: [e.target.checked] });
    } else {
      //Handle other input
      setCardInfo({
        ...cardInfo,
        [e.target.name]: [e.target.value],
      });
    }
    console.log(cardInfo);
  };

  const handlePost = () => {
    let formData = new FormData();
    setIsSaving(true);
    const productIds = order.map((product) => product.id);
    formData.append('billInfo', billInfo);
    formData.append('cardInfo', cardInfo);
    formData.append('product_id[]', productIds);

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
        setIsSubmitting(true);
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

  // Display the history orders immediately after submitting
  useEffect(() => {
    fetchOrders();
  }, [isSubmitting]);

  return (
    <div>
      <BillInfo change={(e) => handleInputBilling(e)} />
      <PaymentCard change={(e) => handleInputCard(e)} />
      {/*....... Order overview .......*/}
      <div className="border rounded m-3 p-3">
        <h3>Your order</h3>
        {/* Billing details */}
        <h4></h4>
        <div>
          {billInfo.firstname} {billInfo.lastname}
        </div>
        <div>Email: {billInfo.email}</div>
        <div>
          Address: {billInfo.streetAddress} {billInfo.apt}, {billInfo.city},{' '}
          {billInfo.country}, {billInfo.zip}
        </div>
        <div>Phone: {billInfo.phone}</div>

        {/* Products list */}
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Book ID</th>
              <th scope="col">Book</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>
            {order.map((product, key) => {
              return (
                <tr key={key}>
                  <td>{product.id}</td>
                  <td>
                    {product.volumeInfo?.title} -{' '}
                    {product.volumeInfo?.authors[0]}
                  </td>
                  <td>{product.saleInfo?.listPrice?.amount}</td>
                </tr>
              );
            })}
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
                  <td>{order.id}</td>
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

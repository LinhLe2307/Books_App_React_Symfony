import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import axios from "axios";
// import { useLocation } from '../../../web/node_modules/react-router-dom';

import BillInfo from "./Checkout/BillInfo";
import PaymentCard from "./Checkout/PaymentCard";

const Checkout = ({ books, click }) => {
  const [orders, setOrders] = useState([]);
  const [billInfo, setBillInfo] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    // Address
    streetAddress: "",
    aptAddress: "",
    cityAddress: "",
    countryAddress: "",
    zipAddress: "",
    saveAddress: false,
  });
  const [cardInfo, setCardInfo] = useState({
    name: "",
    cardNumber: "",
    cvv: "",
    validMonth: "",
    validYear: "",
    saveCard: false,
  });
  const [isSaving, setIsSaving] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  // const location = useLocation();
  // const order = location.state?.data ? location.state.data : [];

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = () => {
    axios
      .get("/api/checkout")
      .then((res) => {
        setOrders(res.data);
      })
      .catch((err) => {
        console.log("Axios error: ", err);
      });
  };

  const handleInputBilling = (e) => {
    //Handle checkbox input
    if (e.target.name == "saveAddress") {
      setBillInfo({ ...billInfo, [e.target.name]: [e.target.checked] });
    } else {
      //Handle other input
      setBillInfo({
        ...billInfo,
        [e.target.name]: [e.target.value],
      });
    }
    // console.log(billInfo);
  };

  const handleInputCard = (e) => {
    //Handle checkbox input
    if (e.target.name == "saveCard") {
      setCardInfo({ ...cardInfo, [e.target.name]: [e.target.checked] });
    } else {
      //Handle other input
      setCardInfo({
        ...cardInfo,
        [e.target.name]: [e.target.value],
      });
    }
    // console.log(cardInfo);
  };

  const handlePost = () => {
    let formData = new FormData();
    setIsSaving(true);
    const productIds = books.map((product) => product.id);

    for (let [key, value] of Object.entries(billInfo)) {
      formData.append(`${key}`, `${value}`);
    }
    for (let [key, value] of Object.entries(cardInfo)) {
      formData.append(`${key}`, `${value}`);
    }

    //Order
    let address = `${billInfo.streetAddress}, ${billInfo.cityAddress}, ${billInfo.countryAddress} `;
    formData.append("address", address);
    formData.append("product_id[]", productIds);

    axios
      .post("/api/checkout", formData)
      .then((res) => {
        Swal.fire({
          icon: "success",
          title: "Order placed successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        setIsSaving(false);
        setBillInfo({});
        setCardInfo({});
        //Clear shopping cart
        click();
        setIsSubmitting(true);
      })
      .catch((err) => {
        console.log("Axios error: ", err.response.data);
        Swal.fire({
          icon: "error",
          title: "An error occured",
          showConfirmButton: false,
          timer: 1500,
        });
        setIsSaving(false);
      });
  };

  // Display the history orders immediately after submitting them
  useEffect(() => {
    fetchOrders();
  }, [isSubmitting]);

  return (
    <div className="container checkout">
      <div className="row">
        <div className="col">
          <BillInfo change={(e) => handleInputBilling(e)} />
          <PaymentCard change={(e) => handleInputCard(e)} />
        </div>
        <div className="col">
          {/*....... Order overview .......*/}
          <div className="order-overview border rounded m-3 p-3">
            <h3>Your order</h3>
            {/* Billing details */}
            <h4></h4>
            <div>
              {billInfo.firstname} {billInfo.lastname}
            </div>
            <div>Email: {billInfo.email}</div>
            <div>
              Address:
              {/* Conditional rendering for showing commas */}
              {billInfo.streetAddress == ""
                ? " "
                : ` ${billInfo.streetAddress} ${billInfo.aptAddress}, `}
              {billInfo.cityAddress == "" ? " " : `${billInfo.cityAddress}, `}
              {billInfo.countryAddress == ""
                ? " "
                : `${billInfo.countryAddress}, `}
              {billInfo.zipAddress}
            </div>
            <div>Phone: {billInfo.phone}</div>

            {/* Products list */}
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">Book</th>
                  <th scope="col">Price</th>
                </tr>
              </thead>
              <tbody>
                {books?.map((product, key) => {
                  return (
                    <tr key={key}>
                      <td>{key + 1}</td>
                      <td>
                        {product.volumeInfo?.title} -{" "}
                        {product.volumeInfo?.authors[0]}
                      </td>
                      <td>
                        {product.saleInfo?.listPrice?.amount}{" "}
                        {product.saleInfo?.listPrice?.currencyCode}
                      </td>
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
                {orders?.map((order, key) => {
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
      </div>
    </div>
  );
};
export default Checkout;

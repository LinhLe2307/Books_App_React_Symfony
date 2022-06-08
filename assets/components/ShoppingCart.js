import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const ShoppingCart = ({ books, click }) => {
  useEffect(() => {
    // console.log("Books in a cart: ", books);
    // console.log("Books list length: ", books.length);

    //Warning if reload button is clicked
    const unloadCallback = (e) => {
      e.preventDefault();
      e.returnValue = "";
      return "";
    };
    window.addEventListener("beforeunload", unloadCallback);
    return () => window.removeEventListener("beforeunload", unloadCallback);
  }, []);

  if (!books.length == 0) {
    return (
      <div>
        <h1 className="p-3 m-2">Shopping Cart</h1>
        <div>Items count: {books.length}</div>
        {books.map((book, key) => {
          return (
            <div className="order card m-2" key={key}>
              <div className="card-body d-inline-flex">
                {/*.......... Card image .........*/}
                <img
                  className="card-image d-inline-flex p-2"
                  src={book.volumeInfo?.imageLinks?.thumbnail}
                  style={{ height: "150px", width: "auto" }}
                ></img>
                <div className="card-content d-inline">
                  {/*.......... Card title .........*/}
                  <h2 className="card-title">
                    {book.volumeInfo?.title} - {book.volumeInfo?.authors[0]}
                  </h2>
                  {/*.......... Card info .........*/}
                  <div className="card-info p-2">
                    {book.searchInfo?.textSnippet}
                  </div>
                  {/*.......... Card price .........*/}
                  <div className="card-price p-2">
                    {book.saleInfo?.listPrice?.amount}{" "}
                    {book.saleInfo?.listPrice?.currencyCode}
                  </div>
                </div>
                {/*.......... Delete button .........*/}
                <button
                  onClick={(e) => click(e, key)}
                  className="btn btn-light btn-delete"
                  name={book.id}
                >
                  x
                </button>
              </div>
            </div>
          );
        })}
        <Link
          to={"/checkout"}
          // state={{ data: books }}
          className="btn btn-primary m-2"
        >
          CHECKOUT
        </Link>
      </div>
    );
  } else {
    return (
      <div>
        <h1 className="p-3 m-2">Shopping Cart</h1>
        <div className="empty-cart text-muted">
          <div className="p-3 empty-cart text">Cart is empty</div>
          <span className="material-symbols-outlined empty-cart icon">
            production_quantity_limits
          </span>
        </div>
      </div>
    );
  }
};

export default ShoppingCart;

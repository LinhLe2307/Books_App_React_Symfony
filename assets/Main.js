import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import {
    BrowserRouter as BrowserRouter,
    Router,
    Routes,
    Route,
} from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./components/HomePage";
import Checkout from "./components/Checkout";

function Main() {

    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Layout />}>
                    <Route
                        index
                        element={<HomePage />}
                    />
                    <Route path="/checkout" element={<Checkout />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Main;

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
    <React.StrictMode>
        <Main />
    </React.StrictMode>
);

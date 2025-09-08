import { BrowserRouter as Router, Routes, Route } from "react-router";
import React, { useEffect, useState } from "react";
import Header from "./component/Header";
import Banner from "./component/Banner";
import Home from "./pages/Home";
import Footer from "./component/Footer";
import Products from "./pages/Products";
import { ProductContext, ProductProvider } from "./context/ProductContext";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import ThankYou from "./pages/ThankYou";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import Aboutus from "./pages/Aboutus";
import Loader from "./component/Loader";
import { ToastContainer } from "react-toastify";
import { getCategories } from "./services/api/categories";
import { AuthProvider } from "./context/AuthContext";

function App() {
  const [loading, setLoading] = useState(true);
   const token = localStorage.getItem("auth-token");
  const initialState = { accessToken: token ? token : null };


  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);

    getCategories();
  }, []);

  return (
    <div className="">
      {loading ? (
        <Loader />
      ) : (
          <AuthProvider defaultState={initialState}>
        <ProductProvider>
          <Router>
            <Header />
            <ToastContainer position="top-right" autoClose={5000} />
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Banner />
                    <Home />
                  </>
                }
              />
              <Route path="/Products" element={<Products />} />
              <Route path="/details/:id" element={<ProductDetails />} />
              <Route path="/Cart" element={<Cart />} />
              <Route path="/Checkout" element={<Checkout />} />
              <Route path="/ThankYou" element={<ThankYou />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/Register" element={<Register />} />
              <Route path="/AboutUs" element={<Aboutus />} />
              <Route path="/Contact" element={<Contact />} />
            </Routes>
            <Footer />
          </Router>
        </ProductProvider>
      </AuthProvider>
      )}
    </div>
  );
}

export default App;

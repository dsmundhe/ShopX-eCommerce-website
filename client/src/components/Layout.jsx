import React from "react";
import Navbar from "./Navbar";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Products from "./Products";
import Shop from "./Shop";
import Contact from "./Contact";
import SignUp from "./Signup";
import Cart from "./Cart";
import Showbox from "./Showbox";
import ProfilePage from "./Profile";
function Layout() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/shop" element={<Shop />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/carts" element={<Cart />}></Route>
          <Route path="/showbox" element={<Showbox />}></Route>
          <Route path="/profile" element={<ProfilePage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Layout;

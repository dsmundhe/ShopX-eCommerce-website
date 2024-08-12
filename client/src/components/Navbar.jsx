import React from "react";
import "../style/Navbar.css";
import { Link } from "react-router-dom";
import { PiShoppingCartSimple } from "react-icons/pi";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { addCart } from "../features/ecomSlice";
import axios from "axios";
function Navbar() {
  const loginData = useSelector((data) => data.login);
  const singnupData = useSelector((data) => data.signup);
  const cartval = useSelector((data) => data.carts)
  const [login, setlogin] = useState(false);
  const dispatch = useDispatch();



  return (
    <div>
      <div className="navbar">
        <div className="leftnav">
          <div className="logo">
            <h1>
              Shop<span>X</span>
            </h1>
          </div>
          <div className="list">
            <ul>
              <Link to="/">
                <li>Home</li>
              </Link>

              <Link to='/shop'>
                <li>Shop</li>
              </Link>
              <Link to='/products'>
                {" "}
                <li>Products</li>
              </Link>
              <Link to='/contact'>
                {" "}
                <li>Contact us</li>
              </Link>
            </ul>
          </div>
        </div>

        <div className="rightnav">
          {
            loginData.length === 0 ? (<><div className="btns">
              <Link to="/login">
                {" "}
                <button>Login</button>
              </Link>
              {
                singnupData.length === 0 ? (<><Link to='/signup'> <button>Sign up</button></Link></>) : (<></>)
              }
            </div></>) : (<>
              {
                loginData.map((val) => {
                  return <div className="welcome">
                    <h2 key={1}>Welocome to ShopX</h2>
                    <div className="carts1">
                      <div className="fav">
                        <Link to='/carts'
                        ><PiShoppingCartSimple className="fav-btn" /></Link>
                      </div>
                    </div>
                    <div className="profile">
                      <Link to='/profile'><CgProfile /></Link>
                    </div>
                  </div>
                })
              }
            </>)
          }

        </div>
      </div>
      <div className="navbox">

      </div>
    </div>
  );
}

export default Navbar;

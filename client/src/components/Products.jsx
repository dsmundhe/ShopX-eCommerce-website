import React, { useState } from "react";
import "../style/Products.css";
import { useSelector, useDispatch } from "react-redux";
import { BsTwitterX } from "react-icons/bs";
import { SiFacebook } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { showBox } from "../features/ecomSlice";
import { Link } from "react-router-dom";
import axios from "axios";
import { addCart } from '../features/ecomSlice';
function Products() {
  const products = useSelector((data) => data.products);
  const dispatch = useDispatch();
  const loginData = useSelector((data) => data.login);
  const [msg, setmsg] = useState(null);
  const addCarts = async (e) => {
    try {
      const { email } = loginData[0];
      const { id } = e;
      const data = e;
      const response = await axios.post('https://e-combackend-xa5s.onrender.com/user/addcart', { email: email, id: id, data: data });
      setmsg('Cart added.....');
      dispatch(addCart(data));
      await setTimeout(() => {
        setmsg(null)
      }, 500);

    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <div className="msgbox">
        <h1>{msg}</h1>
      </div>
      <div className="product">
        {products.map((val) => {
          return (
            <div key={val.id}>
              <img src={val.imageLink} alt={val.name} />
              <h3>{val.name}</h3>
              <h2 className="price">{val.price} $</h2>
              <p>{val.description}</p>
              {
                loginData.length !== 0 ? (<>
                  <Link to='/showbox'> <button
                    onClick={() => dispatch(showBox({
                      id: val.id,
                      price: val.price,
                      name: val.name,
                      description: val.description,
                      imageLink: val.imageLink,
                    }))}
                  >Buy now</button></Link>
                  <button
                    onClick={() => addCarts({
                      id: val.id,
                      price: val.price,
                      name: val.name,
                      description: val.description,
                      imageLink: val.imageLink,
                    })}

                  >Add to cart</button>
                </>) : (<>
                  <Link to='/login'> <button
                  >Buy now</button></Link>
                  <Link to='/login'><button >Add to cart</button></Link>
                </>)
              }

            </div>
          );
        })}
      </div>
      <div>
        <footer className="footer">
          <div className="footer-container">
            <div className="footer-section about">
              <h2>About Us</h2>
              <p>
                We are a leading technology company committed to delivering
                exceptional products and services that enrich our customers'
                lives. Our team is dedicated to innovation and excellence.
              </p>
            </div>

            <div className="footer-section links">
              <h2>Quick Links</h2>
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Projects</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>

            <div className="footer-section contact">
              <h2>Contact Us</h2>
              <p>
                <i className="fas fa-map-marker-alt"></i> Nagput Maharashtra ,
                India
              </p>
              <p>
                <i className="fas fa-phone"></i> +91 8080255843
              </p>
              <p>
                <i className="fas fa-envelope"></i> info@shopX.com
              </p>
            </div>

            <div className="footer-section social">
              <h2>Follow Us</h2>
              <div className="social-icons">
                <a href="#">
                  <i className="fab fa-facebook-f">
                    <SiFacebook />
                  </i>
                </a>
                <a href="#">
                  <i className="fab fa-twitter">
                    <BsTwitterX />
                  </i>
                </a>
                <a href="#">
                  <i className="fab fa-instagram">
                    <GrInstagram />
                  </i>
                </a>
                <a href="#">
                  <i className="fab fa-linkedin-in">
                    <FaLinkedinIn />
                  </i>
                </a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; ShopX All Rights Reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Products;

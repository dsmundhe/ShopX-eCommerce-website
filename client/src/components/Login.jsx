import React, { useState } from 'react'; // Move the useState import here
import '../style/Login.css'; // Import the CSS file
import { BsTwitterX } from "react-icons/bs";
import { SiFacebook } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import axios from 'axios';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { logindata } from '../features/ecomSlice';
import Loader from './Loader';
const Login = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');
  const [login, setLogin] = useState(false);
  const [loader, setloader] = useState(false);
  const dispatch = useDispatch();
  const loginData = useSelector((data) => data.login);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setloader(true);
    try {
      const response = await axios.post('https://e-combackend-xa5s.onrender.com/user/login', {
        name: name,
        email: email,
        password: password
      });
      const { success, message } = await response.data;
      if (success) {
        setloader(false);
        setMsg('Login successful');
        setLogin(true);
        dispatch(logindata({ name: name, email: email }))
      } else {
        setloader(false);
        setMsg(message || 'check email and password');

      }
      
    } catch (error) {
      setloader(false);
      setLogin(false);
      setMsg(error.response?.data?.message || error.message);
    }
  }

  return (
    <div>
      {
        login === false ? (<>  <div className="login-page">
          <div className="login-container">
            <h1>Login</h1>
            <form className="login-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  required
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="text"
                  id="password"
                  name="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button type="submit" className="login-btn">Login</button>
            </form>
            <p className='msg'>{msg}</p>
            {
              loader ? (<><Loader /></>) : (<></>)
            }
          </div>
        </div></>) : (<>
          <div className='login-page success-page'>
            <h1 className='success-message'>Login Successful!</h1>
            <Link to='/' className='home-button'>
              <button className='go-home-button'>Go to Home Page</button>
            </Link>
          </div>

        </>)
      }
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
              <i className="fas fa-map-marker-alt"></i> Nagpur Maharashtra,
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
  );
}

export default Login;

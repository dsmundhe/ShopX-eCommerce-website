import React, { useState } from 'react';
import '../style/Signup.css'
import { BsTwitterX } from "react-icons/bs";
import { SiFacebook } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { signupdata } from '../features/ecomSlice';
import { Link } from 'react-router-dom';
import Loader from './Loader';

const SignUp = () => {
  const [loader, setloader] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setmeg] = useState(null);
  const signupData = useSelector((data) => data.signup);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission here
    setloader(true);
    try {
      const response = await axios.post('https://e-combackend-xa5s.onrender.com/user/register', {
        name: name,
        email: email,
        password: password
      });
      const { success, message } = await response.data;
      if (success) {
        setloader(false);
        await setmeg(success);
        dispatch(signupdata({
          name: name,
          email: email,
        }))
        setmeg('Sign up successful........')
      } else {
        setloader(false)
        setmeg('Password must be greater than 6 letters',message);
      }

    } catch (error) {
      setloader(false)
      setmeg('Email already exist');
    }
  };

  return (
    <div>
      {
        signupData.length === 0 ? (<>
          <div className="signup-page">
            <div className="signup-container">
              <h1>Sign Up</h1>
              <form onSubmit={handleSubmit} className="signup-form">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="mobile">Mobile Number</label>
                  <input
                    type="text"
                    id="mobile"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="gender">Gender</label>
                  <select
                    id="gender"
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="age">Age</label>
                  <input
                    type="number"
                    id="age"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="address">Address</label>
                  <textarea
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    rows="4"
                    required
                  />
                </div>
                <button type="submit" className="signup-btn">Sign Up</button>
              </form>
              <p className='msg'>{msg}</p>
              {
                loader ? (<><Loader /></>) : (<></>)
              }
            </div>
          </div>
        </>) : (<>
          <div className='signup-page1'>
            <h1>Sign up Successful.......</h1>
            <Link to='/login'><button>Login Now</button></Link>
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
  );
};

export default SignUp;

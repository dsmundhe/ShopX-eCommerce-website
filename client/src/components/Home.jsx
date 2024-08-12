import React from "react";
import "../style/Home.css";
import { HiOutlineTruck } from "react-icons/hi2";
import { MdOutlineRequestPage } from "react-icons/md";
import { MdOutlineSupportAgent } from "react-icons/md";
import { MdOutlinePayments } from "react-icons/md";
import { BsTwitterX } from "react-icons/bs";
import { SiFacebook } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
function Home() {
  const loginData = useSelector((data) => data.login);
  return (
    <div>
      <div className="container">
        <div className="mainbox">
          <div className="aboutbox">
            <h2>ShopX</h2>
            <h1> Let's Go with technology</h1>
            {
              loginData.map((val) => {
                return <>
                  <h2>Welcome</h2>
                  <h1 key={val.name}>{val.name}</h1>
                </>
              })
            }
            <div>
              <Link to='/products'><button>Let's Start</button></Link>
            </div>
          </div>
          <div className="aboutbox"></div>
        </div>
        <div className="box-1">
          <div className="images">
            <div className="topimages">
              <div className="img-1 img">
                <div className="text">
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Esse, dolorem!
                  </p>
                  <Link to='/products'><button>Buy now</button></Link>
                </div>
              </div>
              <div className="img-2 img">
                <div className="text">
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Esse, dolorem!
                  </p>
                  <Link to='/products'> <button>Buy now</button></Link>
                </div>
              </div>
              <div className="img-3 img">
                <div className="text">
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Esse, dolorem!
                  </p>
                  <Link to='/products'><button>Buy now</button></Link>
                </div>
              </div>
            </div>
            <div className="bottomimages">
              <div className="img-1 img">
                <div className="text">
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Esse, dolorem!
                  </p>
                  <Link to='/products'> <button>Buy now</button></Link>
                </div>
              </div>
              <div className="img-2 img">
                <div className="text">
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Esse, dolorem!
                  </p>
                  <Link to='/products'><button>Buy now</button></Link>
                </div>
              </div>
              <div className="img-3 img">
                <div className="text">
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Esse, dolorem!
                  </p>
                  <Link to='/products'><button>Buy now</button></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="box-2">
          <div>
            <HiOutlineTruck className="icon" />
            <h3>Free shipping</h3>
          </div>
          <div>
            <MdOutlineRequestPage className="icon" />
            <h3>Money Gaurantee</h3>
          </div>
          <div>
            <MdOutlineSupportAgent className="icon" />
            <h3> Online support 24/7</h3>
          </div>
          <div>
            <MdOutlinePayments className="icon" />
            <h3>Secure payment</h3>
          </div>
        </div>
        <div className="box-3">
          <div className="offerbox">
            <div>
              <img
                src="https://i.pinimg.com/564x/20/f9/4c/20f94c3616dd590bf4a0cb4b08787866.jpg"
                alt=""
              />
            </div>
            <div className="info">
              <div className="head">
                <h1>Apple Vision Pro</h1>
                <p>
                  The Apple Vision Pro is a revolutionary mixed-reality headset
                  announced by Apple on June 5, 2023, during their annual
                  Worldwide Developers Conference (WWDC). It marks Apple's first
                  significant entry into the augmented reality (AR) and virtual
                  reality (VR) space, representing a substantial leap in
                  computing technology. Here are some key features and details
                  about the Apple Vision Pro
                </p>
                <div className="btns">
                  <Link to='/products'><button>Book now</button></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="box-3">
          <div className="offerbox">
            <div>
              <img
                src="https://i.pinimg.com/564x/1a/92/37/1a9237bcd6e206ce8915c22a7850c40c.jpg"
                alt=""
              />
            </div>
            <div className="info">
              <div className="head">
                <h1>Vision Pro Ecosystem</h1>
                <p>
                  Apple is actively working with developers to expand the Vision
                  Pro ecosystem, encouraging the creation of innovative
                  applications tailored to spatial computing. This includes
                  support for popular development tools like Unity, Unreal
                  Engine, and Swift, ensuring a diverse range of apps and
                  experiences will be available.
                </p>
                <div className="btns">
                  <Link to='/products'><button>Book now</button></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
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

export default Home;

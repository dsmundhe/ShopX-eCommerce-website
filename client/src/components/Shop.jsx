import React from "react";
import { HiOutlineTruck } from "react-icons/hi2";
import { MdOutlineRequestPage, MdOutlineSupportAgent, MdOutlinePayments } from "react-icons/md";
import { BsTwitterX } from "react-icons/bs";
import { SiFacebook } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { Link } from "react-router-dom";
import '../style/Shop.css'

const Shop = () => {
  return (
    <div className="offer-page">
      {/* Header Section */}
      <header className="offer-header">
        <div className="offer-banner">
          <h1>Special Offers at  <span>ShopX</span></h1>
          <p>Grab the Best Deals and Discounts Today!</p>
          <Link to='/products'><button className="shop-now-btn">Shop Now</button></Link>
        </div>
      </header>

      {/* Featured Offers Section */}
      <section className="featured-offers">
        <h2 className="section-title">Featured Offers</h2>
        <div className="offers-grid">
          {/* Offer Item 1 */}
          <div className="offer-item">
            <img src="https://i.pinimg.com/564x/dc/f6/23/dcf6239bbf6a973c7b06908f8fe03409.jpg" alt="Offer 1" className="offer-image" />
            <div className="offer-details">
              <h3>Wireless Headphones</h3>
              <p className="offer-description">
                Experience unmatched sound quality with our latest wireless headphones. Now available at a special price!
              </p>
              <Link to='/products'><button className="buy-now-btn">Buy Now</button></Link>
            </div>
          </div>
          {/* Offer Item 2 */}
          <div className="offer-item">
            <img src="https://i.pinimg.com/564x/c3/79/d8/c379d84ca56b74536016d0329761a6fa.jpg" alt="Offer 2" className="offer-image" />
            <div className="offer-details">
              <h3>Smartwatch Series X</h3>
              <p className="offer-description">
                Stay connected and track your fitness with the new Smartwatch Series X. Special offer available now!
              </p>
              <Link to='/products'><button className="buy-now-btn">Buy Now</button></Link>
            </div>
          </div>
          {/* Offer Item 3 */}
          <div className="offer-item">
            <img src="https://i.pinimg.com/564x/e5/a6/95/e5a6950f15ed95c0c2c39a7dc23a7851.jpg" alt="Offer 3" className="offer-image" />
            <div className="offer-details">
              <h3>Fashionable Sunglasses</h3>
              <p className="offer-description">
                Upgrade your style with our trendy sunglasses collection. Limited-time discount available!
              </p>
              <Link to='/products'><button className="buy-now-btn">Buy Now</button></Link>
            </div>
          </div>
          {/* Offer Item 4 */}
          <div className="offer-item">
            <img src="https://i.pinimg.com/736x/d6/1c/af/d61caf5b3a465be446041037b65640da.jpg" alt="Offer 4" className="offer-image" />
            <div className="offer-details">
              <h3>Gaming Laptop Deal</h3>
              <p className="offer-description">
                Boost your gaming experience with our high-performance laptops. Grab this exclusive offer!
              </p>
              <Link to='/products'><button className="buy-now-btn">Buy Now</button></Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Highlights Section */}
      <section className="service-highlights">
        <h2 className="section-title">Why Shop with Us?</h2>
        <div className="service-cards">
          {/* Service Card 1 */}
          <div className="service-card">
            <HiOutlineTruck className="icon" />
            <h3>Free Shipping</h3>
            <p>Enjoy free shipping on all orders over $50.</p>
          </div>
          {/* Service Card 2 */}
          <div className="service-card">
            <MdOutlineRequestPage className="icon" />
            <h3>Money-Back Guarantee</h3>
            <p>Shop with confidence with our 30-day money-back guarantee.</p>
          </div>
          {/* Service Card 3 */}
          <div className="service-card">
            <MdOutlineSupportAgent className="icon" />
            <h3>24/7 Customer Support</h3>
            <p>Our support team is here to help you anytime.</p>
          </div>
          {/* Service Card 4 */}
          <div className="service-card">
            <MdOutlinePayments className="icon" />
            <h3>Secure Payments</h3>
            <p>Shop with peace of mind with secure payment options.</p>
          </div>
        </div>
      </section>

      {/* Highlighted Products Carousel */}


      {/* Footer Section */}
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
                <SiFacebook className="social-icon" />
              </a>
              <a href="#">
                <BsTwitterX className="social-icon" />
              </a>
              <a href="#">
                <GrInstagram className="social-icon" />
              </a>
              <a href="#">
                <FaLinkedinIn className="social-icon" />
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

export default Shop;


import React from 'react';
import '../style/Contact.css';
import { BsTwitterX } from "react-icons/bs";
import { SiFacebook } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { useState } from 'react';
const Contact = () => {
    const [msg, setmsg] = useState(null);
    return (
        <section className="contact-us">
            <div className='contact-us1'>
                <div className="contact-header">
                    <h1>Contact Us</h1>
                    <p>We'd love to hear from you. Reach out to us using the form below or through our contact details.</p>
                </div>
                <div className="contact-content">
                    <div className="contact-form">
                        <h2>Get in Touch</h2>
                        <form onSubmit={(e) => {
                            e.preventDefault();
                            setmsg('Message Recived');
                            e.target.name.value = '';
                            e.target.email.value = '';
                            e.target.message.value = '';
                        }}>
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name" required />

                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" required />

                            <label htmlFor="message">Message</label>
                            <textarea id="message" name="message" required></textarea>
                            <button type="submit">Send Message</button>
                            <p className='message'>{msg}</p>
                        </form>
                    </div>
                    <div className="contact-info">
                        <h2>Contact Information</h2>
                        <div className="info-item">
                            <i className="fas fa-map-marker-alt"></i>
                            <span>Nagpur Maharashtra India</span>
                        </div>
                        <div className="info-item">
                            <i className="fas fa-phone-alt"></i>
                            <span>+91 8080255843</span>
                        </div>
                        <div className="info-item">
                            <i className="fas fa-envelope"></i>
                            <span>contact@ShopX.com</span>
                        </div>
                        <div className='message'>
                            <h2>{msg}</h2>
                            <p>Thans for your contribution</p>
                            <h4>ShopX team</h4>
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
                            <i className="fas fa-map-marker-alt"></i> Nagpur Maharashtra ,
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
        </section>
    );
};

export default Contact;

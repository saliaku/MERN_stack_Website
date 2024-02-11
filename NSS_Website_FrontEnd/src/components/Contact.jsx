import React from 'react';
import Header from './Header'; // Assuming Header component is in the same directory
import Footer from './Footer'; // Assuming Footer component is in the same directory
import '../styles/contact.css'; // Assuming you have a contact.css file in the styles directory

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Contact = (props) => {

    return (
        <>
            <Header /> {/* Include header component */}

            {/* Contact Section */}
            <section className="contact-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="contact-info">
                                <h2>Contact Us</h2>
                                <p>Feel free to reach out to us for any inquiries or feedback.</p>
                                <ul className="contact-info">
                                    <li><i className="fa-map-marker-alt"></i> NIT Calicut</li>
                                    <li><i className="fa-phone"></i> 0495 226226</li>
                                    <li><i className="fa-envelope"></i> nss@nitc.ac.in</li>
                                </ul>



                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="contact-form">
                                <h2>Get in Touch</h2>
                                {/* Include your contact form component here */}
                                {/* Example: <ContactForm /> */}
                                <form>
                                    <input type="text" placeholder="Your Name" />
                                    <input type="email" placeholder="Your Email" />
                                    <textarea placeholder="Your Message"></textarea>
                                    <input type="submit" value="Send Message" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <Footer /> {/* Include footer component */}
        </>
    );
};

export default Contact;

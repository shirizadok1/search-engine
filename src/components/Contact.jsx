import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Button } from 'react-bootstrap';


function Contact() {
    const form = useRef(); //useRef allows you to persist values between renders.It can be used to store a multible values that does not cause a re-render when updated.
    const [enabled, setEnabled] = useState(false);
    const [message, setMessage] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [Error, setError] = useState(null);


    const sendEmail = (e) => {
        setEnabled(true);
        e.preventDefault();

        emailjs.sendForm('service_dhknee6', 'template_p18tcao', form.current, '8bV747R1UYBcLgPGd')
            .then((result) => {
                alert("Your message has been received, Thank you!");
            }, (error) => {
                alert("Oops, something went wrong!");
            });
        setEnabled(false);

    };

    // const canNotSend = () => {
    //     return (!message && !name && !email);
    // }

    const handleMessageChange = (event) => {
        setMessage(event.target.value);
    }
    const handleNameChange = (event) => {
        setName(event.target.value);
    }
    const handleEmailChange = (event) => {
        // if (!isValidEmail(event.target.value)) {
        //     alert('Email is invalid');
        // } else {
        //     alert("email is validate");
        // }

        setEmail(event.target.value);
    }

    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    };


    return (
        <section className="m-4">

            <h2 className="h1-responsive font-weight-bold text-center my-4 text-white about-me">Get in touch with me at any time!</h2>

            <div className="row">

                <div className="col-md-9 mb-md-0 mb-5">
                    <form className="needs-validation" data-toggle="validator" id="contact-form" name="contact-form" ref={form} method="POST" encType="text/plain">

                        <div className="contact-form"></div>
                        <div className="row">

                            <div className="col-md-6">
                                <div className="md-form mb-0">
                                    <input type="text" id="name" value={name} name="name" className="form-control text-white" placeholder="Your name"
                                    onChange={handleNameChange} />
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="md-form mb-0">
                                    <input type="text" id="email" value={email} name="email" className="form-control text-white" placeholder="Your email"
                                    onChange={handleEmailChange} />
                                </div>
                            </div>

                        </div>

                        <div className="row">
                            <div className="col-md-12">
                                <div className="md-form mb-0">
                                    <input type="text" id="message" value={message} name="message" onChange={handleMessageChange}
                                        className="form-control text-white" placeholder="Your message" />
                                </div>
                            </div>
                        </div>

                    </form>

                    <div className="text-center text-md-left d-flex flex-row-reverse">
                        <button
                            className="btn btn-primary"
                            disabled={(!message || !name || !email)}
                            type="submit" 
                            onClick={sendEmail}
                            value="Send Email"
                            style={{ height: "48px", width: "150px" }}>
                            Send
                        </button>
                    </div>
                    <div className="status"></div>
                </div>

                <div className="col-md-3 text-center">
                    <ul className="list-unstyled mb-0 text-white">
                        <li><i className="fas fa-map-marker-alt fa-2x"></i>
                            <p>Ramat Gan, Israel</p>
                        </li>

                        <li><i className="fas fa-phone mt-4 fa-2x"></i>
                            <p>+97254-550-3239</p>
                        </li>

                        <li><i className="fas fa-envelope mt-4 fa-2x"></i>
                            <p>shirizadok1@gmail.com</p>
                        </li>
                    </ul>
                </div>

            </div>

        </section>

    );
};

export default Contact;
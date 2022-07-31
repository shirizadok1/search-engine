import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
    const form = useRef(); //useRef allows you to persist values between renders.It can be used to store a mutable value that does not cause a re-render when updated.
    const [loading, setLoading]= useState(false);

    const sendEmail = (e) => {
        setLoading(true);
      e.preventDefault();
  
      emailjs.sendForm('service_dhknee6', 'template_p18tcao', form.current, '8bV747R1UYBcLgPGd')
        .then((result) => {
            alert("I have received your message, thanks!");
        }, (error) => {
            alert("Oops, something went wrong!");
        });
        setLoading(false);

    };
  
    return (
        <section className="mb-4">

            <h2 className="h1-responsive font-weight-bold text-center my-4 text-white about-me">Get in touch with me at any time!</h2>
            <p className="text-center w-responsive mx-auto mb-5 text-white about-page">Please do not hesitate to contact me directly!</p>

            <div className="row">

                <div className="col-md-9 mb-md-0 mb-5">
                    <form id="contact-form" name="contact-form"  ref={form} method="POST" encType="text/plain">

                        <div className="contact-form"></div>
                        <div className="row">

                            <div className="col-md-6">
                                <div className="md-form mb-0">
                                    <input type="text" id="name" name="name" className="form-control text-white" placeholder="Your name"></input>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="md-form mb-0">
                                    <input type="text" id="email" name="email" className="form-control text-white" placeholder="Your email"></input>
                                </div>
                            </div>

                        </div>

                        <div className="row">
                            <div className="col-md-12">
                                <div className="md-form mb-0">
                                    <input type="text" id="message" name="message" className="form-control text-white" placeholder="Your message"></input>
                                </div>
                            </div>
                        </div>

                    </form>

                    <div className="text-center text-md-left">
                        <a className="btn btn-primary" disabled={loading} onClick={sendEmail} value="Send Email">Send</a>
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
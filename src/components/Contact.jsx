import React from "react";

function Contact() {
    return (
<section className="mb-4">

<h2 className="h1-responsive font-weight-bold text-center my-4 text-white about-me">Get in touch with me at any time!</h2>
<p className="text-center w-responsive mx-auto mb-5 text-white about-page">Please do not hesitate to contact me directly!</p>

<div className="row">

    <div className="col-md-9 mb-md-0 mb-5">
        <form id="contact-form" name="contact-form" action="mail.php" method="POST">

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
                        <input type="text" id="subject" name="subject" className="form-control text-white" placeholder="Your message"></input>
                    </div>
                </div>
            </div>

            {/* <div class="row">

                <div class="col-md-12">

                    <div class="md-form text-white">
                        <textarea type="text" id="message" placeholder="" name="message" rows="2" class="form-control md-textarea"></textarea>
                    </div>

                </div>
            </div> */}

        </form>

        <div className="text-center text-md-left">
            <a className="btn btn-primary" onClick="document.getElementById('contact-form').submit();">Send</a>
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
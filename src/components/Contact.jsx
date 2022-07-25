import React from "react";

function Contact() {
    return (
<section class="mb-4">

<h2 class="h1-responsive font-weight-bold text-center my-4 text-white about-me">Get in touch with me at any time!</h2>
<p class="text-center w-responsive mx-auto mb-5 text-white about-page">Please do not hesitate to contact me directly!</p>

<div class="row">

    <div class="col-md-9 mb-md-0 mb-5">
        <form id="contact-form" name="contact-form" action="mail.php" method="POST">

        <div class="contact-form"></div>
            <div class="row">

                <div class="col-md-6">
                    <div class="md-form mb-0">
                        <input type="text" id="name" name="name" class="form-control"></input>
                        <label for="name" class="text-white">Your name</label>
                    </div>
                </div>

                <div class="col-md-6">
                    <div class="md-form mb-0">
                        <input type="text" id="email" name="email" class="form-control"></input>
                        <label for="email" class="text-white">Your email</label>
                    </div>
                </div>

            </div>

            <div class="row">
                <div class="col-md-12">
                    <div class="md-form mb-0">
                        <input type="text" id="subject" name="subject" class="form-control"></input>
                        <label for="subject" class="text-white">Subject</label>
                    </div>
                </div>
            </div>

            <div class="row">

                <div class="col-md-12">

                    <div class="md-form text-white">
                        <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>
                        <label for="message">Your message</label>
                    </div>

                </div>
            </div>

        </form>

        <div class="text-center text-md-left">
            <a class="btn btn-primary" onclick="document.getElementById('contact-form').submit();">Send</a>
        </div>
        <div class="status"></div>
    </div>

    <div class="col-md-3 text-center">
        <ul class="list-unstyled mb-0 text-white">
            <li><i class="fas fa-map-marker-alt fa-2x"></i>
                <p>Ramat Gan, Israel</p>
            </li>

            <li><i class="fas fa-phone mt-4 fa-2x"></i>
                <p>+97254-550-3239</p>
            </li>

            <li><i class="fas fa-envelope mt-4 fa-2x"></i>
                <p>shirizadok1@gmail.com</p>
            </li>
        </ul>
    </div>

</div>

</section>

    );
};

export default Contact;
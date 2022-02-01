import React from "react";
import Footer from "./footer";
// import footer from "../footer/footer";

function Contact() {
  return (
  <section class="contact">
    <br/>
    <br/>
   <div class="container">
      <div class="row">
        <div class="title-sections">
          <h2><strong>Contactez-Nous !</strong></h2>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <form class="form">
          <div class="row"> 
            <div class="col-sm-6">
              <div class="input-form">
                <i class="fa fa-user"></i>
                <input type="text" class="form-control" placeholder="Your Name" required=""></input>
              </div>
            </div>

            <div class="col-sm-6">
              <div class="input-form">
                <i class="fa fa-envelope"></i>
                <input type="email" name="email" class="form-control" placeholder="Your Email" required=""></input>
              </div>
            </div>
          </div>
            <div class="col-sm-12">
              <div class="input-form">
                <i class="fa fa-comments-o"></i>
                <textarea name="message" id="textarea" cols="30"
                rows="10" placeholder="Your message..."
                class="form-control"></textarea>
              </div>
            </div>

            <div class="col-sm-6">
              <button type="submit" class="btn-button-send">
                submit Your Message !
              </button>
            </div>

            {/* <div class="col-sm-6 sent-message">
              <p>
                Your message sent !
              </p>
            </div> */}
          </form>
        </div>
      </div>
    </div>
  <Footer/>
      
    </section>
    
  );
}

export default Contact;

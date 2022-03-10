import React from "react";
import Footer from "./footer";
// import footer from "../footer/footer";

function Contact() {
  return (
  <div class="contact">
    <div class="content">
      <h2>Contactez Nous</h2>
      {/* <p>smklncjobiefhwjnkma</p> */}
    </div>
    <div class="containers">
      <div class="contactInfo">
        <div class="box">
          <div class="icon"><i class="fa fa-map-marker fa-customize" aria-hidden="true"></i>
        </div>
          <div class="text">
            <h3>Adresse</h3>
            <p>VDN Ouest-Foire, Bande verte lot n°58 Dakar</p>
          </div>
        </div>
        <div class="box">
          <div class="icon"><i class="fa fa-envelope-o fa-customize" aria-hidden="true"></i>
        </div>
          <div class="text">
            <h3>Email</h3>
            <p>Contact@sastrans.sn</p>
          </div>
        </div>
        <div class="box">
          <div class="icon"><i class="fa fa-phone fa-customize" ></i>

        </div>
          <div class="text">
            <h3>Telephone</h3>
            <p>+ 221 33 867 93 14</p>
          </div>
        </div>
      </div>
      <div class="contactForm">
        <form>
          <h3>Prenez contact avec nous</h3>
          <div class="inputBox">
            <input type="text" name="" required="required" />
            <span>Nom Complet</span>
          </div>
          <div class="inputBox">
            <input type="text" name="" required="required" />
            <span>Email</span>
          </div>
          <div class="inputBox">
            <textarea required="required"></textarea>
            <span>Ecrivez votre message ici...</span>
          </div>
          <div class="inputBox">
            <input type="submit" name="" value="Envoyer "/>
          </div>
        </form>
      </div>
    </div>
    
  </div>
  
    
  );
}

export default Contact;

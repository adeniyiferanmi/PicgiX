import React, { useContext } from "react";
import HeaderPage from "./HeaderPage";
import { authContext } from "@/context/AuthContext";
import "../styles/contact.css";
import MarquePage from "./MarquePage";

const ContactPage = () => {
  const { logOut } = useContext(authContext);
  const handleLogOut = () => {
    logOut();
  };

  return (
    <div>
      <div className="prompt-container">
        <HeaderPage
          headerLogin={"Pricing"}
          headerSignUp={"Logout"}
          headerLinks={"/pricing"}
          onClickButton={handleLogOut}
        />
        <div className="my-container">
          <h1>CONTACT US</h1>
        </div>
      </div>
      <div className="contact-us-container">
        
          <div className="contact-form-container">
            <h1>Get In Touch With Us</h1>
            <p>
              Have a question about our AI Video Generator, need support, or
              just want to share your feedback? We’d love to hear from you!
            </p>
            <div className="contact-info">
              <div>
                <i class="bi bi-telephone-inbound-fill"></i>
              </div>
              <div>
                <h6>CALL SUPPORT CENTER</h6>
                <p>+1 (800) 123-4567</p>
              </div>
            </div>
            <div className="contact-info">
              <div>
                <i class="bi bi-geo-alt-fill"></i>
              </div>
              <div>
                <h6>VISIT OUR OFFICE</h6>
                <p>123 Main Street, Anytown, USA</p>
              </div>
            </div>
            <div className="contact-info">
              <div>
                <i class="bi bi-envelope-fill"></i>
              </div>
              <div>
                <h6>EMAIL SUPPORT</h6>
                <p>support@example.com</p>
              </div>
            </div>

          </div>
          <div className="contact-form">
            <div className="contact-input">
            <div>
              <input type="text" placeholder="Full Name" required />
            </div>
            <div>
              <input type="text" placeholder="Phone Number" required />
            </div>
            <div>
              <input type="email" placeholder="E-Mail" required />
            </div>
            </div>
            <div>
              <textarea
                name="message"
                id=""
                placeholder="Your Message"
                required
              ></textarea>
              
            </div>
            <div>
              <button>Submit</button>
            </div>
            <div className="checkbox-contain">
              <input type="checkbox" />
              <label>I have read and agree to Privacy policy</label>
            </div>
          </div>

      </div>

      <MarquePage />
    </div>
  );
};

export default ContactPage;

import React from "react";
import CallToUs from "./CallToUs";
import WriteToUs from "./WriteToUs";
import SendMessage from "./SendMessage";
import "../App.css";

const ContactUs = () => {
  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <div className="contact-sections">
        <CallToUs />
        <WriteToUs />
      </div>
      <SendMessage />
    </div>
  );
};

export default ContactUs;

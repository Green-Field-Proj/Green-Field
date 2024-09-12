import React from "react";
import "../App.css";
import message from "../images/message.png"

const WriteToUs = () => {
  return (
    <div className="write-to-us">
      <h3><img src={message}/>Write To US</h3>
      <p>Fill out our form and we will contact you within 24 hours.</p>
     
      <p>Emails: customer@exclusive.com</p>
     
      <p>Emails: support@exclusive.com</p>
    </div>
  );
};

export default WriteToUs;

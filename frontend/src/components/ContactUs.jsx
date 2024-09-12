import React from "react";
import CallToUs from "./CallToUs";
import WriteToUs from "./WriteToUs";
import SendMessage from "./SendMessage";
import "../App.css";
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';


const ContactUs = () => {
  return (
    <div className="contact-container">
      <div className="contact-sections">
        <Card variant="outlined"  sx={{ maxWidth: 340 }} id="call-write">
          <div className="call-write-div">
        <CallToUs />
        <Divider variant="middle" id="contact-divider" style={{ width: '80%', margin: '16px auto',  borderTop: '1px solid #000' }}></Divider>
        <WriteToUs />
        </div>
        </Card>
      </div>
      <SendMessage />
    </div>
    

  );
};

export default ContactUs;

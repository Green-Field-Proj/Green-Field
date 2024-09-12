import React, { useState } from "react";
import "../App.css";
import { TextField, Button, FormControl } from "@mui/material";
import Card from '@mui/material/Card';

const SendMessage = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", data);
  };

  return (
    <div className="send-message">
      <Card>
      <form onSubmit={handleSubmit} className="send-message-form">
        <div className="form-group">
          <TextField
              id="name"
              name="name"
              label="Name"
              variant="filled"
              InputProps={{
                style: {
                  height: '50px', 
                  width: '235px',
                },
              }}
              value={data.name}
              onChange={handleChange}
            />
          
        </div>
        <div className="form-group">
          <TextField
              id="email"
              name="email"
              label="Email"
              variant="filled"
              InputProps={{
                style: {
                  height: '50px', 
                  width: '235px',
                },
              }}
            value={data.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          
          <TextField
              id="subject"
              name="subject"
              label="Subject"
              variant="filled"
              InputProps={{
                style: {
                  height: '50px', 
                  width: '235px',
                },
              }}
            value={data.subject}
            onChange={handleChange}
          />
        </div>
        <div className="your-msg">
        <TextField
          id="message"
          name="message"
          label="Your Message"
          placeholder="Write Here"
          multiline
          maxRows={10}
          InputProps={{
            style: {
              minHeight: '207px', 
              width: '766px',
              borderRadius: '4px',
            },
          }}

        
            value={data.message}
            onChange={handleChange}
            
          />
        </div>
        <Button variant="contained" type="submit" disableElevation id="msg-btn">
            Send Message
          </Button>
        
      </form>
      </Card>
    </div>
  );
};

export default SendMessage;

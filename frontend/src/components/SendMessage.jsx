import React, { useState } from "react";
import "../App.css";
import { TextField, Button, FormControl } from "@mui/material";
import Card from "@mui/material/Card";
import axios from "axios";
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    Object.keys(data).forEach((key) => formData.append(key, data[key]));
    formData.append("access_key", "438aef67-5feb-48b3-a4c8-3d290f8be159");

    try {
      const response = await axios.post(
        "https://api.web3forms.com/submit",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
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
              fullWidth
              InputProps={{
                style: {
                  height: "60px",
                  width: "235px",
                },
              }}
              InputLabelProps={{
                style: {
                  lineHeight: "17px",
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
              fullWidth
              InputProps={{
                style: {
                  height: "60px",
                  width: "235px",
                },
              }}
              InputLabelProps={{
                style: {
                  lineHeight: "17px",
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
              fullWidth
              InputProps={{
                style: {
                  height: "60px",
                  width: "235px",
                },
              }}
              InputLabelProps={{
                style: {
                  lineHeight: "17px",
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
              variant="filled"
              fullWidth
              InputProps={{
                style: {
                  minHeight: "207px",
                  width: "766px",
                  borderRadius: "4px",
                },
              }}
              InputLabelProps={{
                style: {
                  lineHeight: "1.4375em",
                },
              }}
              value={data.message}
              onChange={handleChange}
            />
          </div>
          <Button
            variant="contained"
            type="submit"
            disableElevation
            id="msg-btn"
          >
            Send Message
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default SendMessage;

import React from "react";
import "../App.css";
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import phone from "../images/phone.png"

const CallToUs = () => {
  return (
    <div className="call-to-us">
      <h3><img src={phone}/>Call To US</h3>
      <p> We are available 24/7, 7 days a week.<br/></p>
      <p>Phone: +8801611112222</p>
    </div>
  //   <Card variant="outlined" sx={{ maxWidth: 360 }}>
  //   <Box sx={{ p: 2 }}>
  //     <Stack
  //       direction="row"
  //       sx={{ justifyContent: 'space-between', alignItems: 'center' }}
  //     >
  //       <Typography gutterBottom variant="h5" component="div">
  //         Call To Us
  //       </Typography>
  //     </Stack>
  //     <Typography variant="body2" sx={{ color: 'text.secondary' }}>
  //      We are available 24/7, 7 days a week.<br/>
  //      Phone: +8801611112222
  //     </Typography>
  //   </Box>
  //   <Divider variant="middle" />
  // </Card>
  );
};

export default CallToUs;

import React from "react";
import FullService from "../images/fullService.png"
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const OurStory = () => {
  return (
    
    <div>
       <Card sx={{ width: 525, height: 400 , boxShadow:'none'}} id="our-story">
      <CardContent>
        
        <Typography variant="h2" component="div"  sx={{ color: '#000000', fontWeight: '600', fontFamily:'Inter' , fontSize: '54px', lineHeight:'64px', letterSpacing: '0.06em', marginBottom: '24px'   }} >
          Our Story
        </Typography> 
        <Typography variant="body2" sx={{color:'#000000', fontFamily: 'Poppins', fontSize: '16px', fontWeight: '400', lineHeight: '26px'}}>
        Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. 
          <br /><br/>
          Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.
        </Typography>
      </CardContent>
    </Card>
      <div>
        <img
        id="our-story-img"
          src="https://media.discordapp.net/attachments/1282326986525507630/1283373183117824082/portrait-two-african-females-holding-shopping-bags-while-reacting-something-their-smartphone_1.png?ex=66e2c1ea&is=66e1706a&hm=6d86f5408f772be6f249e2f6e5a70dad774648cf66f162ceae95fbf73e6d4180&=&format=webp&quality=lossless&width=505&height=437"
          alt="image"
        />
        <div className="stat-container">
      <div className="stat-item">
      <Card className="card" sx={{ width: 260, height: 220, marginBottom:'30px', transition: 'background-color 0.28s ease, color 0.28s ease', color: '#000000',
      '&:hover': {
        backgroundColor: '#DB4444' ,
        color: '#FFFFFF'
      }}}>
      <CardContent>
        
        <Typography variant="h2" component="div"  sx={{ textAlign:'center',  fontWeight: '700', fontFamily:'Inter' , fontSize: '32px', lineHeight:'30px', letterSpacing: '0.06em',  marginBottom:'10px'  }} >
        <div className="img-container1"></div><br/>  
        10.5k
        </Typography> 
        <Typography variant="body2" sx={{ textAlign:'center',  fontFamily: 'Poppins', fontSize: '16px', fontWeight: '400', lineHeight: '26px', marginTop: '10px'}}>
      Seller active our site
          </Typography>
      </CardContent>
    </Card>
        </div>



        <div className="stat-item">
          <Card className="card" sx={{ width: 260, height: 220, marginBottom:'30px', transition: 'background-color 0.28s ease, color 0.28s ease', color: '#000000',
      '&:hover': {
        backgroundColor: '#DB4444' ,
        color: '#FFFFFF'
      }}}>
      <CardContent>
        
        <Typography variant="h2" component="div"  sx={{ textAlign:'center',    fontWeight: '700', fontFamily:'Inter' , fontSize: '32px', lineHeight:'30px', letterSpacing: '0.06em',  marginBottom:'10px', }} >
        <div className="img-container2"></div><br/>  
        33k
        </Typography> 
        <Typography variant="body2" sx={{ textAlign:'center', fontFamily: 'Poppins', fontSize: '16px', fontWeight: '400', lineHeight: '26px', marginTop: '10px'}}>
          Monthly Production Sale
          </Typography>
      </CardContent>
    </Card>
        </div>
        
        <div className="stat-item">
        <Card className="card" sx={{ width: 260, height: 220, marginBottom:'30px' , transition: 'background-color 0.28s ease, color 0.28s ease', color: '#000000',
      '&:hover': {
        backgroundColor: '#DB4444' ,
        color: '#FFFFFF'
      }}}>
      <CardContent>
        
        <Typography variant="h2" component="div"  sx={{ textAlign:'center',  fontWeight: '700', fontFamily:'Inter' , fontSize: '32px', lineHeight:'30px', letterSpacing: '0.06em',  marginBottom:'10px'  }} >
        <div className="img-container3"></div><br/>  
        45.5k
        </Typography> 
        <Typography variant="body2" sx={{ textAlign:'center',  fontFamily: 'Poppins', fontSize: '16px', fontWeight: '400', lineHeight: '26px', marginTop: '10px'}}>
          Customer active in our site
          </Typography>
      </CardContent>
    </Card>
        </div>
        <div className="stat-item">
        <Card className="card" sx={{ width: 260, height: 220, marginBottom:'30px' , transition: 'background-color 0.28s ease, color 0.28s ease', color: '#000000',
      '&:hover': {
        backgroundColor: '#DB4444' ,
        color: '#FFFFFF'
      }}}>
      <CardContent>
        
        <Typography variant="h2" component="div"  sx={{ textAlign:'center', fontWeight: '700', fontFamily:'Inter' , fontSize: '32px', lineHeight:'30px', letterSpacing: '0.06em',  marginBottom:'10px'  }} >
        <div className="img-container4"></div><br/>  
        25k
        </Typography> 
        <Typography variant="body2" sx={{ textAlign:'center',  fontFamily: 'Poppins', fontSize: '16px', fontWeight: '400', lineHeight: '26px', marginTop: '10px'}}>
          Anual grass sale in our site
          </Typography>
      </CardContent>
    </Card>
        </div>
        </div>
      </div>
      <img src={FullService} className="fullServices"/>
    </div>
  );
};

export default OurStory;

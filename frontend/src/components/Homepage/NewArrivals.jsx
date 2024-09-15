import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import rectangle from "../../images/Rectangle.png";


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

function NewArrivals() {
  const arrivals = [
    {
      title: "PlayStation 5",
      image:
        "https://i5.walmartimages.com/seo/Restored-Sony-PlayStation-5-Digital-Edition-Sony-PS5-Digital-Video-Game-Console-Refurbished_825493ab-d9d7-4e0e-92ce-5e9ee41a0e59.a3f02790fc0611920245c5046aaae481.jpeg",
      className: "tall-image", 
    },
    {
      title: "Women's Collections",
      image:
        "https://img.freepik.com/free-photo/beautiful-amazing-brunette-woman-with-long-wavy-hairstyle-spring-fall-stylish-urban-outfit-walking-street-red-lips-slim-body-street-fashion-concept_273443-1169.jpg?t=st=1726081734~exp=1726085334~hmac=80675733c37a2f02203dca0b1ae4b36ffbee5b5a937794b8afc7836a30d00398&w=1060",
      className: "wide-image", 
    },
    {
      title: "Speakers",
      image: "https://cdn.mos.cms.futurecdn.net/jM9JCM8RBSykEorEqDqpzW.jpg",
      className: "custom-height", 
    },
    {
      title: "Perfume",
      image:
        "https://media.glamourmagazine.co.uk/photos/641340f071829d00edcebd51/16:9/w_2560%2Cc_limit/Fragrance%2520week.jpg",
      className: "custom-height",
    },
  ];

  return (
    <div className="new-arrivals">
      <div className="todays">
        <img src={rectangle} alt="Today's" />
        <h2>Featured</h2>
      </div>
      <h2 className="new-arrivals-heading">New Arrival</h2>
      <div className="arrivals-grid">
        <Grid container spacing={2}>
      
          <Grid item xs={12} md={6} lg={4}>
            <Box className="arrival-item tall-image-container">
              <img
                src={arrivals[0].image}
                alt={arrivals[0].title}
                className={`arrival-image ${arrivals[0].className}`}
              />
              <Box className="arrival-text">
                <h3 className="arrival-title">{arrivals[0].title}</h3>
                <a href="#" className="arrival-link">
                  Shop Now
                </a>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <Box className="arrival-item wide-image-container">
              <img
                src={arrivals[1].image}
                alt={arrivals[1].title}
                className={`arrival-image ${arrivals[1].className}`}
              />
              <Box className="arrival-text">
                <h3 className="arrival-title">{arrivals[1].title}</h3>
                <a href="#" className="arrival-link">
                  Shop Now
                </a>
              </Box>
            </Box>
          </Grid>

         
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={3}>
              <Box className="arrival-item square-image-container">
                <img
                  src={arrivals[2].image}
                  alt={arrivals[2].title}
                  className={`arrival-image ${arrivals[2].className}`}
                />
                <Box className="arrival-text">
                  <h3 className="arrival-title">{arrivals[2].title}</h3>
                  <a href="#" className="arrival-link">
                    Shop Now
                  </a>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box className="arrival-item square-image-container">
                <img
                  src={arrivals[3].image}
                  alt={arrivals[3].title}
                  className={`arrival-image ${arrivals[3].className}`}
                />
                <Box className="arrival-text">
                  <h3 className="arrival-title">{arrivals[3].title}</h3>
                  <a href="#" className="arrival-link">
                    Shop Now
                  </a>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default NewArrivals;

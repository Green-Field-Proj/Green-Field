import React from "react";

function NewArrivals() {
  const arrivals = [
    {
      title: "PlayStation 5",
      image:
        "https://i5.walmartimages.com/seo/Restored-Sony-PlayStation-5-Digital-Edition-Sony-PS5-Digital-Video-Game-Console-Refurbished_825493ab-d9d7-4e0e-92ce-5e9ee41a0e59.a3f02790fc0611920245c5046aaae481.jpeg",
    },
    {
      title: "Women's Collections",
      image:
        "https://img.freepik.com/free-photo/beautiful-amazing-brunette-woman-with-long-wavy-hairstyle-spring-fall-stylish-urban-outfit-walking-street-red-lips-slim-body-street-fashion-concept_273443-1169.jpg?t=st=1726081734~exp=1726085334~hmac=80675733c37a2f02203dca0b1ae4b36ffbee5b5a937794b8afc7836a30d00398&w=1060",
    },
    {
      title: "Speakers",
      image: "https://cdn.mos.cms.futurecdn.net/jM9JCM8RBSykEorEqDqpzW.jpg",
    },
    {
      title: "Perfume",
      image:
        "https://media.glamourmagazine.co.uk/photos/641340f071829d00edcebd51/16:9/w_2560%2Cc_limit/Fragrance%2520week.jpg",
    },
  ];

  return (
    <div className="new-arrivals">
      <h2>Featured</h2>
      <h2>New Arrival</h2>
      <div className="arrivals-grid">
        {arrivals.map((item, index) => (
          <div key={index} className="arrival-item">
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <button>Shop Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewArrivals;

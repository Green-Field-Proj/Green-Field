import React from "react";
import groupIcon from "../images/Group.png";
import servicesIcon from "../images/Services.png";
import shoppingBagIcon from "../images/Icon-Shopping bag.png";
import moneyBagIcon from "../images/Icon-Moneybag.png";

const OurStory = () => {
  return (
    <div>
      <div>
        <h1>Our Story</h1>
        <p>
          Launched in 2015, Exclusive is South Asia's premier online shopping
          marketplace with an active presence in Bangladesh. Supported by a wide
          range of tailored marketing, data, and service solutions, Exclusive
          has 10,500 sellers and 300 brands and serves 3 million customers
          across the region.
        </p>
        <p>
          Exclusive has more than 1 million products to offer, growing at a very
          fast rate. Exclusive offers a diverse assortment in categories ranging
          from consumer.
        </p>
      </div>
      <div>
        <img
          src="https://media.discordapp.net/attachments/1282326986525507630/1283373183117824082/portrait-two-african-females-holding-shopping-bags-while-reacting-something-their-smartphone_1.png?ex=66e2c1ea&is=66e1706a&hm=6d86f5408f772be6f249e2f6e5a70dad774648cf66f162ceae95fbf73e6d4180&=&format=webp&quality=lossless&width=505&height=437"
          alt="image"
        />
      </div>
      <div className="stats">
        <div className="saller">
          <span className="saller-item">
            <img src={groupIcon} alt="saller-item" />
          </span>
          <p>Sallers active our site</p>
        </div>
        <div className="stat-item">
          <span className="stat-icon">
            <img src={servicesIcon} alt="Sales icon" />
          </span>
          <h2>33k</h2>
          <p>Monthly Production Sale</p>
        </div>
        <div className="stat-item">
          <span className="stat-icon">
            <img src={shoppingBagIcon} alt="Customers icon" />
          </span>
          <h2>45.5k</h2>
          <p>Customer visits to our site</p>
        </div>
        <div className="stat-item">
          <span className="stat-icon">
            <img src={moneyBagIcon} alt="Sales icon" />
          </span>
          <h2>25k</h2>
          <p>Annual gross sales in our site</p>
        </div>
      </div>
    </div>
  );
};

export default OurStory;

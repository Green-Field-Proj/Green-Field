import React from "react";

function PromoBanner() {
  return (
    <div className="promo-banner">
       <div className="promo-image">
        <img
          src="https://uk.jbl.com/dw/image/v2/BFND_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dwa45142d3/pdp/JBL_Charge_5_Lifestyle1_904x560px.png?sw=1356&sh=840"
          alt="Promo Banner"
        />
      </div>
      <div className="promo-content">
        <h3 className="promo-categories">Categories</h3>
        <h2>Enhance Your </h2>
        <h2>Music Experience</h2>
        <button>Buy Now!</button>
      </div>
     
    </div>
  );
}

export default PromoBanner;

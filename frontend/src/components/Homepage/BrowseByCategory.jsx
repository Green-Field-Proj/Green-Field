import React from "react";
import rectangle from "../../images/Rectangle.png"
import phones from "../../images/Category-CellPhone.png"
import computers from "../../images/Category-Computer.png"
import smartwatch from "../../images/Category-SmartWatch.png"
import camera from "../../images/Category-Camera.png"
import headphones from "../../images/Category-Headphone.png"
import gaming from "../../images/Category-Gamepad.png"

function BrowseByCategory() {
  const categories = [
    { name: "Phones", image: phones },
    { name: "Computers", image: computers },
    { name: "SmartWatch", image: smartwatch },
    { name: "Camera", image: camera },
    { name: "HeadPhones", image: headphones },
    { name: "Gaming", image: gaming }
  ];



  return (
    <div className="browse-by-category">
       <div className="todays">
        <img src={rectangle} alt="Today's" />
        <h2>Categories</h2>
      </div>
      <h2 id="browseByCategory">Browse By Category</h2>
      <div className="category-list">
        {categories.map((category, index) => (
          <div key={index} className="category-item">
            
              <img className="categoryImage" src ={category.image}/>
              <div className="categoryName">
            {category.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BrowseByCategory;

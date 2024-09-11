import React from "react";

function BrowseByCategory() {
  const categories = [
    "Phones",
    "Computers",
    "SmartWatch",
    "Camera",
    "HeadPhones",
    "Gaming",
  ];

  return (
    <div className="browse-by-category">
      <h2>Categories</h2>
      <h2>Browse By Category</h2>
      <div className="category-list">
        {categories.map((category, index) => (
          <div key={index} className="category-item">
            {category}
          </div>
        ))}
      </div>
    </div>
  );
}

export default BrowseByCategory;

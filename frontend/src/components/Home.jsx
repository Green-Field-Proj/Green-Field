import React from "react";
import HeroSection from "./Homepage/HeroSection";
import FlashSales from "./Homepage/FlashSales";
import BrowseByCategory from "./Homepage/BrowseByCategory";

import ProductExploration from "./Homepage/ProductExploration";
import PromoBanner from "./Homepage/PromoBanner";
import BestSellingProducts from "./Homepage/BestSellingProducts";
import NewArrivals from "./Homepage/NewArrivals";

function Home() {
  return (
    <div>
      <HeroSection />
      <FlashSales />
      <BrowseByCategory />
      <BestSellingProducts />
      <ProductExploration />
      <PromoBanner />
      <NewArrivals />
    </div>
  );
}

export default Home;

import React from "react";
import Hero from "@/components/Hero";
import FreshSales from "@/components/fresh";
import Category from "@/components/category";
import Products from "@/components/product";
import Music from "@/components/banner";
import Explore from "@/components/Explore";
import Featured from "@/components/feature";
import Freedelivery from "@/components/free"


const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <FreshSales />
      <Category />
      <Products />
      <Music />
      <Explore />
      <Featured />
      <Freedelivery />
    </div>
  );
};

export default Home;

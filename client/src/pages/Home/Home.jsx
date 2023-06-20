import React from "react";
import Collections from "../../components/Collections/Collections";
import Contact from "../../components/Contact/Contact";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";
import Slider from "../../components/Slider/Slider";
import "./Home.scss";
const Home = () => {
  return (
    <div className="home">
      <Slider />
      <FeaturedProducts type="featured" />
      <Collections />
      <FeaturedProducts type="trending" />
      <Contact />
    </div>
  );
};

export default Home;

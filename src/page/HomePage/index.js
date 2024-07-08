import BestSellers from "../../Compnent/BestSellers";
import BestSellersProduct from "../../Compnent/BestSellersProduct";
import Category from "../../Compnent/Category";
import FeaturedProduct from "../../Compnent/FeaturedProducts";
import Header from "../../Compnent/Header";
import Hero from "../../Compnent/Hero";
import Footer from "../../Compnent/Footer";
import ShippingCards from "../../Compnent/ShippingCard";
import { useEffect, useState } from "react";
const HomePage = () => {
  const [cartCount, setCountCount] = useState(0);
  const updateCartCount = (count) => {
    setCountCount(count);
  };

  useEffect(() => {
    let savedProduct = JSON.parse(localStorage.getItem("timbo-product"));
    setCountCount(savedProduct.length);
  }, []);
  return (
    <div>
      <Header count={cartCount} />
      <Hero />
      <FeaturedProduct updateCartCount={updateCartCount} />
      <BestSellers />
      <BestSellersProduct />
      <ShippingCards />
      <Footer />
    </div>
  );
};

export default HomePage;

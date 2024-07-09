import BestSellers from "../../Compnent/BestSellers";
import BestSellersProduct from "../../Compnent/BestSellersProduct";
import Category from "../../Compnent/Category";
import FeaturedProduct from "../../Compnent/FeaturedProducts";
import Header from "../../Compnent/Header";
import Hero from "../../Compnent/Hero";
import Footer from "../../Compnent/Footer";
import ShippingCards from "../../Compnent/ShippingCard";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import CategoryCard from "../../Compnent/Category/CategotyCard";
const HomePage = () => {
  const [cartCount, setCountCount] = useState(0);
  const updateCartCount = (count) => {
    setCountCount(count);
  };

  useEffect(() => {
    let savedProduct = JSON.parse(localStorage.getItem("timbo-product"));
    if (savedProduct) {
      setCountCount(savedProduct.length);
    }
  }, []);

  return (
    <div>
      <Header count={cartCount} />
      <Hero />
      <Category />
      <FeaturedProduct updateCartCount={updateCartCount} />
      <BestSellers updateCartCount={updateCartCount} />
      <BestSellersProduct updateCartCount={updateCartCount} />
      <ShippingCards />
      <Footer />
    </div>
  );
};

export default HomePage;

import BestSellers from "../../Compnent/BestSellers";
import BestSellersProduct from "../../Compnent/BestSellersProduct";
import Category from "../../Compnent/Category";
import FeaturedProduct from "../../Compnent/FeaturedProducts";
import Header from "../../Compnent/Header";
import Hero from "../../Compnent/Hero";
import Footer from "../../Compnent/Footer";
import ShippingCards from "../../Compnent/ShippingCard";
const HomePage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <FeaturedProduct />
      <BestSellers />
      <BestSellersProduct />
      <ShippingCards />
      <Footer />
    </div>
  );
};

export default HomePage;

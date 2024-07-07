import BestSellers from "../../Compnent/BestSellers";
import BestSellersProduct from "../../Compnent/BestSellersProduct";
import Category from "../../Compnent/Category";
import FeaturedProduct from "../../Compnent/FeaturedProducts";
import Header from "../../Compnent/Header";
import Hero from "../../Compnent/Hero";
import Footer from "../../Compnent/Footer";
const HomePage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Category />
      <FeaturedProduct />
      <BestSellers />
      <BestSellersProduct />
      <Footer />
    </div>
  );
};

export default HomePage;

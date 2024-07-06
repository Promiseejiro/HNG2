import "./App.css";
import BestSellers from "./Compnent/BestSellers";
import BestSellersProduct from "./Compnent/BestSellersProduct";
import Category from "./Compnent/Category";
import CategoryCard from "./Compnent/Category/CategotyCard";
import FeaturedProduct from "./Compnent/FeaturedProducts";
import Footer from "./Compnent/Footer";
import Header from "./Compnent/Header";
import Hero from "./Compnent/Hero";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      {/* <Category /> */}
      <FeaturedProduct />
      <BestSellers />
      <BestSellersProduct />
      <Footer />
    </div>
  );
}

export default App;

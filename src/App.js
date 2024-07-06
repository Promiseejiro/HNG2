import "./App.css";
import Category from "./Compnent/Category";
import CategoryCard from "./Compnent/Category/CategotyCard";
import FeaturedProduct from "./Compnent/FeaturedProducts";
import Header from "./Compnent/Header";
import Hero from "./Compnent/Hero";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Category />
      <FeaturedProduct />
    </div>
  );
}

export default App;

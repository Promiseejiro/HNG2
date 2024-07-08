import "./App.css";
import HomePage from "../src/page/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./page/Checkout";
import { Toaster } from "react-hot-toast";
import SingleProduct from "./page/SingleProduct";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/cart" element={<Checkout />}></Route>
          <Route path="/:producturl" element={<SingleProduct />}></Route>
        </Routes>
      </Router>
      <Toaster
        toastOptions={{
          duration: 5000,
          style: {
            padding: "0",
            borderRadius: "0",
            margin: "0",
            gap: "0",
            top: "0",
            right: "0",
            bottom: "0",
            left: "0",
            boxShadow: "none",
            background: "transparent",
          },
        }}
      />
    </div>
  );
}

export default App;

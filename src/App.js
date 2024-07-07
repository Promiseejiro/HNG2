import "./App.css";
import HomePage from "../src/page/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./page/Checkout";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/cart" element={<Checkout />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

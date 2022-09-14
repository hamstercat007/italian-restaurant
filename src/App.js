import "./App.css";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FoodMenu from "./components/FoodMenu";
import Checkout from "./components/Checkout";

function App() {
  //Routes act like a switch statement, showing sections of the page.
  return (
    <div className="App">
    <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="menu" element={<FoodMenu />} />
          <Route path="checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

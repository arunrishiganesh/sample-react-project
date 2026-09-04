import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/home";
import Places from "./pages/Places";
import History from "./pages/History";
import Food from "./pages/Food";
import Culture from "./pages/Culture";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/places" element={<Places />} />
        <Route path="/history" element={<History />} />
        <Route path="/food" element={<Food />} />
        <Route path="/culture" element={<Culture />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
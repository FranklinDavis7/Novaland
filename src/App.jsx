import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Property from "./pages/Property";
import Header from "./components/header";
import Footer from "./components/footer";
import "./index.css";
import Explore from "./pages/explore";
import Dashboard from "./pages/dashboard";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/property" element={<Property />} />
        <Route path="/explore" element={<Explore />}/>
        <Route path="/dashboard" element={<Dashboard />}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

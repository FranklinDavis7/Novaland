import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Property from "./pages/property";
import Header from "./components/header";
import Footer from "./components/footer";
import "./index.css";
import Explore from "./pages/explore";
import Dashboard from "./pages/dashboard";
import Signup from "./pages/Signup";
import Signin from "./pages/signin";
import About from "./pages/about"


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/about" element={<About />}/>
        <Route path="/signin" element={<Signin />} />
        <Route path="/" element={<Home />} />
        <Route path="/property" element={<Property />} />
        <Route path="/explore" element={<Explore />}/>
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

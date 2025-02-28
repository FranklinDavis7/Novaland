import { useState } from "react";
import { Bell, ChevronDown, Home, Compass, Info, Menu, X, Building, MapPin, LandPlot } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "../assets/logo.ico";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);

  function clicked() {
    alert("Clicked");
  }

  return (
    <header className="bg-gradient-to-r from-indigo-900 to-indigo-700 text-white py-4 px-6 flex items-center justify-between shadow-lg z-50 relative">
      {/* Left: Logo */}
      <div className="flex-shrink-0">
        <Link to="/">
          <motion.img
            src={logo}
            width="50"
            height="50"
            alt="Logo"
            className="cursor-pointer transition-transform duration-200 hover:scale-110"
            animate={{ rotate: [0, 10, -10, 0] }}
          />
        </Link>
      </div>

      {/* Center: Navigation Menu */}
      <nav className="hidden md:flex flex-1 justify-center absolute left-1/2 transform -translate-x-1/2">
        <ul className="flex space-x-10 text-lg font-semibold">
          <motion.li className="cursor-pointer flex items-center hover:text-indigo-300 transition-colors duration-200" whileHover={{ scale: 1.1 }}>
            <Link to="/" className="flex items-center">
              <Home className="w-5 h-5 mr-2" /> Home
            </Link>
          </motion.li>

          <motion.li className="cursor-pointer flex items-center hover:text-indigo-300 transition-colors duration-200" whileHover={{ scale: 1.1 }}>
            <Link to="/explore" className="flex items-center">
              <Compass className="w-5 h-5 mr-2" /> Explore
            </Link>
          </motion.li>

          {/* Categories Dropdown */}
          <motion.li className="relative group cursor-pointer flex items-center" whileHover={{ scale: 1.1 }}>
            Categories
            <ChevronDown className="inline w-4 h-4 ml-1 transition-transform duration-200 group-hover:rotate-180" />
            <ul className="absolute left-0 top-full mt-2 bg-white text-gray-800 shadow-lg rounded-md py-2 w-48 opacity-0 group-hover:opacity-100 transition-opacity duration-300 invisible group-hover:visible z-50">
              <li className="flex items-center px-4 py-2 hover:bg-gray-200 transition-colors">
                <Building className="w-5 h-5 mr-2" /> Apartments
              </li>
              <li className="flex items-center px-4 py-2 hover:bg-gray-200 transition-colors">
                <MapPin className="w-5 h-5 mr-2" /> Villas
              </li>
              <li className="flex items-center px-4 py-2 hover:bg-gray-200 transition-colors">
                <LandPlot className="w-5 h-5 mr-2" /> Land
              </li>
            </ul>
          </motion.li>

          <motion.li className="cursor-pointer flex items-center hover:text-indigo-300 transition-colors duration-200" whileHover={{ scale: 1.1 }}>
            <Info className="w-5 h-5 mr-2" /> About
          </motion.li>
        </ul>
      </nav>

      {/* Right: Sign Up, Log In, Bell */}
      <div className="flex-shrink-0">
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/signup">
            <motion.button className="bg-indigo-900 border-2 border-white text-white font-semibold py-2 px-5 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:bg-indigo-800" whileHover={{ scale: 1.1 }}>
              Sign Up
            </motion.button>
          </Link>
          <Link to="/signin">
            <motion.button className="bg-indigo-900 border-2 border-white text-white font-semibold py-2 px-5 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:bg-indigo-800" whileHover={{ scale: 1.1 }}>
              Log In
            </motion.button>
          </Link>
          <motion.div whileHover={{ rotate: 15 }}>
            <Bell className="w-8 h-8 cursor-pointer hover:text-indigo-300" onClick={clicked} />
          </motion.div>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
      </button>
    </header>
  );
}

export default Header;

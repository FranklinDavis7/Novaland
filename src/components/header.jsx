import { Bell, ChevronDown, Home, Compass, Info } from "lucide-react";
import { motion } from "framer-motion";
import logo from "../assets/logo.ico"

function Header() {
  function clicked() {
    alert("Clicked");
  }

  return (
    <header className="bg-gradient-to-r from-indigo-900 to-indigo-700 text-white py-4 px-6 flex items-center justify-between shadow-lg z-50">
      <motion.img src={logo} width="50" height="50" alt="Logo" className="cursor-pointer transition-transform duration-200 hover:scale-110" animate={{ rotate: [0, 10, -10, 0] }} />
      <nav>
        <ul className="flex space-x-10 text-lg font-semibold">
          <motion.li className="cursor-pointer flex items-center hover:text-indigo-300 transition-colors duration-200" whileHover={{ scale: 1.1 }}>
            <Home className="w-5 h-5 mr-2" /> Home
          </motion.li>
          <motion.li className="cursor-pointer flex items-center hover:text-indigo-300 transition-colors duration-200" whileHover={{ scale: 1.1 }}>
            <Compass className="w-5 h-5 mr-2" /> Explore
          </motion.li>
          <motion.li className="relative group cursor-pointer flex items-center" whileHover={{ scale: 1.1 }}>
            Categories
            <ChevronDown className="inline w-4 h-4 ml-1 transition-transform duration-200 group-hover:rotate-180" />
            <ul className="absolute left-0 top-full mt-2 bg-white text-gray-800 shadow-lg rounded-md py-2 w-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 visible group-hover:visible z-50">
              <li className="px-4 py-2 hover:bg-gray-200 transition-colors">Apartments</li>
              <li className="px-4 py-2 hover:bg-gray-200 transition-colors">Villas</li>
              <li className="px-4 py-2 hover:bg-gray-200 transition-colors">Land</li>
            </ul>
          </motion.li>
          <motion.li className="cursor-pointer flex items-center hover:text-indigo-300 transition-colors duration-200" whileHover={{ scale: 1.1 }}>
            <Info className="w-5 h-5 mr-2" /> About
          </motion.li>
        </ul>
      </nav>
      <div className="flex items-center space-x-4">
        <motion.button className="bg-indigo-900 border-2 border-white text-white font-semibold py-2 px-5 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:bg-indigo-800" onClick={clicked} whileHover={{ scale: 1.1 }}>Sign Up</motion.button>
        <motion.button className="bg-indigo-900 border-2 border-white text-white font-semibold py-2 px-5 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:bg-indigo-800" onClick={clicked} whileHover={{ scale: 1.1 }}>Log In</motion.button>
        <motion.div whileHover={{ rotate: 15 }}>
            <Bell className="w-8 h-8 cursor-pointer hover:text-indigo-300" onClick={clicked}/>
        </motion.div>
      </div>
    </header>
  );
}

export default Header;

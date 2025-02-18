import { Bell, Search, ChevronDown } from "lucide-react";
import Header from "./components/header.jsx"
import banner from "./assets/banner.png"
import SearchBar from "./components/search.jsx"
import Footer from "./components/footer.jsx";
function Home(){  
  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
      <div className="flex justify-center items-center w-full h-[60vh]">
        <img src={banner} className="w-full sm:w-4/5 h-auto rounded-lg shadow-md"/>
      </div>
      <SearchBar />
      <div className="p-4 font-bold width-full text-2xl">
        <h1>Featured Properties</h1>
      </div>
    </div>
    
  );
}
export default Home
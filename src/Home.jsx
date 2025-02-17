import { Bell, Search, ChevronDown } from "lucide-react";
import Header from "./components/header.jsx"
import banner from "./assets/banner.png"
import SearchBar from "./components/search.jsx"
import Footer from "./components/footer.jsx";
function Home(){  
  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
      <Header />
      <div className="flex justify-center items-center w-full h-[60vh]">
        <img src={banner} className="w-full sm:w-4/5 h-auto rounded-lg shadow-md"/>
      </div>
      <SearchBar />
      <Footer />
    </div>
    
  );
}
export default Home
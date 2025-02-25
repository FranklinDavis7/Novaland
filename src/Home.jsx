import { Bell, Search, ChevronDown } from "lucide-react";
import banner from "./assets/banner.png";
import SearchBar from "./components/search.jsx";
import Slider from "react-slick";

function Home() {  
  {/* Stock images */}
  const stock = [
    "https://static.vecteezy.com/system/resources/previews/016/916/479/original/placeholder-icon-design-free-vector.jpg",
    "https://static.vecteezy.com/system/resources/previews/016/916/479/original/placeholder-icon-design-free-vector.jpg",
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
      {/* Banner Image */}
      <div className="flex justify-center items-center w-full h-[60vh]">
        <img src={banner} className="w-full sm:w-4/5 h-auto rounded-lg shadow-md"/>
      </div>

      <SearchBar />

      {/* Featured Properties Section */}
      <div className="p-6 font-bold text-4xl text-center">
        <h1>Featured Properties</h1>

        {/* Centered Slider with Rectangle Shape */}
        <div className="flex justify-center mt-6">
          <div className="w-4/5 sm:w-4/5 h-64"> {/* Match banner width and set fixed height */}
            <Slider {...sliderSettings}>
              {stock.map((image, index) => (
                <div key={index} className="w-full h-64 rounded-lg overflow-hidden shadow-lg">
                  <img
                    src={image}
                    alt={`Property Image ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

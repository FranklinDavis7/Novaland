import { Bell, Search, ChevronDown } from "lucide-react";
import banner from "./assets/banner.png";
import SearchBar from "./components/search.jsx";
import Slider from "react-slick";

function Home() {  
  {/* Stock images */}
  const stock = [
    "https://get.pxhere.com/photo/villa-house-building-home-sandstone-cottage-property-rocks-farmhouse-india-estate-log-cabin-real-estate-karnataka-rural-area-holiday-home-vacation-home-badami-982702.jpg",
    "https://i0.wp.com/vivekkaul.com/wp-content/uploads/2021/01/architecture-1867187_1920.jpg?resize=1024%2C698&ssl=1",
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
          <div className="w-3/5 h-full sm:w-3/5 sm:h-3/5"> {/* Match banner width and set fixed height */}
            <Slider {...sliderSettings}>
              {stock.map((image, index) => (
                <div key={index} className="w-full h-72 rounded-lg overflow-hidden shadow-lg">
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

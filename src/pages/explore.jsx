import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiHome, FiBriefcase, FiMapPin, FiPhone } from "react-icons/fi";
import { Range } from "react-range"; // For the double-headed price range slider

const properties = [
  {
    title: "Paul Alukkas Eco Paradise",
    image: "https://newprojects.99acres.com/projects/paul_alukkas_developers_/paul_eco_paradise/images/bagzovb_1739426086_569112127_optOrig.jpg",
    location: "Kaloor, Kochi",
    price: 13300000,
    size: "1373 sq ft",
    type: "Apartment",
    owner: "John Alukkas",
    contact: "+123456789",
  },
  {
    title: "Luxury Apartment",
    image: "https://th.bing.com/th/id/OIP.Apt8LJPbPo0jSlmsg-544QHaFt?rs=1&pid=ImgDetMain",
    location: "Delhi, India",
    price: 25000000,
    size: "2000 sq ft",
    type: "Villa",
    owner: "Amit Kapoor",
    contact: "+987654321",
  },
  {
    title: "Commercial Hub, NY",
    image: "https://cdn.homedit.com/wp-content/uploads/2019/05/Luxury-NYC-apartment-tour-how-to-decorate-a-luxury-living.jpg",
    location: "New York, USA",
    price: 45000000,
    size: "5000 sq ft",
    type: "Commercial",
    owner: "Steve Rogers",
    contact: "+1122334455",
  },
  // Add more properties if needed
];

const locations = [
  "Kaloor, Kochi", "Delhi, India", "New York, USA", "London, UK", "Dubai, UAE"
];

function Explore() {
  const [hovered, setHovered] = useState(null);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [priceRange, setPriceRange] = useState([1000000, 50000000]);
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const timeoutRef = useRef(null);

  const propertiesPerPage = 12;
  const totalPages = Math.ceil(properties.length / propertiesPerPage);
  const startIndex = (currentPage - 1) * propertiesPerPage;
  const currentProperties = properties.slice(startIndex, startIndex + propertiesPerPage);

  // Filter handling functions
  const toggleTypeSelection = (type) => {
    setSelectedTypes(prev =>
      prev.includes(type) ? prev.filter(item => item !== type) : [...prev, type]
    );
  };

  const toggleLocationSelection = (location) => {
    setSelectedLocations(prev =>
      prev.includes(location) ? prev.filter(item => item !== location) : [...prev, location]
    );
  };

  return (
    <div className="flex p-6 min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      {/* Left Sidebar for Filters */}
      <div className="w-1/4 p-6 bg-gradient-to-b from-indigo-100 to-indigo-300 rounded-lg shadow-lg mr-6">
        <h2 className="text-2xl font-semibold text-indigo-900 mb-6">Filter Properties</h2>

        {/* Property Type Filter */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Property Type</h3>
          <div className="grid grid-cols-3 gap-4">
            {["Land", "Commercial", "Apartment", "Villa"].map(type => (
              <button
                key={type}
                onClick={() => toggleTypeSelection(type)}
                className={`w-full p-2 text-sm rounded-lg transition-colors ${
                  selectedTypes.includes(type) ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-700'
                } hover:bg-indigo-700 hover:text-white`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Price Range Filter */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Price Range</h3>
          <Range
            step={100000}
            min={0}
            max={50000000}
            values={priceRange}
            onChange={values => setPriceRange(values)}
            renderTrack={({ props, children }) => (
              <div
                {...props}
                style={{
                  ...props.style,
                  height: '4px',
                  backgroundColor: '#ddd',
                  borderRadius: '2px',
                }}
              >
                {children}
              </div>
            )}
            renderThumb={({ index, props }) => (
              <div
                {...props}
                style={{
                  ...props.style,
                  height: '20px',
                  width: '20px',
                  borderRadius: '50%',
                  backgroundColor: '#4C6EF5',
                }}
              />
            )}
          />
          <div className="flex justify-between text-sm text-gray-600 mt-2">
            <span>₹{priceRange[0].toLocaleString()}</span>
            <span>₹{priceRange[1].toLocaleString()}</span>
          </div>
        </div>

        {/* Location Filter */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Locations</h3>
          <div className="grid grid-cols-3 gap-4">
            {locations.map(location => (
              <button
                key={location}
                onClick={() => toggleLocationSelection(location)}
                className={`w-full p-2 text-sm rounded-lg transition-colors ${
                  selectedLocations.includes(location) ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-700'
                } hover:bg-indigo-700 hover:text-white`}
              >
                {location}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-3/4">
        <div className="font-bold p-4 w-full h-auto text-left mb-6">
          <h1 className="text-4xl text-indigo-800">Explore All Properties</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentProperties.map((p, index) => (
            <motion.div
              key={index}
              className="relative bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer transition-all"
              whileHover={{
                scale: 1.05, // Slightly increase the card size on hover
                zIndex: 10, // Ensure the hovered card is on top
              }}
              onMouseEnter={() => {
                clearTimeout(timeoutRef.current);
                timeoutRef.current = setTimeout(() => setHovered(index), 300);
              }}
              onMouseLeave={() => {
                clearTimeout(timeoutRef.current);
                setHovered(null);
              }}
              style={{
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                boxShadow: hovered === index ? '0 12px 30px rgba(0,0,0,0.15)' : '0 6px 18px rgba(0,0,0,0.1)',
              }}
            >
              <motion.div
                className="w-full h-48 object-cover bg-cover"
                style={{ backgroundImage: `url(${p.image})` }}
              />
              <div className="p-4">
                <h2 className="font-semibold text-lg text-gray-800">{p.title}</h2>
                <p className="text-gray-600 flex items-center">
                  <FiMapPin className="mr-2 text-indigo-600" /> {p.location}
                </p>
                <p className="text-indigo-600 font-semibold flex items-center">
                  <FiHome className="mr-2" /> ₹{p.price.toLocaleString()}
                </p>
              </div>

              {/* On Hover: Show expanded information to the right of the image */}
              {hovered === index && (
                <motion.div
                  className="absolute inset-0 bg-white flex p-6 rounded-lg shadow-xl"
                  initial={{ opacity: 0, transform: 'scale(0.9)' }}
                  animate={{ opacity: 1, transform: 'scale(1)' }}
                  exit={{ opacity: 0, transform: 'scale(0.9)' }}
                  style={{
                    zIndex: 20, // Ensure expanded card is on top
                    display: 'flex',
                    transition: 'transform 0.5s ease',
                  }}
                >
                  <div className="w-1/2 h-64 object-cover overflow-hidden rounded-lg mr-6">
                    <motion.img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover rounded-md"
                      initial={{ scale: 1 }}
                      animate={{ scale: 1.05 }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl font-semibold">{p.title}</h2>
                    <p className="text-gray-700">Size: {p.size}</p>
                    <p className="text-gray-700">Owner: {p.owner}</p>
                    <p className="text-gray-700">Contact: {p.contact}</p>
                    <Link
                      to="/property"
                      className="mt-4 inline-block bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors"
                    >
                      View Details
                    </Link>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-6">
          <button
            className="px-4 py-2 bg-indigo-600 text-white rounded-md shadow-md hover:bg-indigo-700 mr-2"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(prev => prev - 1)}
          >
            Previous
          </button>
          <span className="px-4 py-2 text-xl">{currentPage} / {totalPages}</span>
          <button
            className="px-4 py-2 bg-indigo-600 text-white rounded-md shadow-md hover:bg-indigo-700 ml-2"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(prev => prev + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Explore;

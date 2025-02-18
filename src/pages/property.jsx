import Header from "../components/header";
import Slider from "react-slick";
import BackButton from "../components/backbutton";
import { motion } from "framer-motion";
import Footer from "../components/footer";

function PropertyInfo() {
  const property = {
    title: "Paul Alukkas Eco Paradise",
    images: [
      "https://newprojects.99acres.com/projects/paul_alukkas_developers_/paul_eco_paradise/images/bagzovb_1739426086_569112127_optOrig.jpg",
      "https://newprojects.99acres.com/projects/paul_alukkas_developers_/paul_eco_paradise/images/709y0ph_1739795587_570358315_optOrig.jpg",
      "https://newprojects.99acres.com/projects/paul_alukkas_developers_/paul_eco_paradise/images/b7jgnsf_1739795588_570358325_optOrig.jpg",
      "https://newprojects.99acres.com/projects/paul_alukkas_developers_/paul_eco_paradise/images/jchkits_1739795588_570358333_optOrig.jpg",
    ],
    description:
      "Paul Alukkas Eco Paradise in Kaloor, Kochi is a ready-to-move housing society. It offers apartments in varied budget range. These units are a perfect combination of comfort and style, specifically designed to suit your requirements and conveniences. There are 2BHK and 3BHK apartments available in this project. This housing society is now ready to be called home as families have started moving in.",
    location: "Kaloor, Kochi",
    price: "Rs 1,33,00,000",
    squareFootage: "1373 sq ft",
    lotSize: "N/A",
    propertyType: "Apartment",
    status: "Available",
    owner: {
      name: "John Alukkas",
      contact: "+123456789",
      email: "john@example.com",
    },
    landmarks: [
        "Metro Station - 1km",
        "Stadium - 3km",
        "Airport - 10km"
    ]
  };

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
    
    <div className="relative min-h-screen text-gray-900">
      <div className="p-10 max-w-6xl mx-auto z-20">
        <h1 className="text-4xl font-bold text-center mb-6 animate-fadeIn">{property.title}</h1>
        <div className="flex flex-wrap gap-6 justify-between mb-8 animate-slideIn">
          <div className="w-full lg:w-1/2">
            <Slider {...sliderSettings}>
              {property.images.map((image, index) => (
                <div key={index} className="rounded-lg overflow-hidden shadow-lg">
                  <img
                    src={image}
                    alt={`Property Image ${index + 1}`}
                    className="w-full h-96 object-cover"
                  />
                </div>
              ))}
            </Slider>
          </div>
          
          <div className="w-full lg:w-4/10 bg-gray-100 p-6 rounded-lg shadow-md">
            <div className="text-xl font-semibold border-b border-gray-300 pb-2 mb-4">{property.location}</div>
            <div className="text-3xl font-bold text-green-600 mb-4">{property.price}</div>
            <div className="text-lg space-y-2">
              <p><strong>Square Footage:</strong> {property.squareFootage}</p>
              <p><strong>Lot Size:</strong> {property.lotSize}</p>
              <p><strong>Type:</strong> {property.propertyType}</p>
              <p><strong>Status:</strong> {property.status}</p>
              <motion.button 
                className="px-6 py-3 mt-4 bg-indigo-600 text-white rounded-lg shadow-md text-lg font-semibold hover:bg-indigo-700 transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                >Make Offer
                </motion.button>
            </div>
          </div>
        </div>

        <section className="my-8 bg-gray-100 p-6 rounded-lg shadow-md animate-fadeIn">
          <h2 className="text-2xl font-semibold mb-2 border-b border-gray-300 pb-2">Description</h2>
          <p>{property.description}</p>
        </section>

        <section className="my-8 bg-gray-100 p-6 rounded-lg shadow-md animate-fadeIn">
          <h2 className="text-2xl font-semibold mb-2 border-b border-gray-300 pb-2">Landmarks</h2>
          <ul className="list-disc pl-5 space-y-2">
                {property.landmarks.map((landmark, index) => (
                <li key={index} className="text-lg">{landmark}</li>
                ))}
           </ul>
        </section>

        <section className="my-8 bg-gray-100 p-6 rounded-lg shadow-md animate-slideIn">
          <h2 className="text-2xl font-semibold mb-2 border-b border-gray-300 pb-2">Owner Details</h2>
          <p><strong>Name:</strong> {property.owner.name}</p>
          <p><strong>Contact:</strong> {property.owner.contact}</p>
          <p><strong>Email:</strong> {property.owner.email}</p>
        </section>

        <section className="my-8 bg-gray-100 p-6 rounded-lg shadow-md animate-fadeIn">
          <h2 className="text-2xl font-semibold mb-4 border-b border-gray-300 pb-2">Location Map</h2>
          <img src="https://static.dnnsharp.com/documentation/google_maps_location_picker.png" alt="Map Placeholder" className="w-full rounded-lg shadow-md" />
        </section>
      </div>
    </div>
  );
}

export default PropertyInfo;

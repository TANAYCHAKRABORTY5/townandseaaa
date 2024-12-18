import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const images = [
  {
    image: "slide.png",
    title: "The Reserve",
    description:
      "We are excited to share our curated collection of consignment items here on Town & Sea's Reserve. All of these exceptional pieces are immediately available at the listed price. Please contact us with any questions, offers, or shipping inquiries!",
    buttonText: "SHOP NOW",
  },
  {
    image: "slide.png",
    title: "New Arrivals",
    description:
      "Explore our latest arrivals, handpicked to bring elegance and charm to your home decor. Act fast as these pieces are limited!",
    buttonText: "SHOP NOW",
  },
  {
    image: "slide.png",
    title: "Exclusive Offers",
    description:
      "Discover exclusive offers on unique items. Enjoy unbeatable prices and bring timeless beauty to your living spaces.",
    buttonText: "SHOP NOW",
  },
];

const Slider = () => {
  const [curr, setCurr] = useState(0);
  const length = images.length;
  const navigate = useNavigate();

  const nextSlide = () => {
    setCurr((prev) => (prev === length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurr((prev) => (prev === 0 ? length - 1 : prev - 1));
  };

  const handleButton = (buttonText) => {
    navigate(Shop);
  };

  return (
    <div className="relative overflow-hidden w-full h-[75vh]">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0 flex"
            style={{ width: "100%" }}
          >
            <div
              className="w-1/2 h-[75vh] bg-cover bg-center"
              style={{ backgroundImage: `url(${image.image})` }}
            ></div>
            <div className="w-1/2 h-[75vh] flex items-center bg-[#712d00] text-white p-8">
              <div className="max-w-md">
                <h2 className="text-4xl font-bold mb-4">{image.title}</h2>
                <p className="text-lg mb-6">{image.description}</p>
                <button
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                  onClick={() => handleButton(image.buttonText)}
                >
                  <a href="/shop">{image.buttonText}</a>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-0 text-white bg-blue-500 bg-opacity-50 p-1  hover:bg-opacity-75 transform -translate-y-1/2 z-10"
      >
        &#9664;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-0 text-white bg-blue-500 bg-opacity-50 p-1  hover:bg-opacity-75 transform -translate-y-1/2 z-10"
      >
        &#9654;
      </button>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurr(index)}
            className={`w-3 h-3 rounded-full ${
              index === curr ? "bg-white" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Slider;

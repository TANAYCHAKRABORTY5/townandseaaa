import React, { useState } from "react";
import Model from "./Modal";

const ProductCard = ({ image, title, price, status }) => {
  const [ismodelOpen, setIsModelOpen] = useState(false);
  const [selectedPrice, setSelectedPrice] = useState(0);

  const handleOffer = (price) => {
    setSelectedPrice(price);
    setIsModelOpen(true);
  };

  const submitOffer = (offer) => {
    setIsModelOpen(false);
    alert(`Your offer of $${offer} has been submitted.`);
  };

  return (
    <div className="border p-4 rounded-lg shadow-lg w-[300px] h-[460px] bg-white">
      <img src={image} alt={title} className="h-48 w-full object-fill mb-4" />
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      <p className="text-green-600 font-bold mt-2">${price}</p>
      {status && (
        <p className="text-sm text-gray-500 mt-1 font-medium">{status}</p>
      )}
      <div className="mt-4 flex flex-col space-y-2">
        <button className="bg-blue-800 text-white py-2 rounded">
          ADD TO CART
        </button>
        <button
          onClick={() => handleOffer(price)}
          className="bg-blue-300 text-white py-2 rounded"
        >
          MAKE AN OFFER
        </button>
      </div>
      <Model
        isOpen={ismodelOpen}
        onClose={() => setIsModelOpen(false)}
        price={selectedPrice}
        onSubmitOffer={submitOffer}
      />
    </div>
  );
};

export default ProductCard;

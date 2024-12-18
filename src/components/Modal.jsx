import React from "react";

const Modal = ({ isOpen, onClose, price, onSubmitOffer }) => {
  if (!isOpen) return null;

  const predefinedOffers = [
    { discount: 15, value: price - price * 0.15 },
    { discount: 10, value: price - price * 0.1 },
    { discount: 5, value: price - price * 0.05 },
  ];

  const handleOfferSubmit = (e) => {
    e.preventDefault();
    const customOffer = e.target.customOffer.value;
    onSubmitOffer(customOffer || price);
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-md w-[380px] shadow-lg">
        <div className="flex justify-between mb-4">
          <h2 className="text-lg font-bold">Make an Offer</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-black">
            &times;
          </button>
        </div>
        <p className="mb-4">
          Asking price: <strong>${price}</strong>
        </p>

        <div className="flex justify-around mb-4">
          {predefinedOffers.map((offer, index) => (
            <button
              key={index}
              className="border px-2 py-1 rounded hover:bg-gray-100"
              onClick={() => onSubmitOffer(offer.value)}
            >
              ${offer.value} <br />
              {offer.discount}% off
            </button>
          ))}
        </div>

        <form onSubmit={handleOfferSubmit}>
          <div className="flex items-center mb-4">
            <span>$</span>
            <input
              type="number"
              name="customOffer"
              placeholder="Your offer"
              className="border px-2 py-1 ml-2 w-full"
              min="1"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gray-800 text-white py-2 rounded hover:bg-gray-600"
          >
            Submit Offer
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;

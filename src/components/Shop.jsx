import React from "react";
import ProductCard from "./ProductCard";

const Shop = () => {
  const products = [
    {
      id: 1,
      image: "almirah.png",
      title:
        "Large Collection of Royal Copenhagen Blue Flower Braided, 98 Pieces",
      price: 2500,
      status: "",
    },
    {
      id: 2,
      image: "almirah.png",
      title: "Theodore Alexander Cane Chairs with Schumacher Seats, Set of 6",
      price: 800,
      status: "Sold",
    },
    {
      id: 3,
      image: "almirah.png",
      title:
        "Antique Spanish Colonial Geometric Front Walnut Cabinet with Inlay",
      price: 2400,
      status: "",
    },
    {
      id: 4,
      image: "almirah.png",
      title:
        "Antique Spanish Colonial Geometric Front Walnut Cabinet with Inlay",
      price: 2400,
      status: "",
    },
    {
      id: 5,
      image: "almirah.png",
      title:
        "Antique Spanish Colonial Geometric Front Walnut Cabinet with Inlay",
      price: 2400,
      status: "",
    },
    {
      id: 6,
      image: "almirah.png",
      title:
        "Antique Spanish Colonial Geometric Front Walnut Cabinet with Inlay",
      price: 2400,
      status: "",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Shop</h1>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            title={product.title}
            price={product.price}
            status={product.status}
          />
        ))}
      </div>
    </div>
  );
};

export default Shop;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { IoLogoWhatsapp } from "react-icons/io5";


const ProductPage = () => {
  const [products, setProducts] = useState([]);

  // Fetch products from the backend
  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/products");
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product._id}
            className="border rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow motion-preset-shrink motion-duration-1000"
          >
            {product.image && (
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover rounded-t-lg mb-4"
              />
            )}
            <h3 className="text-lg font-bold mb-2">{product.name}</h3>
            <p className="text-sm text-gray-600 mb-2">{product.description}</p>
            <p className="text-lg font-semibold text-blue-500 mb-4">
              ₹{product.price}
            </p>
            <button className="bg-blue-500 flex items-center ml-1   text-white px-4 py-2 rounded hover:bg-blue-600">
            
                Contact Us
            <IoLogoWhatsapp className="items-center " />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
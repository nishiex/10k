import React, { useState, useEffect } from "react";
import axios from "axios";

const AdminPage = () => {
  const [form, setForm] = useState({
    name: "",
    price: "",
    description: "",
    image: null,
  });
  const [products, setProducts] = useState([]);

  // Fetch products from the server
  const fetchProducts = async () => {
    try {
      const response = await axios.get("https://madhav-battery.onrender.com/api/products");
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // Handle file input change
  const handleFileChange = (e) => {
    setForm({ ...form, image: e.target.files[0] });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("price", form.price);
    formData.append("description", form.description);
    formData.append("image", form.image);

    try {
      await axios.post("https://madhav-battery.onrender.com/api/products", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setForm({ name: "", price: "", description: "", image: null });
      fetchProducts(); // Refresh the product list
    } catch (error) {
      console.error("Error uploading product:", error);
    }
  };

  // Handle product deletion
  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://madhav-battery.onrender.com/api/products/${id}`);
      fetchProducts(); // Refresh the product list
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>

      {/* Form to upload product */}
      <form onSubmit={handleSubmit} className="mb-6" encType="multipart/form-data">
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Product Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full border rounded p-2"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Price</label>
          <input
            type="number"
            name="price"
            value={form.price}
            onChange={handleChange}
            className="w-full border rounded p-2"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Description</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            className="w-full border rounded p-2"
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Image</label>
          <input
            type="file"
            name="image"
            onChange={handleFileChange}
            className="w-full border rounded p-2"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add Product
        </button>
      </form>

      {/* Display existing products */}
      <h2 className="text-xl font-bold mb-4">Existing Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <div
            key={product._id}
            className="border rounded p-4 shadow hover:shadow-lg"
          >
            <h3 className="text-lg font-bold">{product.name}</h3>
            <p className="text-sm">Price: ₹{product.price}</p>
            <p className="text-sm mb-2">{product.description}</p>
            {product.image && (
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover mb-2"
              />
            )}
            <button
              onClick={() => handleDelete(product._id)}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPage;
import React, { useState } from "react";
import axios from "axios";

const MyLandLord = () => {
  const [formData, setFormData] = useState({
    name: "",
    cast: "",
    adhaar: "",
    eightA: "",
    village: "",
    phone: "",
    date: "",
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/land", formData);
      alert("Form submitted successfully!");
      setFormData({
        name: "",
        cast: "",
        adhaar: "",
        eightA: "",
        village: "",
        phone: "",
        date: "",
      });
    } catch (err) {
      console.error("Error:", err);
      alert("Error submitting form!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-full max-w-md space-y-4">
        <h2 className="text-2xl font-bold text-center">Land Record Form</h2>
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required className="w-full border p-2 rounded" />
        <input type="text" name="cast" placeholder="Cast" value={formData.cast} onChange={handleChange} required className="w-full border p-2 rounded" />
        <input type="number" name="adhaar" placeholder="Adhaar" value={formData.adhaar} onChange={handleChange} required className="w-full border p-2 rounded" />
        <input type="number" name="eightA" placeholder="8/A Number" value={formData.eightA} onChange={handleChange} required className="w-full border p-2 rounded" />
        <input type="text" name="village" placeholder="8/A Village" value={formData.village} onChange={handleChange} required className="w-full border p-2 rounded" />
        <input type="number" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} required className="w-full border p-2 rounded" />
        <input type="date" name="date" value={formData.date} onChange={handleChange} required className="w-full border p-2 rounded" />

        <button type="submit" className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
          Submit
        </button>
      </form>
    </div>
  );
};

export default MyLandLord;

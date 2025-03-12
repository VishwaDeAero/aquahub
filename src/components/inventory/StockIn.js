import React, { useState } from "react";
import axios from "axios";

const StockIn = () => {
  // State for form data
  const [formData, setFormData] = useState({
    itemType: "",
    brand: "",
    itemCode: "",
    availableQty: 0,
    reorderQty: 0,
    status: "In Stock",
    volume: "",
    weight: "",
    price: 0,
    manufactureDate: "",
    expiryDate: "",
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("authToken");
      const response = await axios.post(
        "http://localhost:5001/api/inventory/stock-in",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert("Stock added successfully!");
      console.log(response.data);
      // Clear the form after successful submission
      setFormData({
        itemType: "",
        brand: "",
        itemCode: "",
        availableQty: 0,
        reorderQty: 0,
        status: "In Stock",
        volume: "",
        weight: "",
        price: 0,
        manufactureDate: "",
        expiryDate: "",
      });
    } catch (error) {
      console.error("Error adding stock:", error);
      alert("Failed to add stock. Please try again.");
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg">
      <form onSubmit={handleSubmit} className="grid grid-cols-6 sm:grid-cols-12 gap-2 sm:gap-4 md:gap-6 space-y-4">
        {/* Item Type */}
        <div className="col-span-4 flex items-center">
          <label className="block font-medium text-gray-700">Item Type</label>
        </div>
        <div className="col-span-8">
          <select
            name="itemType"
            value={formData.itemType}
            onChange={handleChange}
            className="mt-1 block w-full md:w-1/2 border p-2.5 rounded-md border-gray-300 bg-gray-100 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="">Select Type</option>
            <option value="Probiotics">Probiotics</option>
            <option value="Prebiotics">Prebiotics</option>
            <option value="Live feed">Live feed</option>
            <option value="Mineral">Mineral</option>
            <option value="Supplement">Supplement</option>
            <option value="Granular hatchery feed">Granular hatchery feed</option>
          </select>
        </div>

        {/* Item Status */}
        <div className="col-span-4 flex items-center">
          <label className="block font-medium text-gray-700">Item Status</label>
        </div>
        <div className="col-span-8">
          <div className="grid gride-cols-6 sm:grid-cols-12 gap-4">
            {/* Checkboxes */}
            <div className="col-span-3 flex flex-wrap gap-2 sm:flex-col sm:space-y-2">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="status"
                  value="Liquid"
                  onChange={handleChange}
                  className="form-checkbox"
                />
                <span className="ml-2">Liquid</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="status"
                  value="Powder"
                  onChange={handleChange}
                  className="form-checkbox"
                />
                <span className="ml-2">Powder</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="status"
                  value="Packet"
                  onChange={handleChange}
                  className="form-checkbox"
                />
                <span className="ml-2">Packet</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="status"
                  value="Bottle"
                  onChange={handleChange}
                  className="form-checkbox"
                />
                <span className="ml-2">Bottle</span>
              </label>
            </div>

            {/* Volume and Weight */}
            <div className="col-span-6 flex flex-col space-y-2 sm:space-y-0">
              <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-2 md:mb-4">
                <label className="font-medium text-gray-700">Volume</label>
                <input
                  type="text"
                  name="volume"
                  value={formData.volume}
                  onChange={handleChange}
                  className="w-full sm:w-1/2 border p-2.5 rounded-md border-gray-300 bg-gray-100 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Enter volume"
                />
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-2 md:mb-4">
                <label className="font-medium text-gray-700">Weight</label>
                <input
                  type="text"
                  name="weight"
                  value={formData.weight}
                  onChange={handleChange}
                  className="w-full sm:w-1/2 border p-2.5 rounded-md border-gray-300 bg-gray-100 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Enter weight"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Brand Name */}
        <div className="col-span-4 flex items-center">
          <label className="block font-medium text-gray-700">Brand Name</label>
        </div>
        <div className="col-span-8">
          <input
            type="text"
            name="brand"
            value={formData.brand}
            onChange={handleChange}
            className="mt-1 block w-full md:w-1/2 border p-2.5 rounded-md border-gray-300 bg-gray-100 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="Enter brand name"
          />
        </div>

        {/* Price */}
        <div className="col-span-4 flex items-center">
          <label className="block font-medium text-gray-700">Price</label>
        </div>
        <div className="col-span-8">
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="mt-1 block w-full md:w-1/2 border p-2.5 rounded-md border-gray-300 bg-gray-100 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="Enter price"
          />
        </div>

        {/* Order Date */}
        <div className="col-span-4 flex items-center">
          <label className="block font-medium text-gray-700">Order Date</label>
        </div>
        <div className="col-span-8">
          <input
            type="date"
            name="manufactureDate"
            value={formData.manufactureDate}
            onChange={handleChange}
            className="mt-1 block w-full md:w-1/2 border p-2.5 rounded-md border-gray-300 bg-gray-100 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        {/* Item Code */}
        <div className="col-span-4 flex items-center">
          <label className="block font-medium text-gray-700">Item Code</label>
        </div>
        <div className="col-span-8">
          <input
            type="text"
            name="itemCode"
            value={formData.itemCode}
            onChange={handleChange}
            className="mt-1 block w-full md:w-1/2 border p-2.5 rounded-md border-gray-300 bg-gray-100 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="Enter Item Code"
          />
        </div>

        {/* Batch No */}
        <div className="col-span-4 flex items-center">
          <label className="block font-medium text-gray-700">Batch No</label>
        </div>
        <div className="col-span-8">
          <input
            type="text"
            name="itemCode"
            value={formData.itemCode}
            onChange={handleChange}
            className="mt-1 block w-full md:w-1/2 border p-2.5 rounded-md border-gray-300 bg-gray-100 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="Enter Batch No"
          />
        </div>

        {/* Manufacture Date */}
        <div className="col-span-4 flex items-center">
          <label className="block font-medium text-gray-700">Manufacture Date</label>
        </div>
        <div className="col-span-8">
          <input
            type="date"
            name="manufactureDate"
            value={formData.manufactureDate}
            onChange={handleChange}
            className="mt-1 block w-full md:w-1/2 border p-2.5 rounded-md border-gray-300 bg-gray-100 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        {/* Expiry Date */}
        <div className="col-span-4 flex items-center">
          <label className="block font-medium text-gray-700">Expiry Date</label>
        </div>
        <div className="col-span-8">
          <input
            type="date"
            name="expiryDate"
            value={formData.expiryDate}
            onChange={handleChange}
            className="mt-1 block w-full md:w-1/2 border p-2.5 rounded-md border-gray-300 bg-gray-100 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        {/* Quantity */}
        <div className="col-span-4 flex items-center">
          <label className="block font-medium text-gray-700">Quantity</label>
        </div>
        <div className="col-span-8">
          <input
            type="number"
            name="availableQty"
            value={formData.availableQty}
            onChange={handleChange}
            className="mt-1 block w-full md:w-1/2 border p-2.5 rounded-md border-gray-300 bg-gray-100 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="Enter quantity"
          />
        </div>

        {/* Re-Order Quantity */}
        <div className="col-span-4 flex items-center">
          <label className="block font-medium text-gray-700">Re-Order Quantity</label>
        </div>
        <div className="col-span-8">
          <input
            type="number"
            name="reorderQty"
            value={formData.reorderQty}
            onChange={handleChange}
            className="mt-1 block w-full md:w-1/2 border p-2.5 rounded-md border-gray-300 bg-gray-100 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="Enter quantity"
          />
        </div>

        {/* Stock Status */}
        <div className="col-span-4 flex items-center">
          <label className="block font-medium text-gray-700">Stock Status</label>
        </div>
        <div className="col-span-8">
          <div className="flex items-center space-x-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="status"
                value="In Stock"
                checked={formData.status === "In Stock"}
                onChange={handleChange}
                className="form-radio"
              />
              <span className="ml-2">In Stock</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="status"
                value="Out of Stock"
                checked={formData.status === "Out of Stock"}
                onChange={handleChange}
                className="form-radio"
              />
              <span className="ml-2">Out of Stock</span>
            </label>
          </div>
        </div>
      </form>

      {/* Buttons */}
      <div className="flex justify-end mt-6 space-x-4">
        <button
          type="button"
          onClick={() =>
            setFormData({
              itemType: "",
              brand: "",
              itemCode: "",
              availableQty: 0,
              reorderQty: 0,
              status: "In Stock",
              volume: "",
              weight: "",
              price: 0,
              manufactureDate: "",
              expiryDate: "",
            })
          }
          className="px-4 py-2 w-1/2 md:w-1/6 border border-sky-900 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
        >
          Clear
        </button>
        <button
          type="submit"
          onClick={handleSubmit}
          className="px-4 py-2 w-1/2 md:w-1/6 bg-darkblue text-white rounded-lg hover:bg-blue-900"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default StockIn;
import React, { useState, useEffect } from "react";
import axios from "axios";

const StockOut = () => {
  // State for inventory data
  const [inventory, setInventory] = useState([]);

  // State for selected items for stock-out
  const [selectedItems, setSelectedItems] = useState([]);

  // State for dropdown selection
  const [selectedType, setSelectedType] = useState("");

  // Fetch inventory data from the backend
  useEffect(() => {
    const fetchInventory = async () => {
      try {
        const token = localStorage.getItem("authToken");
        const response = await axios.get("http://localhost:5001/api/inventory/inventory", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setInventory(response.data);
      } catch (error) {
        console.error("Error fetching inventory:", error);
        alert("Failed to fetch inventory. Please try again.");
      }
    };

    fetchInventory();
  }, []);

  // Handle adding items to the stock-out list
  const handleAddToStockOut = (item) => {
    if (!selectedItems.some((selected) => selected._id === item._id)) {
      setSelectedItems([...selectedItems, { ...item, quantity: 1 }]); // Default quantity is 1
    }
  };

  // Handle removing items from the stock-out list
  const handleRemoveFromStockOut = (id) => {
    setSelectedItems(selectedItems.filter((item) => item._id !== id));
  };

  // Handle quantity change for selected items
  const handleQuantityChange = (id, quantity) => {
    const updatedItems = selectedItems.map((item) =>
      item._id === id ? { ...item, quantity: parseInt(quantity, 10) } : item
    );
    setSelectedItems(updatedItems);
  };

  // Handle stock-out submission
  const handleStockOut = async () => {
    try {
      const token = localStorage.getItem("authToken");

      // Prepare stock-out data
      const stockOutData = selectedItems.map((item) => ({
        itemCode: item.itemCode,
        quantity: item.quantity,
      }));

      // Send stock-out data to the backend
      await axios.post("http://localhost:5001/api/inventory/stock-out", stockOutData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      alert("Stock out successful!");
      setSelectedItems([]); // Clear selected items after successful stock-out
    } catch (error) {
      console.error("Error during stock out:", error);
      alert("Failed to process stock out. Please try again.");
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg">
      {/* Label + Dropdown + Search Button */}
      <div className="flex items-center space-x-4 mb-6">
        {/* Label */}
        <label className="font-medium">Item Type</label>

        {/* Dropdown */}
        <select
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
          className="px-4 py-2 w-48 border rounded-lg shadow-sm bg-gray-100 text-gray-700 border-sky-900 focus:ring-sky-900"
        >
          <option value="">Select Type</option>
          <option value="Type 1">Type 1</option>
          <option value="Type 2">Type 2</option>
          <option value="Type 3">Type 3</option>
        </select>

        {/* Search Button (Disabled when no type is selected) */}
        <button
          className={`px-4 py-2 w-32 rounded-lg ${
            selectedType ? "bg-sky-900 text-white hover:bg-blue-900" : "bg-gray-200 text-gray-500 cursor-not-allowed"
          }`}
          disabled={!selectedType}
        >
          Search
        </button>
      </div>

      {/* Top Table (Inventory List) */}
      <div className="bg-white shadow-md rounded-lg overflow-auto mb-6">
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2"></th>
              <th className="px-4 py-2 text-left">Date</th>
              <th className="px-4 py-2 text-left">Brand</th>
              <th className="px-4 py-2 text-left">Item Code</th>
              <th className="px-4 py-2 text-center">Available Quantity</th>
              <th className="px-4 py-2 text-center">Re-Order Quantity</th>
              <th className="px-4 py-2 text-center">Quantity</th>
              <th className="px-4 py-2 text-center">Add</th>
            </tr>
          </thead>
          <tbody>
            {inventory.map((item) => (
              <tr key={item._id} className="border-b">
                <td className="px-4 py-2">
                  <input type="checkbox" />
                </td>
                <td className="px-4 py-2">{new Date(item.date).toLocaleDateString()}</td>
                <td className="px-4 py-2">{item.brand}</td>
                <td className="px-4 py-2">{item.itemCode}</td>
                <td className="px-4 py-2 text-center">{item.availableQty}</td>
                <td className="px-4 py-2 text-center">{item.reorderQty}</td>
                <td className="px-4 py-2 text-center">
                  <input
                    type="number"
                    min="1"
                    max={item.availableQty}
                    defaultValue="1"
                    className="w-16 p-1 border rounded-md"
                  />
                </td>
                <td className="px-4 py-2 text-center">
                  <button
                    onClick={() => handleAddToStockOut(item)}
                    className="px-2 text-sky-900 hover:text-blue-900"
                  >
                    <i className="fas fa-plus"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Bottom Table (Selected Stock Out Items) */}
      <div className="bg-white shadow-md rounded-lg overflow-auto border-2 border-sky-900">
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2 text-left">Date</th>
              <th className="px-4 py-2 text-left">Item Type</th>
              <th className="px-4 py-2 text-left">Brand</th>
              <th className="px-4 py-2 text-left">Item Code</th>
              <th className="px-4 py-2 text-center">Available Quantity</th>
              <th className="px-4 py-2 text-center">Quantity</th>
              <th className="px-4 py-2 text-center">Remove</th>
            </tr>
          </thead>
          <tbody>
            {selectedItems.length === 0 ? (
              <tr>
                <td colSpan="7" className="px-4 py-4 text-center text-gray-500">
                  No items selected.
                </td>
              </tr>
            ) : (
              selectedItems.map((item) => (
                <tr key={item._id} className="border-b">
                  <td className="px-4 py-2">{new Date(item.date).toLocaleDateString()}</td>
                  <td className="px-4 py-2">{item.itemType}</td>
                  <td className="px-4 py-2">{item.brand}</td>
                  <td className="px-4 py-2">{item.itemCode}</td>
                  <td className="px-4 py-2 text-center">{item.availableQty}</td>
                  <td className="px-4 py-2 text-center">
                    <input
                      type="number"
                      min="1"
                      max={item.availableQty}
                      value={item.quantity}
                      onChange={(e) => handleQuantityChange(item._id, e.target.value)}
                      className="w-16 p-1 border rounded-md"
                    />
                  </td>
                  <td className="px-4 py-2 text-center">
                    <button
                      onClick={() => handleRemoveFromStockOut(item._id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <i className="fas fa-trash"></i>
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Save Button */}
      <div className="flex justify-end mt-6">
        <button
          onClick={handleStockOut}
          className="px-4 py-2 w-full md:w-32 bg-sky-900 text-white rounded-lg hover:bg-blue-900"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default StockOut;
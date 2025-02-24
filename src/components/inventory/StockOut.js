import React, { useState } from "react";

const StockOut = () => {
  // Mock inventory data for the top table
  const [inventory, setInventory] = useState([
    { id: 1, date: "11.09.2023", brand: "01", itemCode: "5754", availableQty: 25, reorderQty: 10, quantity: 2 },
    { id: 2, date: "11.09.2023", brand: "01", itemCode: "4646", availableQty: 12, reorderQty: 5, quantity: 2 },
    { id: 3, date: "12.09.2023", brand: "02", itemCode: "4757", availableQty: 53, reorderQty: 15, quantity: 4 },
    { id: 4, date: "13.09.2023", brand: "03", itemCode: "7896", availableQty: 53, reorderQty: 10, quantity: 5 },
  ]);

  // Selected items for stock out (bottom table)
  const [selectedItems, setSelectedItems] = useState([]);

  // Function to add items to Stock Out table
  const handleAddToStockOut = (item) => {
    if (!selectedItems.some((selected) => selected.id === item.id)) {
      setSelectedItems([...selectedItems, item]);
    }
  };

  // Function to remove item from Stock Out table
  const handleRemoveFromStockOut = (id) => {
    setSelectedItems(selectedItems.filter((item) => item.id !== id));
  };

  // Dropdown selection
  const [selectedType, setSelectedType] = useState("");

  // Handle dropdown change
  const handleDropdownChange = (e) => {
    setSelectedType(e.target.value);
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
          onChange={handleDropdownChange}
          className="px-4 py-2 w-48 border rounded-lg shadow-sm bg-gray-100 text-gray-700 border-sky-900 focus:ring-sky-900"
        >
          <option value="">Select Type</option>
          <option value="01">Type 1</option>
          <option value="02">Type 2</option>
          <option value="03">Type 3</option>
        </select>

        {/* Search Button (Disabled when no type is selected) */}
        <button
          className={`px-4 py-2 w-32 rounded-lg ${selectedType ? "bg-sky-900 text-white hover:bg-blue-900" : "bg-gray-200 text-gray-500 cursor-not-allowed"
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
              <tr key={item.id} className="border-b">
                <td className="px-4 py-2"><input type="checkbox" /></td>
                <td className="px-4 py-2">{item.date}</td>
                <td className="px-4 py-2">{item.brand}</td>
                <td className="px-4 py-2">{item.itemCode}</td>
                <td className="px-4 py-2 text-center">{item.availableQty}</td>
                <td className="px-4 py-2 text-center">{item.reorderQty}</td>
                <td className="px-4 py-2 text-center">{item.quantity}</td>
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
                <tr key={item.id} className="border-b">
                  <td className="px-4 py-2">{item.date}</td>
                  <td className="px-4 py-2">{item.itemCode}</td>
                  <td className="px-4 py-2">{item.brand}</td>
                  <td className="px-4 py-2">{item.itemCode}</td>
                  <td className="px-4 py-2 text-center">{item.availableQty}</td>
                  <td className="px-4 py-2 text-center">{item.quantity}</td>
                  <td className="px-4 py-2 text-center">
                    <button
                      onClick={() => handleRemoveFromStockOut(item.id)}
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
        <button className="px-4 py-2 w-full md:w-32 bg-sky-900 text-white rounded-lg hover:bg-blue-900">
          Save
        </button>
      </div>
    </div>
  );
};

export default StockOut;
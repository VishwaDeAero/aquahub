import React, { useState } from "react";
import DeleteConfirmationModal from "./DeleteConfirmationModal";

const ManageInventory = () => {
  // Mock inventory data
  const [inventory, setInventory] = useState([
    { id: 1, date: "11.09.2023", brand: "01", itemCode: "5754", availableQty: 25, reorderQty: 10 },
    { id: 2, date: "11.09.2023", brand: "01", itemCode: "4646", availableQty: 12, reorderQty: 5 },
    { id: 3, date: "12.09.2023", brand: "02", itemCode: "4757", availableQty: 53, reorderQty: 15 },
    { id: 4, date: "13.09.2023", brand: "03", itemCode: "7896", availableQty: 53, reorderQty: 10 },
  ]);

  // State for delete confirmation modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  // Open modal when clicking delete button
  const openDeleteModal = (id) => {
    setSelectedRow(id);
    setIsModalOpen(true);
  };

  // Close modal without deleting
  const closeDeleteModal = () => {
    setSelectedRow(null);
    setIsModalOpen(false);
  };

  // Confirm delete row
  const confirmDelete = () => {
    setInventory(inventory.filter((item) => item.id !== selectedRow));
    closeDeleteModal();
  };

  // Dropdown selection
  const [selectedType, setSelectedType] = useState("");

  // Handle dropdown change
  const handleDropdownChange = (e) => {
    setSelectedType(e.target.value);
  };

  return (
    <div className="p-6">
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

      {/* Inventory Table */}
      <div className="bg-white shadow-md rounded-lg overflow-auto">
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2">
              </th>
              <th className="px-4 py-2 text-left">Date</th>
              <th className="px-4 py-2 text-left">Brand</th>
              <th className="px-4 py-2 text-left">Item Code</th>
              <th className="px-4 py-2 text-center">Available Quantity</th>
              <th className="px-4 py-2 text-center">Re-Order Quantity</th>
              <th className="px-4 py-2 text-center">Delete</th>
              <th className="px-4 py-2 text-center">Update</th>
            </tr>
          </thead>
          <tbody>
            {inventory.map((item, index) => (
              <tr
                key={item.id}
                className={`border-b ${index % 2 === 0 ? "bg-gray-100" : ""}`}
              >
                <td className="px-4 py-2">
                  <input type="checkbox" />
                </td>
                <td className="px-4 py-2">{item.date}</td>
                <td className="px-4 py-2">{item.brand}</td>
                <td className="px-4 py-2">{item.itemCode}</td>
                <td className="px-4 py-2 text-center">{item.availableQty}</td>
                <td className="px-4 py-2 text-center">{item.reorderQty}</td>
                <td className="px-4 py-2 text-center">
                  <button onClick={() => openDeleteModal(item.id)} className="text-red-500 hover:text-red-700">
                    <i className="fas fa-trash"></i>
                  </button>
                </td>
                <td className="px-4 py-2 text-center">
                  <button className="text-sky-900 hover:text-blue-900">
                    <i className="fas fa-pen"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Clear & Save Buttons */}
      <div className="flex justify-end mt-6 space-x-4">
        <button className="px-4 py-2 w-32 border border-sky-900 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300">
          Clear
        </button>
        <button className="px-4 py-2 w-32 bg-sky-900 text-white rounded-lg hover:bg-blue-900">
          Save
        </button>
      </div>

      {/* Delete Confirmation Modal */}
      <DeleteConfirmationModal
        isOpen={isModalOpen}
        onClose={closeDeleteModal}
        onConfirm={confirmDelete}
      />
    </div>
  );
};

export default ManageInventory;
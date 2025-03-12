import React, { useState, useEffect } from "react";
import axios from "axios";
import DeleteConfirmationModal from "./DeleteConfirmationModal";

const ManageInventory = () => {
  // State for inventory data
  const [inventory, setInventory] = useState([]);

  // State for filtered inventory
  const [filteredInventory, setFilteredInventory] = useState([]);

  // State for delete confirmation modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);

  // State for filters
  const [selectedType, setSelectedType] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  // Fetch inventory data from backend
  useEffect(() => {
    const fetchInventory = async () => {
      try {
        const token = localStorage.getItem("authToken");
        const response = await axios.get(
          "http://localhost:5001/api/inventory/inventory",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setInventory(response.data);
        setFilteredInventory(response.data); // Initialize filtered inventory
      } catch (error) {
        console.error("Error fetching inventory:", error);
        alert("Failed to fetch inventory. Please try again.");
      }
    };

    fetchInventory();
  }, []);

  // Handle search/filter
  const handleSearch = () => {
    let filtered = inventory;

    if (selectedType) {
      filtered = filtered.filter((item) => item.itemType === selectedType);
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (item) =>
          item.itemCode.toLowerCase().includes(query) ||
          item.brand.toLowerCase().includes(query)
      );
    }

    setFilteredInventory(filtered);
  };

  // Handle delete confirmation
  const confirmDelete = async () => {
    try {
      const token = localStorage.getItem("authToken");
      await axios.delete(
        `http://localhost:5001/api/inventory/inventory/${selectedItemId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Update state after successful deletion
      setInventory(inventory.filter((item) => item._id !== selectedItemId));
      setFilteredInventory(
        filteredInventory.filter((item) => item._id !== selectedItemId)
      );

      setIsModalOpen(false);
      setSelectedItemId(null);
    } catch (error) {
      console.error("Error deleting item:", error);
      alert("Failed to delete item. Please try again.");
    }
  };

  // Table headers
  const tableHeaders = [
    "Date",
    "Brand",
    "Item Code",
    "Available Quantity",
    "Re-Order Quantity",
    "Delete",
    "Update",
  ];

  return (
    <div className="bg-white p-6 rounded-lg">
      {/* Filter/Search Controls */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        {/* Item Type Filter */}
        <div className="flex items-center gap-2">
          <label className="font-medium">Item Type:</label>
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="px-3 py-2 border rounded-lg bg-gray-100"
          >
            <option value="">All Type</option>
            <option value="Probiotics">Probiotics</option>
            <option value="Prebiotics">Prebiotics</option>
            <option value="Live feed">Live feed</option>
            <option value="Mineral">Mineral</option>
            <option value="Supplement">Supplement</option>
            <option value="Granular hatchery feed">
              Granular hatchery feed
            </option>
          </select>
        </div>

        {/* Search Input */}
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Search by code or brand..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="px-3 py-2 border rounded-lg w-full md:w-64"
          />
        </div>

        {/* Search Button */}
        <button
          onClick={handleSearch}
          className="px-4 py-2 bg-sky-900 text-white rounded-lg hover:bg-blue-900"
        >
          Search
        </button>
      </div>

      {/* Inventory Table */}
      <div className="overflow-x-auto">
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-200">
              {tableHeaders.map((header, index) => (
                <th key={index} className="px-4 py-2 text-left">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredInventory.map((item) => (
              <tr key={item._id} className="border-b hover:bg-gray-50">
                <td className="px-4 py-2">
                  {new Date(item.date).toLocaleDateString()}
                </td>
                <td className="px-4 py-2">{item.brand}</td>
                <td className="px-4 py-2">{item.itemCode}</td>
                <td className="px-4 py-2 text-center">{item.availableQty}</td>
                <td className="px-4 py-2 text-center">{item.reorderQty}</td>
                <td className="px-4 py-2 text-center">
                  <button
                    onClick={() => {
                      setSelectedItemId(item._id);
                      setIsModalOpen(true);
                    }}
                    className="text-red-500 hover:text-red-700"
                  >
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

        {filteredInventory.length === 0 && (
          <div className="text-center py-4 text-gray-500">
            No inventory items found
          </div>
        )}
      </div>

      {/* Delete Confirmation Modal */}
      <DeleteConfirmationModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedItemId(null);
        }}
        onConfirm={confirmDelete}
      />
    </div>
  );
};

export default ManageInventory;

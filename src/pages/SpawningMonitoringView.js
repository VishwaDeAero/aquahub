import React, { useState, useEffect } from "react";
import IconNavigation from "../components/IconNavigation";
import AppLayout from "../components/layouts/AppLayout";
import FormModal from "../components/modals/FormModal";
import ConfirmationModal from "../components/modals/ConfirmationModal";
import SpawningMonitoringForm from "../components/forms/SpawningMonitoringForm";
import axios from "axios";
import { format } from "date-fns";

function SpawningMonitoringView() {
  const [spawningData, setSpawningData] = useState([]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedSpawning, setSelectedSpawning] = useState(null);

  // Open Edit Modal
  const handleEdit = (spawning) => {
    setSelectedSpawning(spawning);
    setIsModalOpen(true);
  };

  // Open Delete Confirmation Modal
  const handleDelete = (id) => {
    setSelectedSpawning(id);
    setIsDeleteModalOpen(true);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("authToken");
        const response = await axios.get(
          "http://localhost:5001/api/spawnings",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setSpawningData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  // Update delete handler
  const confirmDelete = async () => {
    try {
      const token = localStorage.getItem("authToken");
      await axios.delete(
        `http://localhost:5001/api/spawnings/${selectedSpawning}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setSpawningData((prev) =>
        prev.filter((item) => item._id !== selectedSpawning)
      );
      setIsDeleteModalOpen(false);
    } catch (error) {
      console.error("Delete error:", error);
      setIsDeleteModalOpen(false);
    }
  };

  // Update save handler
  const handleSave = async (data) => {
    try {
      const token = localStorage.getItem("authToken");
      if (selectedSpawning?._id) {
        await axios.put(
          `http://localhost:5001/api/spawnings/${selectedSpawning._id}`,
          data,
          { headers: { Authorization: `Bearer ${token}` } }
        );
      } else {
        await axios.post("http://localhost:5001/api/spawnings", data, {
          headers: { Authorization: `Bearer ${token}` },
        });
      }
      const response = await axios.get("http://localhost:5001/api/spawnings", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setSpawningData(response.data);
      setIsModalOpen(false);
    } catch (error) {
      console.error("Save error:", error);
    }
  };

  return (
    <AppLayout title="Spawning Monitoring">
      {/* Scrollable Icon Navigation */}
      <IconNavigation onSelect={() => {}} />

      <div className="p-6 border rounded-md bg-white shadow-sm">
        {/* User Table */}
        <div className="bg-white shadow-md rounded-lg overflow-auto">
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2"></th>
                <th className="px-4 py-2 text-left">Date</th>
                <th className="px-4 py-2 text-left">Broodstock</th>
                <th className="px-4 py-2 text-left">Tank Number</th>
                <th className="px-4 py-2 text-center">Number of Spawner</th>
                <th className="px-4 py-2 text-center">View</th>
                <th className="px-4 py-2 text-center">Delete</th>
                <th className="px-4 py-2 text-center">Update</th>
              </tr>
            </thead>
            <tbody>
              {spawningData.map((item, index) => (
                <tr
                  key={item.id}
                  className={`border-b ${index % 2 === 0 ? "bg-gray-100" : ""}`}
                >
                  <td className="px-4 py-2">
                    <input type="checkbox" />
                  </td>
                  <td className="px-4 py-2">{item.date}</td>
                  <td className="px-4 py-2">{item.broodstock}</td>
                  <td className="px-4 py-2">{item.tankNumber}</td>
                  <td className="px-4 py-2 text-center">
                    {item.numberOfSpawner}
                  </td>
                  <td className="px-4 py-2 text-center">
                    <button className="text-yellow-500 text-lg">
                      <i className="fas fa-eye mr-1"></i>
                    </button>
                  </td>
                  <td className="px-4 py-2 text-center">
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="text-red-500 text-lg"
                    >
                      <i className="fas fa-trash"></i>
                    </button>
                  </td>
                  <td className="px-4 py-2 text-center">
                    <button
                      onClick={() => handleEdit(item)}
                      className="text-blue-500 text-lg"
                    >
                      <i className="fas fa-pen"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Edit Modal */}
        <FormModal
          isOpen={isModalOpen}
          title="Edit Spawning"
          form={
            <SpawningMonitoringForm
              initialData={selectedSpawning}
              onSubmit={handleSave}
              onCancel={() => setIsModalOpen(false)}
            />
          }
          onClose={() => setIsModalOpen(false)}
        />

        {/* Delete Confirmation Modal */}
        <ConfirmationModal
          isOpen={isDeleteModalOpen}
          message="Are you sure you want to delete this entry?"
          onClose={() => setIsDeleteModalOpen(false)}
          onConfirm={confirmDelete}
        />
      </div>
    </AppLayout>
  );
}

export default SpawningMonitoringView;

import React, { useState, useEffect } from "react";
import axios from "axios";
import AppLayout from "../components/layouts/AppLayout";
import IconNavigation from "../components/IconNavigation";
import FormModal from "../components/modals/FormModal";
import ConfirmationModal from "../components/modals/ConfirmationModal";
import HatchingMonitoringForm from "../components/forms/HatchingMonitoringForm";

function HatchingMonitoringView() {
  const [hatchingData, setHatchingData] = useState([]);
  const [loading, setLoading] = useState(true);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedHatching, setSelectedHatching] = useState(null);

  // Open Edit Modal
  const handleEdit = (hatching) => {
    setSelectedHatching(hatching);
    setIsModalOpen(true);
  };

  // Open Delete Confirmation Modal
  const handleDelete = (id) => {
    setSelectedHatching(id);
    setIsDeleteModalOpen(true);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("authToken");
        const response = await axios.get("http://localhost:5001/api/hatchings", {
          headers: { Authorization: `Bearer ${token}` }
        });
        setHatchingData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const confirmDelete = async () => {
    try {
      const token = localStorage.getItem("authToken");
      await axios.delete(`http://localhost:5001/api/hatchings/${selectedHatching}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setHatchingData(prev => prev.filter(item => item._id !== selectedHatching));
    } catch (error) {
      console.error("Delete error:", error);
    }
    setIsDeleteModalOpen(false);
  };

  const handleSave = async (data) => {
    try {
      const token = localStorage.getItem("authToken");
      const url = data._id 
        ? `http://localhost:5001/api/hatchings/${data._id}`
        : "http://localhost:5001/api/hatchings";
      
      const response = data._id
        ? await axios.put(url, data, { headers: { Authorization: `Bearer ${token}` } })
        : await axios.post(url, data, { headers: { Authorization: `Bearer ${token}` } });

      setHatchingData(prev => 
        data._id 
          ? prev.map(item => item._id === data._id ? response.data : item)
          : [...prev, response.data]
      );
      setIsModalOpen(false);
    } catch (error) {
      console.error("Save error:", error);
    }
  };

  return (
    <AppLayout title="Hatching Monitoring">
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
                <th className="px-4 py-2 text-left">Naupilli Stage</th>
                <th className="px-4 py-2 text-center">Number of Eggs</th>
                <th className="px-4 py-2 text-center">View</th>
                <th className="px-4 py-2 text-center">Delete</th>
                <th className="px-4 py-2 text-center">Update</th>
              </tr>
            </thead>
            <tbody>
              {hatchingData.map((item, index) => (
                <tr
                  key={item.id}
                  className={`border-b ${index % 2 === 0 ? "bg-gray-100" : ""}`}
                >
                  <td className="px-4 py-2">
                    <input type="checkbox" />
                  </td>
                  <td className="px-4 py-2">{item.date}</td>
                  <td className="px-4 py-2">{item.broodstock}</td>
                  <td className="px-4 py-2">{item.naupilliStage}</td>
                  <td className="px-4 py-2 text-center">{item.numberEggs}</td>
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
          title="Edit Hatching"
          form={
            <HatchingMonitoringForm
              initialData={selectedHatching}
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

export default HatchingMonitoringView;

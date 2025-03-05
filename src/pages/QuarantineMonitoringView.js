import React, { useState, useEffect } from "react";
import axios from "axios";
import QuarantineMonitoringForm from "../components/forms/QuarantineMonitoringForm";
import AppLayout from "../components/layouts/AppLayout";
import IconNavigation from "../components/IconNavigation";
import FormModal from "../components/modals/FormModal";
import ConfirmationModal from "../components/modals/ConfirmationModal";
import { format } from "date-fns";

function QuarantineMonitoringView() {
  const [quarantineData, setQuarantineData] = useState([]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedQuarantine, setSelectedQuarantine] = useState(null);

  // Open Edit Modal
  const handleEdit = (quarantine) => {
    setSelectedQuarantine(quarantine);
    setIsModalOpen(true);
  };

  // Open Delete Confirmation Modal
  const handleDelete = (id) => {
    setSelectedQuarantine(id);
    setIsDeleteModalOpen(true);
  };

  // Enhanced fetch function
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("authToken");
        const response = await axios.get(
          "http://localhost:5001/api/quarantines",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setQuarantineData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  // Enhanced delete handler
  const confirmDelete = async () => {
    try {
      const token = localStorage.getItem("authToken");
      await axios.delete(
        `http://localhost:5001/api/quarantines/${selectedQuarantine}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setQuarantineData((prev) =>
        prev.filter((item) => item._id !== selectedQuarantine)
      );
      setIsDeleteModalOpen(false);
    } catch (error) {
      console.error("Delete error:", error);
    }
  };

  // Enhanced save handler
  const handleSave = async (data) => {
    try {
      const token = localStorage.getItem("authToken");
      if (selectedQuarantine?._id) {
        await axios.put(
          `http://localhost:5001/api/quarantines/${selectedQuarantine._id}`,
          data,
          { headers: { Authorization: `Bearer ${token}` } }
        );
      } else {
        await axios.post("http://localhost:5001/api/quarantines", data, {
          headers: { Authorization: `Bearer ${token}` },
        });
      }
      const response = await axios.get(
        "http://localhost:5001/api/quarantines",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setQuarantineData(response.data);
      setIsModalOpen(false);
    } catch (error) {
      console.error("Save error:", error);
    }
  };
  return (
    <AppLayout title="Quarantine Monitoring">
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
                <th className="px-4 py-2 text-left">Area</th>
                <th className="px-4 py-2 text-left">Sample Number</th>
                <th className="px-4 py-2 text-center">View</th>
                <th className="px-4 py-2 text-center">Delete</th>
                <th className="px-4 py-2 text-center">Update</th>
              </tr>
            </thead>
            <tbody>
              {quarantineData.map((item, index) => (
                <tr
                  key={item.id}
                  className={`border-b ${index % 2 === 0 ? "bg-gray-100" : ""}`}
                >
                  <td className="px-4 py-2">
                    <input type="checkbox" />
                  </td>
                  <td className="px-4 py-2">
                    {format(new Date(item.date), "MM/dd/yyyy")}
                  </td>
                  <td className="px-4 py-2">{item.broodstock}</td>
                  <td className="px-4 py-2">{item.area}</td>
                  <td className="px-4 py-2">{item.sampleNumber}</td>
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
          title="Edit Quarantine"
          form={
            <QuarantineMonitoringForm
              initialData={selectedQuarantine}
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

export default QuarantineMonitoringView;

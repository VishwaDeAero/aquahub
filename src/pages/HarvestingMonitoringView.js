import React, { useState } from 'react'
import AppLayout from '../components/layouts/AppLayout';
import IconNavigation from '../components/IconNavigation';
import FormModal from '../components/modals/FormModal';
import HarvestingMonitoringForm from '../components/forms/HarvestingMonitoringForm';
import ConfirmationModal from '../components/modals/ConfirmationModal';

function HarvestingMonitoringView() {

    const [harvestingData, setHarvestingData] = useState([
        { id: 1, date: "11.09.2023", harvestAmount: "100", saleAmount: "200" },
        { id: 2, date: "12.09.2023", harvestAmount: "200", saleAmount: "230" },
        { id: 3, date: "13.09.2023", harvestAmount: "300", saleAmount: "203" },
    ]);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [selectedHarvesting, setSelectedHarvesting] = useState(null);

    // Open Edit Modal
    const handleEdit = (harvesting) => {
        setSelectedHarvesting(harvesting);
        setIsModalOpen(true);
    };

    // Open Delete Confirmation Modal
    const handleDelete = (id) => {
        setSelectedHarvesting(id);
        setIsDeleteModalOpen(true);
    };

    // Confirm Delete
    const confirmDelete = () => {
        setHarvestingData(harvestingData.filter((item) => item.id !== selectedHarvesting));
        setIsDeleteModalOpen(false);
    };

    // Save (for both Create & Edit)
    const handleSave = (updatedHarvesting) => {
        if (selectedHarvesting) {
            // Update existing
            setHarvestingData((prev) =>
                prev.map((item) => (item.id === updatedHarvesting.id ? updatedHarvesting : item))
            );
        } else {
            // Add new
            setHarvestingData((prev) => [...prev, { id: prev.length + 1, ...updatedHarvesting }]);
        }
        setIsModalOpen(false);
    };

    return (
        <AppLayout title="Harvesting Monitoring">
            {/* Scrollable Icon Navigation */}
            <IconNavigation onSelect={() => { }} />

            <div className="p-6 border rounded-md bg-white shadow-sm">
                {/* User Table */}
                <div className="bg-white shadow-md rounded-lg overflow-auto">
                    <table className="w-full table-auto border-collapse">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="px-4 py-2">
                                </th>
                                <th className="px-4 py-2 text-left">Date</th>
                                <th className="px-4 py-2 text-left">Harvest Amount</th>
                                <th className="px-4 py-2 text-left">Sell Amount</th>
                                <th className="px-4 py-2 text-center">View</th>
                                <th className="px-4 py-2 text-center">Delete</th>
                                <th className="px-4 py-2 text-center">Update</th>
                            </tr>
                        </thead>
                        <tbody>
                            {harvestingData.map((item, index) => (
                                <tr key={item.id} className={`border-b ${index % 2 === 0 ? "bg-gray-100" : ""}`}>
                                    <td className="px-4 py-2">
                                        <input type="checkbox" />
                                    </td>
                                    <td className="px-4 py-2">{item.date}</td>
                                    <td className="px-4 py-2">{item.harvestAmount}</td>
                                    <td className="px-4 py-2">{item.saleAmount}</td>
                                    <td className="px-4 py-2 text-center">
                                        <button className="text-yellow-500 text-lg">
                                            <i className="fas fa-eye mr-1"></i>
                                        </button>
                                    </td>
                                    <td className="px-4 py-2 text-center">
                                        <button onClick={() => handleDelete(item.id)} className="text-red-500 text-lg">
                                            <i className="fas fa-trash"></i>
                                        </button>
                                    </td>
                                    <td className="px-4 py-2 text-center">
                                        <button onClick={() => handleEdit(item)} className="text-blue-500 text-lg">
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
                    title="Edit Harvest"
                    form={<HarvestingMonitoringForm initialData={selectedHarvesting} onSubmit={handleSave} onCancel={() => setIsModalOpen(false)} />}
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
    )
}

export default HarvestingMonitoringView
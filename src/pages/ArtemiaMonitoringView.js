import React, { useState } from 'react'
import AppLayout from '../components/layouts/AppLayout';
import IconNavigation from '../components/IconNavigation';
import FormModal from '../components/modals/FormModal';
import ArtemiaMonitoringForm from '../components/forms/ArtemiaMonitoringForm';
import ConfirmationModal from '../components/modals/ConfirmationModal';

function ArtemiaMonitoringView() {

    const [artemiaData, setArtemiaData] = useState([
        { id: 1, date: "11.09.2023", artemiaBrand: "Brand 01", tankNumber: "100", salinity: "200" },
        { id: 2, date: "12.09.2023", artemiaBrand: "Brand 05", tankNumber: "200", salinity: "230" },
        { id: 3, date: "13.09.2023", artemiaBrand: "Brand 08", tankNumber: "300", salinity: "203" },
    ]);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [selectedArtemia, setSelectedArtemia] = useState(null);

    // Open Edit Modal
    const handleEdit = (artemia) => {
        setSelectedArtemia(artemia);
        setIsModalOpen(true);
    };

    // Open Delete Confirmation Modal
    const handleDelete = (id) => {
        setSelectedArtemia(id);
        setIsDeleteModalOpen(true);
    };

    // Confirm Delete
    const confirmDelete = () => {
        setArtemiaData(artemiaData.filter((item) => item.id !== selectedArtemia));
        setIsDeleteModalOpen(false);
    };

    // Save (for both Create & Edit)
    const handleSave = (updatedArtemia) => {
        if (selectedArtemia) {
            // Update existing
            setArtemiaData((prev) =>
                prev.map((item) => (item.id === updatedArtemia.id ? updatedArtemia : item))
            );
        } else {
            // Add new
            setArtemiaData((prev) => [...prev, { id: prev.length + 1, ...updatedArtemia }]);
        }
        setIsModalOpen(false);
    };

    return (
        <AppLayout title="Artemia Monitoring">
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
                                <th className="px-4 py-2 text-left">Artemia Brand</th>
                                <th className="px-4 py-2 text-left">Tank Number</th>
                                <th className="px-4 py-2 text-left">Salinity</th>
                                <th className="px-4 py-2 text-center">View</th>
                                <th className="px-4 py-2 text-center">Delete</th>
                                <th className="px-4 py-2 text-center">Update</th>
                            </tr>
                        </thead>
                        <tbody>
                            {artemiaData.map((item, index) => (
                                <tr key={item.id} className={`border-b ${index % 2 === 0 ? "bg-gray-100" : ""}`}>
                                    <td className="px-4 py-2">
                                        <input type="checkbox" />
                                    </td>
                                    <td className="px-4 py-2">{item.date}</td>
                                    <td className="px-4 py-2">{item.artemiaBrand}</td>
                                    <td className="px-4 py-2">{item.tankNumber}</td>
                                    <td className="px-4 py-2">{item.salinity}</td>
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
                    title="Edit Indoor Algae"
                    form={<ArtemiaMonitoringForm initialData={selectedArtemia} onSubmit={handleSave} onCancel={() => setIsModalOpen(false)} />}
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

export default ArtemiaMonitoringView
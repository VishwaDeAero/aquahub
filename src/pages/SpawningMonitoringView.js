import React, { useState } from 'react'
import IconNavigation from '../components/IconNavigation';
import AppLayout from '../components/layouts/AppLayout';
import FormModal from '../components/modals/FormModal';
import ConfirmationModal from '../components/modals/ConfirmationModal';
import SpawningMonitoringForm from '../components/forms/SpawningMonitoringForm';

function SpawningMonitoringView() {

    const [spawningData, setSpawningData] = useState([
        { id: 1, date: "11.09.2023", tankNumber: "01", spawnerNumber: "222", broodstock: "Broodstock A" },
        { id: 2, date: "12.09.2023", tankNumber: "02", spawnerNumber: "333", broodstock: "Broodstock B" },
        { id: 3, date: "13.09.2023", tankNumber: "03", spawnerNumber: "444", broodstock: "Broodstock C" },
    ]);

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

    // Confirm Delete
    const confirmDelete = () => {
        setSpawningData(spawningData.filter((item) => item.id !== selectedSpawning));
        setIsDeleteModalOpen(false);
    };

    // Save (for both Create & Edit)
    const handleSave = (updatedSpawning) => {
        if (selectedSpawning) {
            // Update existing
            setSpawningData((prev) =>
                prev.map((item) => (item.id === updatedSpawning.id ? updatedSpawning : item))
            );
        } else {
            // Add new
            setSpawningData((prev) => [...prev, { id: prev.length + 1, ...updatedSpawning }]);
        }
        setIsModalOpen(false);
    };

    return (
        <AppLayout title="Spawning Monitoring">
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
                                <tr key={item.id} className={`border-b ${index % 2 === 0 ? "bg-gray-100" : ""}`}>
                                    <td className="px-4 py-2">
                                        <input type="checkbox" />
                                    </td>
                                    <td className="px-4 py-2">{item.date}</td>
                                    <td className="px-4 py-2">{item.broodstock}</td>
                                    <td className="px-4 py-2">{item.tankNumber}</td>
                                    <td className="px-4 py-2 text-center">{item.spawnerNumber}</td>
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
                    title="Edit Spawning"
                    form={<SpawningMonitoringForm initialData={selectedSpawning} onSubmit={handleSave} onCancel={() => setIsModalOpen(false)} />}
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

export default SpawningMonitoringView
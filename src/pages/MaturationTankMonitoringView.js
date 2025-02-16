import React, { useState } from 'react'
import MaturationTankMonitoringForm from '../components/forms/MaturationTankMonitoringForm';
import FormModal from '../components/modals/FormModal';
import ConfirmationModal from '../components/modals/ConfirmationModal';
import AppLayout from '../components/layouts/AppLayout';
import IconNavigation from '../components/IconNavigation';

function MaturationTankMonitoringView() {

    const [maturationTankData, setMaturationTankData] = useState([
        { id: 1, date: "11.09.2023", feedTime: "06:45", area: "Puttalam", broodstock: "Broodstock A" },
        { id: 2, date: "12.09.2023", feedTime: "06:25", area: "Nugegoda", broodstock: "Broodstock B" },
        { id: 3, date: "13.09.2023", feedTime: "08:45", area: "Galle", broodstock: "Broodstock C" },
    ]);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [selectedMaturationTank, setSelectedMaturationTank] = useState(null);

    // Open Edit Modal
    const handleEdit = (maturationTank) => {
        setSelectedMaturationTank(maturationTank);
        setIsModalOpen(true);
    };

    // Open Delete Confirmation Modal
    const handleDelete = (id) => {
        setSelectedMaturationTank(id);
        setIsDeleteModalOpen(true);
    };

    // Confirm Delete
    const confirmDelete = () => {
        setMaturationTankData(maturationTankData.filter((item) => item.id !== selectedMaturationTank));
        setIsDeleteModalOpen(false);
    };

    // Save (for both Create & Edit)
    const handleSave = (updatedMaturationTank) => {
        if (selectedMaturationTank) {
            // Update existing
            setMaturationTankData((prev) =>
                prev.map((item) => (item.id === updatedMaturationTank.id ? updatedMaturationTank : item))
            );
        } else {
            // Add new
            setMaturationTankData((prev) => [...prev, { id: prev.length + 1, ...updatedMaturationTank }]);
        }
        setIsModalOpen(false);
    };

    return (
        <AppLayout title="Maturation Tank Monitoring">
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
                                <th className="px-4 py-2 text-left">Stock Date</th>
                                <th className="px-4 py-2 text-left">Broodstock</th>
                                <th className="px-4 py-2 text-left">Feed Time</th>
                                <th className="px-4 py-2 text-center">Area</th>
                                <th className="px-4 py-2 text-center">View</th>
                                <th className="px-4 py-2 text-center">Delete</th>
                                <th className="px-4 py-2 text-center">Update</th>
                            </tr>
                        </thead>
                        <tbody>
                            {maturationTankData.map((item, index) => (
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
                    title="Edit Maturation Tank"
                    form={<MaturationTankMonitoringForm initialData={selectedMaturationTank} onSubmit={handleSave} onCancel={() => setIsModalOpen(false)} />}
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

export default MaturationTankMonitoringView
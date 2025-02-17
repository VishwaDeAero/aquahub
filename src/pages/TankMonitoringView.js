import React, { useState } from 'react'
import AppLayout from '../components/layouts/AppLayout';
import IconNavigation from '../components/IconNavigation';
import TankMonitoringForm from '../components/forms/TankMonitoringForm';
import FormModal from '../components/modals/FormModal';
import ConfirmationModal from '../components/modals/ConfirmationModal';

function TankMonitoringView() {

    const [tankData, setTankData] = useState([
        { id: 1, date: "11.09.2023", stockAmount: "2000", area: "Puttalam", broodstock: "Broodstock A" },
        { id: 2, date: "12.09.2023", stockAmount: "3000", area: "Nugegoda", broodstock: "Broodstock B" },
        { id: 3, date: "13.09.2023", stockAmount: "5000", area: "Galle", broodstock: "Broodstock C" },
    ]);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [selectedTank, setSelectedTank] = useState(null);

    // Open Edit Modal
    const handleEdit = (tank) => {
        setSelectedTank(tank);
        setIsModalOpen(true);
    };

    // Open Delete Confirmation Modal
    const handleDelete = (id) => {
        setSelectedTank(id);
        setIsDeleteModalOpen(true);
    };

    // Confirm Delete
    const confirmDelete = () => {
        setTankData(tankData.filter((item) => item.id !== selectedTank));
        setIsDeleteModalOpen(false);
    };

    // Save (for both Create & Edit)
    const handleSave = (updatedTank) => {
        if (selectedTank) {
            // Update existing
            setTankData((prev) =>
                prev.map((item) => (item.id === updatedTank.id ? updatedTank : item))
            );
        } else {
            // Add new
            setTankData((prev) => [...prev, { id: prev.length + 1, ...updatedTank }]);
        }
        setIsModalOpen(false);
    };

    return (
        <AppLayout title="Tank Monitoring">
            {/* Scrollable Icon Navigation */}
            <IconNavigation onSelect={() => { }} />

            <div className="p-6 border rounded-md bg-white shadow-sm">
                {/* Tank Table */}
                <div className="bg-white shadow-md rounded-lg overflow-auto">
                    <table className="w-full table-auto border-collapse">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="px-4 py-2">
                                </th>
                                <th className="px-4 py-2 text-left">Date</th>
                                <th className="px-4 py-2 text-left">Broodstock</th>
                                <th className="px-4 py-2 text-left">Area</th>
                                <th className="px-4 py-2 text-left">Stock Amount</th>
                                <th className="px-4 py-2 text-center">View</th>
                                <th className="px-4 py-2 text-center">Delete</th>
                                <th className="px-4 py-2 text-center">Update</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tankData.map((item, index) => (
                                <tr key={item.id} className={`border-b ${index % 2 === 0 ? "bg-gray-100" : ""}`}>
                                    <td className="px-4 py-2">
                                        <input type="checkbox" />
                                    </td>
                                    <td className="px-4 py-2">{item.date}</td>
                                    <td className="px-4 py-2">{item.broodstock}</td>
                                    <td className="px-4 py-2">{item.area}</td>
                                    <td className="px-4 py-2">{item.stockAmount}</td>
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
                    title="Edit Tank"
                    form={<TankMonitoringForm initialData={selectedTank} onSubmit={handleSave} onCancel={() => setIsModalOpen(false)} />}
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

export default TankMonitoringView
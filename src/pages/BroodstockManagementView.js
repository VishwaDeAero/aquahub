import React, { useState } from 'react'
import AppLayout from '../components/layouts/AppLayout'
import IconNavigation from '../components/IconNavigation';
import ConfirmationModal from '../components/modals/ConfirmationModal';
import FormModal from '../components/modals/FormModal';
import BroodstockManagementForm from '../components/forms/BroodstockManagementForm';

function BroodstockManagementView() {
    const [broodstockData, setBroodstockData] = useState([
        { id: 1, date: "11.09.2023", tankNumber: "01", area: "Puttalama", company: "Company A" },
        { id: 2, date: "12.09.2023", tankNumber: "02", area: "Chilaw", company: "Company B" },
        { id: 3, date: "13.09.2023", tankNumber: "03", area: "Negombo", company: "Company C" },
    ]);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [selectedBroodstock, setSelectedBroodstock] = useState(null);

    // Open Edit Modal
    const handleEdit = (broodstock) => {
        setSelectedBroodstock(broodstock);
        setIsModalOpen(true);
    };

    // Open Delete Confirmation Modal
    const handleDelete = (id) => {
        setSelectedBroodstock(id);
        setIsDeleteModalOpen(true);
    };

    // Confirm Delete
    const confirmDelete = () => {
        setBroodstockData(broodstockData.filter((item) => item.id !== selectedBroodstock));
        setIsDeleteModalOpen(false);
    };

    // Save (for both Create & Edit)
    const handleSave = (updatedBroodstock) => {
        if (selectedBroodstock) {
            // Update existing
            setBroodstockData((prev) =>
                prev.map((item) => (item.id === updatedBroodstock.id ? updatedBroodstock : item))
            );
        } else {
            // Add new
            setBroodstockData((prev) => [...prev, { id: prev.length + 1, ...updatedBroodstock }]);
        }
        setIsModalOpen(false);
    };

    return (
        <AppLayout title="Broodstock Management">
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
                                <th className="px-4 py-2 text-left">Tank Number</th>
                                <th className="px-4 py-2 text-left">Area or Country</th>
                                <th className="px-4 py-2 text-left">Company</th>
                                <th className="px-4 py-2 text-center">View</th>
                                <th className="px-4 py-2 text-center">Delete</th>
                                <th className="px-4 py-2 text-center">Update</th>
                            </tr>
                        </thead>
                        <tbody>
                            {broodstockData.map((item, index) => (
                                <tr key={item.id} className={`border-b ${index % 2 === 0 ? "bg-gray-100" : ""}`}>
                                    <td className="px-4 py-2">
                                        <input type="checkbox" />
                                    </td>
                                    <td className="px-4 py-2">{item.date}</td>
                                    <td className="px-4 py-2">{item.tankNumber}</td>
                                    <td className="px-4 py-2">{item.area}</td>
                                    <td className="px-4 py-2">{item.company}</td>
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
                    title="Edit Broodstock"
                    form={<BroodstockManagementForm initialData={selectedBroodstock} onSubmit={handleSave} onCancel={() => setIsModalOpen(false)} />}
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

export default BroodstockManagementView
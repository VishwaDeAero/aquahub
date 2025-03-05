import React, { useState, useEffect } from 'react'
import AppLayout from '../components/layouts/AppLayout'
import IconNavigation from '../components/IconNavigation';
import ConfirmationModal from '../components/modals/ConfirmationModal';
import FormModal from '../components/modals/FormModal';
import BroodstockManagementForm from '../components/forms/BroodstockManagementForm';
import axios from "axios";
import { format } from 'date-fns';

function BroodstockManagementView() {
    const [broodstockData, setBroodstockData] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [selectedBroodstock, setSelectedBroodstock] = useState(null);

    // Fetch data on mount
    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem("authToken");
                const response = await axios.get("http://localhost:5001/api/broodstocks", {
                    headers: { Authorization: `Bearer ${token}` },
                });
                setBroodstockData(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);

    // Open Edit Modal
    const handleEdit = (broodstock) => {
        setSelectedBroodstock(broodstock);
        setIsModalOpen(true);
    };

    // Open Add Modal
    const handleAdd = () => {
        setSelectedBroodstock(null);
        setIsModalOpen(true);
    };

    // Open Delete Confirmation Modal
    const handleDelete = (id) => {
        setSelectedBroodstock(id);
        setIsDeleteModalOpen(true);
    };

    // Confirm Delete
    const confirmDelete = async () => {
        try {
            const token = localStorage.getItem("authToken");
            await axios.delete(`http://localhost:5001/api/broodstocks/${selectedBroodstock}`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            setBroodstockData(prev => prev.filter(item => item._id !== selectedBroodstock));
            setIsDeleteModalOpen(false);
            setSelectedBroodstock(null);
        } catch (error) {
            console.error("Error deleting:", error);
        }
    };

    // Handle Save/Update
    const handleSave = async (data) => {
        try {
            const token = localStorage.getItem("authToken");
            if (selectedBroodstock?._id) {
                await axios.put(
                    `http://localhost:5001/api/broodstocks/${selectedBroodstock._id}`,
                    data,
                    { headers: { Authorization: `Bearer ${token}` } }
                );
            } else {
                await axios.post(
                    "http://localhost:5001/api/broodstocks",
                    data,
                    { headers: { Authorization: `Bearer ${token}` } }
                );
            }

            // Refresh data
            const response = await axios.get("http://localhost:5001/api/broodstocks", {
                headers: { Authorization: `Bearer ${token}` },
            });
            setBroodstockData(response.data);
            
            setIsModalOpen(false);
            setSelectedBroodstock(null);
        } catch (error) {
            console.error("Error saving:", error);
        }
    };

    return (
        <AppLayout title="Broodstock Management">
            <IconNavigation onSelect={() => { }} />
            
            <div className="p-6 border rounded-md bg-white shadow-sm">
                <div className="mb-4 flex justify-end">
                    <button 
                        onClick={handleAdd}
                        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                    >
                        Add New Broodstock
                    </button>
                </div>

                <div className="bg-white shadow-md rounded-lg overflow-auto">
                    <table className="w-full table-auto border-collapse">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="px-4 py-2"></th>
                                <th className="px-4 py-2 text-left">Import Date</th>
                                <th className="px-4 py-2 text-left">Tank No</th>
                                <th className="px-4 py-2 text-left">Country</th>
                                <th className="px-4 py-2 text-left">Company</th>
                                <th className="px-4 py-2 text-center">View</th>
                                <th className="px-4 py-2 text-center">Delete</th>
                                <th className="px-4 py-2 text-center">Update</th>
                            </tr>
                        </thead>
                        <tbody>
                            {broodstockData.map((item, index) => (
                                <tr key={item._id} className={`border-b ${index % 2 === 0 ? "bg-gray-100" : ""}`}>
                                    <td className="px-4 py-2">
                                        <input type="checkbox" />
                                    </td>
                                    <td className="px-4 py-2">
                                        {format(new Date(item.dateOfImportation), 'MM/dd/yyyy')}
                                    </td>
                                    <td className="px-4 py-2">{item.tankNo}</td>
                                    <td className="px-4 py-2">{item.countryImported}</td>
                                    <td className="px-4 py-2">{item.companyImported}</td>
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

                <FormModal
                    isOpen={isModalOpen}
                    title={selectedBroodstock ? "Edit Broodstock" : "Add New Broodstock"}
                    form={
                        <BroodstockManagementForm 
                            initialData={selectedBroodstock} 
                            onSubmit={handleSave} 
                            onCancel={() => {
                                setIsModalOpen(false);
                                setSelectedBroodstock(null);
                            }} 
                        />
                    }
                    onClose={() => {
                        setIsModalOpen(false);
                        setSelectedBroodstock(null);
                    }}
                />

                <ConfirmationModal
                    isOpen={isDeleteModalOpen}
                    message="Are you sure you want to delete this entry?"
                    onClose={() => {
                        setIsDeleteModalOpen(false);
                        setSelectedBroodstock(null);
                    }}
                    onConfirm={confirmDelete}
                />
            </div>
        </AppLayout>
    )
}

export default BroodstockManagementView
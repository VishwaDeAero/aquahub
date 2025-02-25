import React from "react";

const StockIn = () => {
    return (
        <div className="bg-white p-6 rounded-lg">
            <form className="grid grid-cols-6 sm:grid-cols-12 gap-2 sm:gap-4 md:gap-6 space-y-4">
                {/* Item Type */}
                <div className="col-span-4 flex items-center">
                    <label className="block font-medium text-gray-700">Item Type</label>
                </div>
                <div className="col-span-8">
                    <select className="mt-1 block w-full md:w-1/2 border p-2.5 rounded-md border-gray-300 bg-gray-100 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                        <option>Select Type</option>
                        <option>Type 1</option>
                        <option>Type 2</option>
                    </select>
                </div>

                {/* Item Status */}
                <div className="col-span-4 flex items-center">
                    <label className="block font-medium text-gray-700">Item Status</label>
                </div>
                <div className="col-span-8">
                    <div className="grid gride-cols-6 sm:grid-cols-12 gap-4">
                        {/* Checkboxes */}
                        <div className="col-span-3 flex flex-wrap gap-2 sm:flex-col sm:space-y-2">
                            <label className="flex items-center">
                                <input type="checkbox" className="form-checkbox" />
                                <span className="ml-2">Liquid</span>
                            </label>
                            <label className="flex items-center">
                                <input type="checkbox" className="form-checkbox" />
                                <span className="ml-2">Powder</span>
                            </label>
                            <label className="flex items-center">
                                <input type="checkbox" className="form-checkbox" />
                                <span className="ml-2">Packet</span>
                            </label>
                            <label className="flex items-center">
                                <input type="checkbox" className="form-checkbox" />
                                <span className="ml-2">Bottle</span>
                            </label>
                        </div>

                        {/* Volume and Weight */}
                        <div className="col-span-6 flex flex-col space-y-2 sm:space-y-0">
                            <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-2 md:mb-4">
                                <label className="font-medium text-gray-700">Volume</label>
                                <input
                                    type="text"
                                    className="w-full sm:w-1/2 border p-2.5 rounded-md border-gray-300 bg-gray-100 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                    placeholder="Enter volume"
                                />
                            </div>
                            <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-2 md:mb-4">
                                <label className="font-medium text-gray-700">Weight</label>
                                <input
                                    type="text"
                                    className="w-full sm:w-1/2 border p-2.5 rounded-md border-gray-300 bg-gray-100 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                    placeholder="Enter weight"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Brand Name */}
                <div className="col-span-4 flex items-center">
                    <label className="block font-medium text-gray-700">Brand Name</label>
                </div>
                <div className="col-span-8">
                    <input
                        type="text"
                        className="mt-1 block w-full md:w-1/2 border p-2.5 rounded-md border-gray-300 bg-gray-100 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        placeholder="Enter brand name"
                    />
                </div>

                {/* Price */}
                <div className="col-span-4 flex items-center">
                    <label className="block font-medium text-gray-700">Price</label>
                </div>
                <div className="col-span-8">
                    <input
                        type="number"
                        className="mt-1 block w-full md:w-1/2 border p-2.5 rounded-md border-gray-300 bg-gray-100 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        placeholder="Enter price"
                    />
                </div>

                {/* Order Date */}
                <div className="col-span-4 flex items-center">
                    <label className="block font-medium text-gray-700">Order Date</label>
                </div>
                <div className="col-span-8">
                    <input
                        type="date"
                        className="mt-1 block w-full md:w-1/2 border p-2.5 rounded-md border-gray-300 bg-gray-100 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                </div>

                {/* Item Code */}
                <div className="col-span-4 flex items-center">
                    <label className="block font-medium text-gray-700">Item Code</label>
                </div>
                <div className="col-span-8">
                    <input
                        type="text"
                        className="mt-1 block w-full md:w-1/2 border p-2.5 rounded-md border-gray-300 bg-gray-100 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        placeholder="Enter Item Code"
                    />
                </div>

                {/* Batch No */}
                <div className="col-span-4 flex items-center">
                    <label className="block font-medium text-gray-700">Batch No</label>
                </div>
                <div className="col-span-8">
                    <input
                        type="text"
                        className="mt-1 block w-full md:w-1/2 border p-2.5 rounded-md border-gray-300 bg-gray-100 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        placeholder="Enter Batch No"
                    />
                </div>

                {/* Manufacture Date */}
                <div className="col-span-4 flex items-center">
                    <label className="block font-medium text-gray-700">Manufacture Date</label>
                </div>
                <div className="col-span-8">
                    <input
                        type="date"
                        className="mt-1 block w-full md:w-1/2 border p-2.5 rounded-md border-gray-300 bg-gray-100 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                </div>

                {/* Expiry Date */}
                <div className="col-span-4 flex items-center">
                    <label className="block font-medium text-gray-700">Expiry Date</label>
                </div>
                <div className="col-span-8">
                    <input
                        type="date"
                        className="mt-1 block w-full md:w-1/2 border p-2.5 rounded-md border-gray-300 bg-gray-100 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                </div>

                {/* Quantity */}
                <div className="col-span-4 flex items-center">
                    <label className="block font-medium text-gray-700">Quantity</label>
                </div>
                <div className="col-span-8">
                    <input
                        type="number"
                        className="mt-1 block w-full md:w-1/2 border p-2.5 rounded-md border-gray-300 bg-gray-100 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        placeholder="Enter quantity"
                    />
                </div>

                {/* Re-Order Quantity */}
                <div className="col-span-4 flex items-center">
                    <label className="block font-medium text-gray-700">Re-Order Quantity</label>
                </div>
                <div className="col-span-8">
                    <input
                        type="number"
                        className="mt-1 block w-full md:w-1/2 border p-2.5 rounded-md border-gray-300 bg-gray-100 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        placeholder="Enter quantity"
                    />
                </div>

                {/* Stock Status */}
                <div className="col-span-4 flex items-center">
                    <label className="block font-medium text-gray-700">Stock Status</label>
                </div>
                <div className="col-span-8">
                    <div className="flex items-center space-x-4">
                        <label className="flex items-center">
                            <input type="radio" name="stockStatus" className="form-radio" />
                            <span className="ml-2">In Stock</span>
                        </label>
                        <label className="flex items-center">
                            <input type="radio" name="stockStatus" className="form-radio" />
                            <span className="ml-2">Out of Stock</span>
                        </label>
                    </div>
                </div>
            </form>

            {/* Buttons */}
            <div className="flex justify-end mt-6 space-x-4">
                <button className="px-4 py-2 w-1/2 md:w-1/6 border border-sky-900 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300">
                    Clear
                </button>
                <button className="px-4 py-2 w-1/2 md:w-1/6 bg-darkblue text-white rounded-lg hover:bg-blue-900">
                    Save
                </button>
            </div>
        </div>
    );
};

export default StockIn;
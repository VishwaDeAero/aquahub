import React from "react";

const InputField = ({ type, placeholder, value, onChange, icon }) => {
  return (
    <div className="flex items-center border-2 bg-gray-200 rounded-full px-4 py-3 w-full">
      {/* Icon */}
      <i className={`fas ${icon} text-darkblue mr-3`}></i>
      {/* Input Field */}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="bg-transparent outline-none w-full text-gray-700"
      />
    </div>
  );
};

export default InputField;
import React from "react";

const Card = ({ title, className, children }) => {
    return (
        <div className={`bg-white shadow-md rounded-lg p-4 ${className || ""}`}>
            <h2 className="font-bold text-lg mb-4">{title}</h2>
            {children}
        </div>
    );
};

export default Card;
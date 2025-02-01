import React from "react";
import Sidebar from "../Sidebar";
import Topbar from "../Topbar";

const AppLayout = ({ children }) => {
    return (
        <div className="h-screen flex">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <div className="flex flex-col flex-1 overflow-hidden">
                {/* Topbar */}
                <Topbar />

                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-auto p-4 bg-slate-100">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default AppLayout;
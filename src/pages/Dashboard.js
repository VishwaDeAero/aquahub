import React from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import Card from "../components/Card";
import GaugeChart from "../components/charts/GaugeChart";
import LineChart from "../components/charts/LineChart";
import PieChart from "../components/charts/PieChart";
import AppLayout from "../components/layouts/AppLayout";

const Dashboard = () => {
    const lineData = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
            {
                label: "Disease Overview",
                data: [10, 20, 15, 30, 40, 25],
                borderColor: "blue",
                backgroundColor: "rgba(0, 0, 255, 0.1)",
            },
        ],
    };

    const pieData = {
        labels: ["Harvest Amount", "Sale Amount"],
        datasets: [
            {
                data: [35, 65],
                backgroundColor: ["#FFA500", "#0056D2"],
            },
        ],
    };

    return (
        <AppLayout title="Dashboard">
            <div className="grid grid-cols-6 gap-4">
                <div className="col-span-4 grid grid-cols-3 gap-4">
                    <Card title="Water Quality" className="col-span-3">
                        <div className="grid grid-cols-3 gap-2">
                            <div><GaugeChart label="PH" value="7.5" maxValue="10" /></div>
                            <div><GaugeChart label="Salinity" value="35" maxValue="100" /></div>
                            <div><GaugeChart label="Alkalinity" value="120" maxValue="200" /></div>
                            <div><GaugeChart label="Chlorine" value="7.5" maxValue="10" /></div>
                            <div><GaugeChart label="Ammonia" value="35" maxValue="100" /></div>
                            <div><GaugeChart label="DO" value="120" maxValue="200" /></div>
                        </div>
                    </Card>
                    <Card title="Monthly Broodstock" className="">
                        <PieChart data={pieData} />
                    </Card>
                    <Card title="Monthly Disease Overview" className="col-span-4">
                        <LineChart data={lineData} />
                    </Card>
                </div>
                <div className="col-span-2">
                    <Card title="Monthly Disease Overview" className="mb-4">
                        <LineChart data={lineData} />
                    </Card>
                    <Card title="Monthly Disease Overview" className="mb-4">
                        <LineChart data={lineData} />
                    </Card>
                    <Card title="Monthly Broodstock" className="">
                        <PieChart data={pieData} />
                    </Card>
                </div>
            </div>
        </AppLayout>
    );
};

export default Dashboard;
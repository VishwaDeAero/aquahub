import React from "react";
import Card from "../components/Card";
import GaugeChart from "../components/charts/GaugeChart";
import LineChart from "../components/charts/LineChart";
import PieChart from "../components/charts/PieChart";
import AppLayout from "../components/layouts/AppLayout";
import DoghnutChart from "../components/charts/DoghnutChart";

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

    const monthlyBroodstock = {
        title: "Monthly Broodstock",
        maxValue: 500000,
        labels: ['Live', 'Dead'],
        values: [65, 35],
        colors: ["#3F3DFF", "#E5DAF9"]
    }

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
            <div className="grid grid-cols-1 md:grid-cols-7 md:gap-3 mb-4 md:mb-0">
                <div className="col-span-5 grid grid-cols-1 md:grid-cols-3 md:gap-4">
                    {/* Left Section (Water Quality) */}
                    <div className="col-span-2 flex flex-col mb-4">
                        <Card title="Water Quality" className="h-full flex flex-col">
                            <div className="grid grid-cols-3 gap-2 flex-grow">
                                <div><GaugeChart label="PH" value="7.5" maxValue="10" color="#006494" /></div>
                                <div><GaugeChart label="Salinity" value="35" maxValue="100" color="#1B98E0" /></div>
                                <div><GaugeChart label="Alkalinity" value="150" maxValue="200" color="#13293D" /></div>
                                <div><GaugeChart label="Chlorine" value="10" maxValue="10" color="#247BA0" /></div>
                                <div><GaugeChart label="Ammonia" value="1" maxValue="100" color="#006494" /></div>
                                <div><GaugeChart label="DO" value="5" maxValue="200" color="#1B98E0" /></div>
                            </div>
                        </Card>
                    </div>

                    {/* Middle Section (Monthly Broodstock) */}
                    <div className="flex flex-col mb-4">
                        <Card title="Monthly Broodstock" className="h-full justify-center text-center">
                            <DoghnutChart
                                title={monthlyBroodstock.title}
                                maxValue={monthlyBroodstock.maxValue}
                                labels={monthlyBroodstock.labels}
                                values={monthlyBroodstock.values}
                                colors={monthlyBroodstock.colors}
                            />
                        </Card>
                    </div>
                </div>
                <div className="col-span-2 flex flex-col mb-4 gap-2 md:gap-4">
                    <Card title="Mortality (Male)" className="h-full">
                        <LineChart data={lineData} />
                    </Card>
                    <Card title="Mortality (Female)" className=" h-full">
                        <LineChart data={lineData} />
                    </Card>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-7 gap-2 md:gap-3 mb-4">
                <div className="col-span-5">
                    <Card title="Monthly Disease Overview" className="h-full">
                        <LineChart data={lineData} />
                    </Card>
                </div>
                <div className="col-span-2">
                    <Card title="Harvest Amount vs Sale Amount" className="flex flex-col h-full">
                        <PieChart data={pieData} />
                    </Card>
                </div>
            </div>
        </AppLayout>
    );
};

export default Dashboard;
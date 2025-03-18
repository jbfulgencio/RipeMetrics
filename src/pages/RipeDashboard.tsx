import CustomerMetrics from "../components/CustomerMetrics.tsx";
import ChartOne from "../components/charts/ChartOne.tsx";
import DashboardFilter from "../components/DashboardFilter.tsx";
import ChartTwo from "../components/charts/ChartTwo.tsx";
import {useState} from "react";
import data from "../data/Metrics.tsx";

export default function RipeDashboard() {

    const [customerType, setCustomerType] = useState('All');

    return (
        <div className="grid grid-cols-12 gap-4 md:gap-12">
            <div className="col-span-12 space-y-12">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-4 md:gap-4">
                    <DashboardFilter setCustomerType={setCustomerType} />{customerType}
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-4 md:gap-4">
                    <CustomerMetrics metrics={data[customerType][0]} customerType={customerType} />
                    <CustomerMetrics metrics={data[customerType][1]} customerType={customerType}/>
                    <CustomerMetrics metrics={data[customerType][2]} customerType={customerType}/>
                    <CustomerMetrics metrics={data[customerType][3]} customerType={customerType}/>
                </div>
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:gap-4">
                    <ChartOne/>
                    <ChartTwo/>
                </div>
            </div>
        </div>
    );
}
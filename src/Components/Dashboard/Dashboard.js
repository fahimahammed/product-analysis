import React from 'react';
import BarCharts from '../Charts/BarCharts';
import DataComposedChart from '../Charts/DataComposedChart';
import LineCharts from '../Charts/LineCharts';
import TwoLevelPieChart from '../Charts/TwoLevelPieChart';

const Dashboard = () => {
    return (
        <div className="container mx-auto">
            <h1 className="text-4xl text-center mb-10">Dashboard</h1>
            <div className='flex flex-wrap space-x-10'>
                <LineCharts/>
                <TwoLevelPieChart/>
                <BarCharts/>
                <DataComposedChart/>
            </div>
        </div>
    );
};

export default Dashboard;
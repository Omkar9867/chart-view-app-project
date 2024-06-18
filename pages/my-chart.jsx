'use client';
import 'next/dynamic';
import NavBar from '../components/NavBar';
import Chart from "../components/ChartComponent.jsx";

const MyChartPage = () => {
    const data = "/api/grpc-data"
    const data2 = "/api/grpc-data2"
    return (
        <div>
            <NavBar />
            <Chart title={'My Chart 1'} chartData={data} />
            <Chart title={'MY CHART 2'} chartData={data2} />
        </div>
    );
};

export default MyChartPage;



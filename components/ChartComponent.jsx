import { useEffect, useState, useRef } from "react";
const { loadPackageDefinition, credentials } = require('@grpc/grpc-js');
const { loadSync } = require('@grpc/proto-loader');
const grpc = require('@grpc/grpc-js');
const path = require('path');
require('dotenv').config();

const Chart = (props) => {
    const [chartData, setChartData] = useState(null);
    const chartRef = useRef(null);
    const [ChartComponents, setChartComponents] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const PROTO_PATH = path.resolve(process.env.PROTO_PATH);
                const packageDefinition = loadSync(PROTO_PATH, {
                    keepCase: true,
                    longs: String,
                    enums: String,
                    defaults: true,
                    oneofs: true,
                });

                // Load the gRPC package definition
                const protoDescriptor = loadPackageDefinition(packageDefinition);
                const timeSeriesProto = protoDescriptor.timeSeries;

                // Create gRPC client
                const grpcClient = new timeSeriesProto.TimeSeriesService('localhost:50051', credentials.createInsecure());

                const getData = () => {
                    return new Promise((resolve, reject) => {
                        const call = grpcClient.StreamTimeSeriesData({ start_time: '2024-01-01T00:00:00Z', end_time: '2024-12-31T23:59:59Z' });

                        const data = {
                            timestamps: [],
                            values: [],
                        };

                        call.on('data', (dataPoint) => {
                            data.timestamps.push(dataPoint.timestamp);
                            data.values.push(dataPoint.value);
                        });

                        call.on('end', () => {
                            resolve(data);
                        });

                        call.on('error', (error) => {
                            reject(error);
                        });
                    });
                };

                const mainData = await getData(); // Fetch real data using gRPC client

                // Ensure that mainData is an object with 'timestamps' and 'values' arrays
                if (!mainData || !Array.isArray(mainData.timestamps) || !Array.isArray(mainData.values)) {
                    throw new Error('Invalid data format');
                }

                // Create a combined array of timestamp and value objects
                const combinedData = mainData.timestamps.map((timestamp, index) => ({
                    timestamp: new Date(timestamp),
                    value: mainData.values[index],
                }));

                // Filter data based on the timestamp
                const filterDate = new Date('2024-04-01T12:00:00Z');
                const filteredData = combinedData.filter(item => item.timestamp <= filterDate);

                // Format the response
                const data = {
                    timestamps: filteredData.map(item => item.timestamp.toISOString()),
                    values: filteredData.map(item => item.value),
                };
                setChartData(data);
            } catch (error) {
                console.error('Error fetching gRPC data:', error);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        const loadChartComponents = async () => {
            const { Line } = await import('react-chartjs-2');
            const { Chart, registerables } = await import('chart.js');
            const zoomPlugin = await import('chartjs-plugin-zoom');
            await import('hammerjs');

            Chart.register(...registerables);
            Chart.register(zoomPlugin.default);

            setChartComponents({ Line, Chart });
        };

        loadChartComponents();
    }, []);

    const options = {
        responsive: true,
        plugins: {
            zoom: {
                pan: {
                    enabled: true,
                    mode: "xy",
                },
                zoom: {
                    drag: {
                        enabled: true,
                    },
                    pinch: {
                        enabled: true,
                    },
                    mode: "xy",
                    speed: 0.1,
                },
            },
        },
    };

    const handleZoomOut = () => {
        const chart = chartRef.current;
        if (chart) {
            chart.resetZoom();
        }
    };

    return (
        <div>
            {isLoading && <div>Loading....</div>}
            <h1>{props.title}</h1>
            <div className="chart-container">
                {ChartComponents && chartData && (
                    <div className="chart-wrapper">
                        <ChartComponents.Line ref={chartRef} data={chartData} options={options} />
                        <button className="zoom-out-button" onClick={handleZoomOut}>
                            <img src="zoom-out.png" alt="Zoom Out" />
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Chart;


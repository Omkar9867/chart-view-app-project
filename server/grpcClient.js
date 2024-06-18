const { loadPackageDefinition, credentials } = require('@grpc/grpc-js');
const { loadSync } = require('@grpc/proto-loader');
const path = require('path');
require('dotenv').config();

// Load the protobuf file using the environment variable
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
console.log("Proto---", protoDescriptor)
const timeSeriesProto = protoDescriptor.timeSeries;

// Create gRPC client
const grpcClient = new timeSeriesProto.TimeSeriesService('localhost:50051', credentials.createInsecure());

// Define a function to fetch data from gRPC server
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

module.exports = { getData };

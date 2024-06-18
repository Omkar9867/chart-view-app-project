const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const path = require('path');

const PROTO_PATH = path.join(__dirname, 'service.proto');
const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true
});

const timeSeriesProto = grpc.loadPackageDefinition(packageDefinition).timeSeries;

const dataPoints = [
    { timestamp: '2024-01-01T12:00:00Z', value: 10.5 },
    { timestamp: '2024-02-01T12:05:00Z', value: 11.2 },
    { timestamp: '2024-02-01T12:05:00Z', value: 9.2 },
    { timestamp: '2024-02-01T12:05:00Z', value: 4.2 },
    { timestamp: '2024-03-01T12:05:00Z', value: 7.2 },
    { timestamp: '2024-03-01T12:05:00Z', value: 15.2 },
    { timestamp: '2024-03-01T12:05:00Z', value: 6.2 },
    { timestamp: '2024-04-01T12:05:00Z', value: 8.2 },
    { timestamp: '2024-04-01T12:05:00Z', value: 10.2 },
    { timestamp: '2024-05-01T12:05:00Z', value: 5.2 },
    { timestamp: '2024-06-01T12:05:00Z', value: 7.2 },
    { timestamp: '2024-06-01T12:06:00Z', value: 9.2 },
    { timestamp: '2024-06-01T12:06:00Z', value: 11.2 },
    { timestamp: '2024-07-01T12:06:00Z', value: 10.2 },
    { timestamp: '2024-07-01T12:06:00Z', value: 5.2 },
    { timestamp: '2024-07-01T12:06:00Z', value: 8.2 },
    // Add more data points as needed
];

function streamTimeSeriesData(call) {
    const { start_time, end_time } = call.request;
    console.log(`Received request for time-series data from ${start_time} to ${end_time}`);

    // Filter dataPoints based on start_time and end_time
    dataPoints.forEach(dataPoint => {
        if (dataPoint.timestamp >= start_time && dataPoint.timestamp <= end_time) {
            call.write(dataPoint);
        }
    });

    call.end();
}

function startGRPCServer() {
    const server = new grpc.Server();

    server.addService(timeSeriesProto.TimeSeriesService.service, {
        StreamTimeSeriesData: streamTimeSeriesData,
    });

    server.bindAsync('localhost:50051', grpc.ServerCredentials.createInsecure(), (err, port) => {
        if (err) {
            console.error(`Server bind failed: ${err}`);
        } else {
            console.log(`gRPC Server running at http://localhost:${port}`);
            server.start();
        }
    });
}

startGRPCServer();
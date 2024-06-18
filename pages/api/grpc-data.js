const grpcClient = require('../../server/grpcClient');

export default async function handler(req, res) {
    try {
        const mainData = await grpcClient.getData(); // Fetch real data using gRPC client

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

        res.status(200).json(data);
    } catch (error) {
        console.error('Error fetching gRPC data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

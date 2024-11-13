// src/backend/index.js
const express = require('express');
const cors = require('cors'); // Import cors
const { MongoClient, ServerApiVersion } = require('mongodb');

const app = express();
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // For parsing application/json

// MongoDB connection setup
const port = process.env.PORT || 5000;

const uri = "mongodb+srv://boombotsstats:hst1234@cluster0.oev4t.mongodb.net/GameStats?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function connectToMongoDB() {
  try {
    await client.connect();
    console.log("Connected to MongoDB!");
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
  }
}

connectToMongoDB();

// Define the API route to fetch team data
app.get('/api/team-data', async (req, res) => {
  try {
    const db = client.db('GameStats');
    const collection = db.collection('GameStats'); // Replace with your actual collection name
    const data = await collection.findOne(); // Fetch a single document as a test
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch data' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Backend server running on port ${port}`);
});

const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();

// Use CORS middleware
app.use(cors());

app.get('/', (req, res) => {
    origin: 'http://localhost:4200',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
  // Read the db.json file
  fs.readFile('./db.json', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading db.json:', err);
      return res.status(500).send('Error reading database');
    }
    
    // Parse the JSON data
    const jsonData = JSON.parse(data);
    res.json(jsonData); // Send the data as JSON
  });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


// app.js
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

const map = {
}

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Welcome to the Express server!');
});

app.get('/get', (req, res) => {
    const { key } = req.query;

    res.json(map[key] || null);
});

app.post('/set', (req, res) => {
    const {key, value} = req.body;
    map[key] = value;
    res.status(200).json({ status:0, message: "success" });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


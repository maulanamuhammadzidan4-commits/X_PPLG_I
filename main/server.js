const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware untuk membaca JSON
app.use(express.json());

// Route dasar untuk testing
app.get('/', (req, res) => {
    res.json({ message: "Welcome to Class Web API! Server is running perfectly." });
});

app.listen(PORT, () => {
    console.log(`Server bergerak di port ${PORT}`);
});
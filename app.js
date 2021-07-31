const express = require('express');
const app = express();
const { PORT = 3000 } = process.env


app.get('/', (req, res) => {
    res.send("Welcome to the home page It's Work Well, With Piplining");
});


app.listen(PORT, () => {
    console.log('Server On');
});



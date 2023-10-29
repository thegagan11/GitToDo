// app.js

const express = require('express');
const app = express();
const itemRoutes = require('./routes');

app.use(express.json());  // To parse the body of POST requests
app.use('/items', itemRoutes);

const PORT = 3000;
app.listen(PORT, function () {
    console.log(`Server is listening on port ${PORT}`);
});

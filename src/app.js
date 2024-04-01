const express = require('express');
const app = express();
require('dotenv').config();

// Import routes
const exampleRoutes = require('./routes/exampleRoutes');
// const anotherRoutes = require('./routes/anotherRoutes');

// Middleware
app.use(express.json());

// Use routes
app.use('/example', exampleRoutes);
// app.use('/another', anotherRoutes);

module.exports = app;
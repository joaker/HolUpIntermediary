const express = require('express');
const app = express();
require('dotenv').config();

// Import routes
const routes = require('./routes/index');
// const anotherRoutes = require('./routes/anotherRoutes');

// Middleware
app.use(express.json());

// Use routes
app.use('/', routes);
// app.use('/another', anotherRoutes);

module.exports = app;
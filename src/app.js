const express = require('express');
const cors = require('cors');
const itemRoutes = require('./routes/itemRoutes');
const healthRoutes = require('./routes/healthRoutes');
const { notFound, errorHandler } = require('./middleware/errorHandler');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/health', healthRoutes);
app.use('/api/items', itemRoutes);

app.use(notFound);
app.use(errorHandler);

module.exports = app;

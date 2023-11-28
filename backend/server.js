// backend/server.js
const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet'); // Security middleware
const compression = require('compression'); // Compression middleware
const rateLimit = require('express-rate-limit'); // Rate limiting middleware
const morgan = require('morgan'); // Logging middleware
const cors = require('cors'); // CORS middleware
const logsRoutes = require('./routes/logsRoutes');
const searchRoutes = require('./routes/searchRoutes');
require('dotenv').config();

const app = express();
const port = process.env.PORT;

app.use(bodyParser.json());
app.use(helmet()); // Add various HTTP headers for security
app.use(compression()); // Compress responses

app.use(cors()); // Enable CORS for all routes

// Implement rate limiting for all routes
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
});
app.use(limiter);

// Implement logging using Morgan middleware
app.use(morgan('combined'));

// Use the logsRoutes and searchRoutes
app.use('/ingest', logsRoutes);
app.use('/logs', logsRoutes);
app.use('/search', searchRoutes);

app.get('/', (req, res) => {
    res.send('Hello, this is the Log Ingestor API!');
  });

app.listen(port, () => {
  console.log(`Log Ingestor listening at http://localhost:${port}`);
});

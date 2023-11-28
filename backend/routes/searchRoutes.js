// backend/routes/searchRoutes.js
const express = require('express');
const searchController = require('../controllers/searchController');
const router = express.Router();

// Endpoint for searching logs
router.get('/', searchController.searchLogs);

module.exports = router;

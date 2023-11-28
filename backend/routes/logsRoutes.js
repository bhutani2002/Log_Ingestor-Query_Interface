// backend/routes/logsRoutes.js
const express = require('express');
const logsController = require('../controllers/logsController');
const router = express.Router();

// Endpoint for log ingestion
router.post('/manual', logsController.manualingestLogs);
router.post('/auto', logsController.autoingestLogs);
// Endpoint for fetching paginated logs
router.get('/', logsController.getPaginatedLogs);
module.exports = router;

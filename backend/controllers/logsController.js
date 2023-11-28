const LogModel = require('../models/LogModel');

//Endpoint for script log ingestion
async function autoingestLogs(req, res){
  try {
    const logDataArray = req.body;
    console.log(logDataArray);
    for (const logData of logDataArray) {
      const logEntry = new LogModel(logData);
      await logEntry.save();
    }

    res.status(200).send('Logs ingested successfully.');
  } catch (error) {
    console.error('Error ingesting logs', error);
    res.status(500).send('Internal Server Error');
  }
}

// Endpoint for manual log ingestion
async function manualingestLogs(req, res) {
  try {
    const logData = req.body;
    logData.timestamp = new Date().toISOString();
    // Store log data in MongoDB
    const mongoLog = new LogModel(logData);
    await mongoLog.save();

    res.status(201).json({ message: 'Log ingested successfully' });
  } catch (error) {
    console.error('Error ingesting log', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

// Endpoint for fetching paginated logs
async function getPaginatedLogs(req, res) {
  try {
    const { page = 1, perPage = 2 } = req.query;
    const skip = (page - 1) * perPage;

    // Fetch logs and total count for pagination
    const [logs, totalCount] = await Promise.all([
      LogModel.find().skip(skip).limit(parseInt(perPage)),
      LogModel.countDocuments(),
    ]);

    console.log(logs);
    const totalPages = Math.ceil(totalCount / perPage);

    res.json({
      logs,
      totalPages,
    });
  } catch (error) {
    console.error('Error fetching logs', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

module.exports = {
  autoingestLogs,
  manualingestLogs,
  getPaginatedLogs,
};

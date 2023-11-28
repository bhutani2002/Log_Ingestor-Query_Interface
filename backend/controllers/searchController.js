const LogModel = require('../models/LogModel');

// Endpoint for searching logs
async function searchLogs(req, res) {
    try {
      // Extract search parameters and pagination details from query
      let filters = req.query.filters;
      let { page = 1, perPage = 2 } = req.query;
  
      console.log('Filters:', filters);
  
      filters = filters ? JSON.parse(filters) : {};
  
      console.log('Filters after parsing:', filters);
  
      if (Object.keys(filters).length === 0) {
        console.log('No filters. Fetching all logs.');
  
        const logs = await LogModel.find()
          .skip((page - 1) * perPage)
          .limit(perPage);
  
        const totalLogsCount = await LogModel.countDocuments();
  
        return res.json({
          logs,
          totalPages: Math.ceil(totalLogsCount / perPage),
        });
      } else {
        // Parse filters as JSON if it's a string
        if (typeof filters === 'string') {
          filters = JSON.parse(filters);
        }
  
        console.log('Filters after parsing:', filters);
        const queryConditions = filters.map((filter) => {
          const property = filter.property;
          const value = filter.value;
        
          if (property === 'parentResourceId') {
            return {
              metadata: {
                [property]: value,
              },
            };
          } else {
            return {
              [property]: value,
            };
          }
        });      
        console.log('Query conditions:', queryConditions);
  
        const totalLogsCount = await LogModel.countDocuments({ $and: queryConditions });
        
        // Execute the query with pagination
        const logs = await LogModel.find({ $and: queryConditions })
          .skip((page - 1) * perPage)
          .limit(parseInt(perPage));
  
        console.log('Logs:', logs);
  
        res.json({
          logs,
          totalPages: Math.ceil(totalLogsCount / perPage),
        });
      }
    } catch (error) {
      console.error('Error searching logs', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }  
}

module.exports = {
  searchLogs,
};

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import LogsTable from './components/LogsTable';
import ManualLogIngestor from './components/ManualLogIngestor';
import SearchLogs from './components/SearchLogs';
import SearchResultsTable from './components/SearchResultsTable';

const App = () => {
  const [logs, setLogs] = useState([]);
  const [newLog, setNewLog] = useState({
    level: 'info',
    message: '',
    resourceId: '',
    timestamp: '',
    traceId: '',
    spanId: '',
    commit: '',
    metadata: {
      parentResourceId: ''
    },
  });

  const [filters, setFilters] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [logsPerPage] = useState(4);
  const [totalPages, setTotalPages] = useState(1);

  const [currentPageSearch, setCurrentPageSearch] = useState(1);
  const [logsPerPageSearch, setLogsPerPageSearch] = useState(4);
  const [totalPagesSearch, setTotalPagesSearch] = useState(1);

  const [searchButtonClicked, setSearchButtonClicked] = useState(false);

  const fetchLogs = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/logs?page=${currentPage}&perPage=${logsPerPage}`);
      setTotalPages(response.data.totalPages);
      setLogs(response.data.logs);
    } catch (error) {
      console.error('Error fetching logs', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/logs/manual', newLog);
      setNewLog({
        level: 'info',
        message: '',
        resourceId: '',
        timestamp: '',
        traceId: '',
        spanId: '',
        commit: '',
        metadata: {
          parentResourceId: ''
        },
      });
      console.log("data added successfully");
      fetchLogs();
    } catch (error) {
      console.error('Error ingesting log', error);
    }
  };

  const addFilter = () => {
    setFilters([...filters, { property: '', value: '' }]);
  };

  const removeFilter = (index) => {
    const updatedFilters = [...filters];
    updatedFilters.splice(index, 1);
    setFilters(updatedFilters);
  };

  const updateFilter = (index, field, value) => {
    const updatedFilters = [...filters];
    updatedFilters[index][field] = value;
    setFilters(updatedFilters);
  };

  const searchLogs = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/search?filters=${JSON.stringify(filters)}&page=${currentPageSearch == 0 ? 1 : currentPageSearch}&perPage=${logsPerPageSearch}`);
      setSearchResults(response.data.logs);
      setTotalPagesSearch(response.data.totalPages);
    } catch (error) {
      console.error('Error searching logs', error);
    }
  };

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const handlePageChangeSearch = (newPage) => {
    if (newPage >= 1 && newPage <= totalPagesSearch) {
      setCurrentPageSearch(newPage);
    }
  };
  const handleSearchClick = () => {
    setSearchButtonClicked(true);
  };
  
  useEffect(() => {
    fetchLogs();
  }, [currentPage, logsPerPage]);

  useEffect(() => {
    if (searchButtonClicked && (currentPageSearch > 0 || logsPerPageSearch > 2)) {
      searchLogs();
    }
    setSearchButtonClicked(false);
  }, [searchButtonClicked, currentPageSearch, logsPerPageSearch]);

  return (
    <div className=''>
      <Navbar/>
      <div className="container mx-auto my-8 mt-20">
        <LogsTable logs={logs} currentPage={currentPage} totalPages={totalPages} handlePageChange={handlePageChange} />
        <ManualLogIngestor handleSubmit = {handleSubmit} newLog = {newLog} setNewLog = {setNewLog}/>
        <SearchLogs filters = {filters} addFilter = {addFilter} removeFilter = {removeFilter} updateFilter = {updateFilter} handleSearchClick = {handleSearchClick}/>
        <SearchResultsTable searchResults = {searchResults} currentPageSearch = {currentPageSearch} totalPagesSearch = {totalPagesSearch} handlePageChangeSearch = {handlePageChangeSearch}/>
      </div>
    </div>
  );
};

export default App;

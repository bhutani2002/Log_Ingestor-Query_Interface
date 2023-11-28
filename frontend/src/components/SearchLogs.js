import React from 'react'

const SearchLogs = ({ filters, addFilter, removeFilter, updateFilter, handleSearchClick }) => {
  return (
        <div className="mb-8 p-4 border border-blue-500 rounded-md" id = "search_logs">
    <h2 className="text-3xl font-bold mb-4">Log Search</h2>
    {filters ? filters.map((filter, index) => (
        <div key={index} className="mb-2">
        <label className="mr-2">
            Property:
            <input
            type="text"
            className="form-input ml-2 border border-gray-300 rounded-md p-2"
            value={filter.property}
            onChange={(e) => updateFilter(index, 'property', e.target.value)}
            />
        </label>
        <label className="mr-2">
            Value:
            <input
            type="text"
            className="form-input ml-2 border border-gray-300 rounded-md p-2"
            value={filter.value}
            onChange={(e) => updateFilter(index, 'value', e.target.value)}
            />
        </label>
        <button
            className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700"
            onClick={() => removeFilter(index)}
        >
            Remove
        </button>
        </div>
    )): (<></>)}
    <button
        className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700 mr-2"
        onClick={addFilter}
    >
        Add Filter
    </button>
    <button
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
        onClick={handleSearchClick}
    >
        Search
    </button>
    </div>

  )
}

export default SearchLogs
import React from 'react'

const SearchResultsTable = ({ searchResults, currentPageSearch, totalPagesSearch, handlePageChangeSearch }) => {
  return (
    <div className='mb-8 p-4 border border-blue-500 rounded-md overflow-x-auto' id = "search_results">
        <h2 className="text-3xl font-bold mb-4">Search Results</h2>
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="py-2 px-4 bg-blue-500 text-white text-center border">level</th>
              <th className="py-2 px-4 bg-blue-500 text-white text-center border">message</th>
              <th className="py-2 px-4 bg-blue-500 text-white text-center border">resourceId</th>
              <th className="py-2 px-4 bg-blue-500 text-white text-center border">timestamp</th>
              <th className="py-2 px-4 bg-blue-500 text-white text-center border">traceId</th>
              <th className="py-2 px-4 bg-blue-500 text-white text-center border">spanId</th>
              <th className="py-2 px-4 bg-blue-500 text-white text-center border">commit</th>
              <th className="py-2 px-4 bg-blue-500 text-white text-center border">parentResourceId</th>
            </tr>
          </thead>
          <tbody>
            {searchResults.map((result) => (
              <tr key={result._id}>
                <td className="py-2 px-4 text-center border">{result.level}</td>
                <td className="py-2 px-4 text-center border">{result.message}</td>
                <td className="py-2 px-4 text-center border">{result.resourceId}</td>
                <td className="py-2 px-4 text-center border">{result.timestamp}</td>
                <td className="py-2 px-4 text-center border">{result.traceId}</td>
                <td className="py-2 px-4 text-center border">{result.spanId}</td>
                <td className="py-2 px-4 text-center border">{result.commit}</td>
                <td className="py-2 px-4 text-center border">{result.metadata.parentResourceId}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-4 flex justify-between">
          <button onClick={() => handlePageChangeSearch(currentPageSearch - 1)} disabled={ currentPageSearch == 1} className={(currentPageSearch == 1) ? "px-4 py-2 bg-gray-300 text-white rounded" : "px-4 py-2 bg-blue-500 text-white rounded"}>
            Previous
          </button>
          <span className='text-blue-500'> Page {currentPageSearch} of {totalPagesSearch} </span>
          <button
  onClick={() => handlePageChangeSearch(currentPageSearch + 1)}
  disabled={ currentPageSearch === totalPagesSearch}
  className={(currentPageSearch === totalPagesSearch) ? "px-4 py-2 bg-gray-300 text-white rounded" : "px-4 py-2 bg-blue-500 text-white rounded"}
>
  Next
</button>

        </div>
      </div>
  )
}

export default SearchResultsTable
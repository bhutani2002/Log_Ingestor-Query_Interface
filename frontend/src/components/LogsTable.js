import React from 'react'

const LogsTable = ({ logs, currentPage, totalPages, handlePageChange }) => {
  return (
    <div className="mb-8 p-4 border border-blue-500 rounded-md overflow-x-auto" id = "logs">
        <h2 className="text-3xl font-bold mb-4">Logs</h2>
        {logs ? <table className="min-w-full divide-y divide-gray-200">
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
            {logs.map((log) => (
                <tr key={log._id} className="border-t">
                <td className="py-2 px-4 text-center border">{log.level}</td>
                <td className="py-2 px-4 text-center border">{log.message}</td>
                <td className="py-2 px-4 text-center border">{log.resourceId}</td>
                <td className="py-2 px-4 text-center border">{log.timestamp}</td>
                <td className="py-2 px-4 text-center border">{log.traceId}</td>
                <td className="py-2 px-4 text-center border">{log.spanId}</td>
                <td className="py-2 px-4 text-center border">{log.commit}</td>
                <td className="py-2 px-4 text-center border">{log.metadata.parentResourceId}</td>
                </tr>
            ))}
            </tbody>
        </table> : (<p>No logs available.</p>
)}
        <div className="mt-4 flex justify-between ">
            <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={(currentPage === 1) ? "px-4 py-2 bg-gray-300 text-white rounded" : "px-4 py-2 bg-blue-500 text-white rounded"}
            >
            Previous
            </button>
            <span className="text-blue-500">
            Page {currentPage} of {totalPages}
            </span>
            <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={(currentPage === totalPages) ? "px-4 py-2 bg-gray-300 text-white rounded" : "px-4 py-2 bg-blue-500 text-white rounded"}
            >
            Next
            </button>
        </div>
    </div>
  )
}

export default LogsTable
import React from 'react'

const ManualLogIngestor = ({ handleSubmit, newLog, setNewLog }) => {
  return (
    <div className="manual_ingestor mb-4 p-4 border border-blue-500 rounded-md" id = "logs_ingestor">
        <h1 className="text-3xl font-bold mb-4">Manual Log Ingestor</h1>

        <form onSubmit={handleSubmit} className="">
        <label className="block mb-2">
        Message:
        <input
        type="text"
        className="form-input mt-1 block w-full p-2 border border-gray-300 rounded-md"
        value={newLog.message}
        onChange={(e) => setNewLog({ ...newLog, message: e.target.value })}
        />
        </label>

        <label className="block mb-2">
        Resource ID:
        <input
        type="text"
        className="form-input mt-1 block w-full p-2 border border-gray-300 rounded-md"
        value={newLog.resourceId}
        onChange={(e) => setNewLog({ ...newLog, resourceId: e.target.value })}
        />
        </label>

        <label className="block mb-2">
        Level:
        <select
        className="form-input mt-1 block w-full p-2 border border-gray-300 rounded-md"
        value={newLog.level}
        onChange={(e) => setNewLog({ ...newLog, level: e.target.value })}
        >
        <option value="info">Info</option>
        <option value="error">Error</option>
        </select>
        </label>

        <label className="block mb-2">
        Trace ID:
        <input
        type="text"
        className="form-input mt-1 block w-full p-2 border border-gray-300 rounded-md"
        value={newLog.traceId}
        onChange={(e) => setNewLog({ ...newLog, traceId: e.target.value })}
        />
        </label>

        <label className="block mb-2">
        Span ID:
        <input
        type="text"
        className="form-input mt-1 block w-full p-2 border border-gray-300 rounded-md"
        value={newLog.spanId}
        onChange={(e) => setNewLog({ ...newLog, spanId: e.target.value })}
        />
        </label>

        <label className="block mb-2">
        Commit:
        <input
        type="text"
        className="form-input mt-1 block w-full p-2 border border-gray-300 rounded-md"
        value={newLog.commit}
        onChange={(e) => setNewLog({ ...newLog, commit: e.target.value })}
        />
        </label>

        <label className="block mb-2">
        Parent Resource ID:
        <input
        type="text"
        className="form-input mt-1 block w-full p-2 border border-gray-300 rounded-md"
        value={newLog.metadata.parentResourceId}
        onChange={(e) => setNewLog({ ...newLog, metadata: { parentResourceId: e.target.value } })}
        />
        </label>

        <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
        Submit Log
        </button>
        </form>
        </div>

  )
}

export default ManualLogIngestor
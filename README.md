<!-- ABOUT THE PROJECT -->
## About The Project
The project is based on log ingestor system that can efficiently handle vast volumes of log data, and offer a simple interface for querying this data using specific field filters.

## Working of Log_Ingestor
### Demonstration [Click on the image to view the project demonstration]

[![Logs_3](https://github.com/dyte-submissions/november-2023-hiring-bhutani2002/assets/84590758/d4375f8a-eca1-4aa2-bcf1-40a3e4bb66e9)](https://drive.google.com/file/d/1mQSu1uphlYj1wYtVs5dbLZJS6SK_T7PG/view?usp=sharing)


### Technology Stack used:
```
- React JS
- Node JS
- Express
- Mongo DB
- Tailwind CSS
```


<!-- GETTING STARTED -->
## Getting Started
### Prerequisites

- [Node.js](https://nodejs.org/en/download/) (ensure Node.js is installed on your system)
* npm
  ```sh
  npm install npm@latest -g
  ```

### Project Setup and Launch Instructions

1. Clone the repo
   ```sh
   git clone https://github.com/dyte-submissions/november-2023-hiring-bhutani2002.git
   ```
3. Open a terminal, change directory to frontend folder and install npm packages
   ```sh
   cd frontend
   npm install
   ```
4. Run the frontend
   ```sh
   npm run start
   ```
   This will run the frontend code on port number 5000
4. Open a second terminal and change directory to backend folder and install npm packages
   ```sh
   cd backend
   npm install
   ```
5. Create a .env file in the backend folder and enter the following parameters
   ```sh
   PORT='YOUR_PORT_NUMBER' [Keep YOUR_PORT_NUMBER: 3000 as required for the project]
   URI='ENTER_YOUR_MONGODB_DATABASE_URI'
   ```
6. Run the backend
   ```sh
   nodemon server.js
   ```

7. #### NOTE: Only if you want to push your own logs stored in the script file, then only execute this point
   Now after running the code, if you want to push your own logs stored in the script file(As required for the project) directly into the database, then,
   Steps are as follows:
   ```sh
   (i) Change the content[logs collection] stored in the 'log.sh' sample file to your provided content, or add your file with the sh extension containing the logs. [Note: content should be array of log objects].
   (ii) The backend code should be running. Now open a new terminal and run this following command to ingest the logs to the database.
   ```
   ```sh
   $logs = Get-Content logs.sh | Out-String; $headers = @{ "Content-Type" = "application/json" }; Invoke-RestMethod -Uri http://localhost:3000/ingest/auto -Method Post -Headers $headers -Body $logs

   OR

   $logs = Get-Content "YOUR_FILE_NAME" | Out-String; $headers = @{ "Content-Type" = "application/json" }; Invoke-RestMethod -Uri http://localhost:3000/ingest/auto -Method Post -Headers $headers -Body $logs
   ```



<!-- USAGE EXAMPLES -->
## Usage
1. Logs Table:
The "Logs Table" component displays a comprehensive table of logs stored in the database. Utilizing pagination, it efficiently organizes and presents log entries, including details such as log level, message, resource ID, timestamp, trace ID, span ID, commit, and parent resource ID. The table offers a clear overview of the entire log history, facilitating easy tracking and analysis.

2. Manual Log Ingestor:
The "Manual Log Ingestor" component empowers users to add logs manually through a user-friendly interface. Input fields allow users to specify log details such as message, resource ID, log level, timestamp, trace ID, span ID, commit, and parent resource ID. Upon submission, the entered log data is ingested into the system, providing a seamless method for users to contribute log entries directly.

3. Log Search:
The "Log Search" component facilitates the exploration of logs by providing a dynamic search functionality. Users can apply filters based on specific log properties, such as message content or resource ID, enabling targeted searches within the log database. The intuitive interface allows users to add, remove, and modify search filters dynamically, enhancing flexibility in refining search criteria.

4. Search Results Table:
The "Search Results Table" component displays the outcomes obtained from log searches. When users employ the search functionality, this component dynamically updates to present logs that match the specified criteria. The table format mirrors the structure of the Logs Table, presenting relevant details for each matching log entry. This feature ensures users can quickly and efficiently review logs that meet their specific search conditions, enhancing the overall usability of the log management system.

5. The Log Ingestor API backend handles log data ingestion, retrieval, and search operations. It provides endpoints for both manual and automated script log ingestion, ensuring secure and organized storage in a MongoDB database. The backend employs security measures such as rate limiting, CORS, and compression for robustness. The codebase is modular, promoting readability and maintainability. Efficient log retrieval with pagination is supported, and error handling is implemented for enhanced security. Overall, the backend is designed for flexibility, security, and optimal performance in log management.

Working of Log_Ingestor with Query Interface
### VIDEO
```sh
https://github.com/dyte-submissions/november-2023-hiring-bhutani2002/assets/84590758/e9526cd8-ecab-4420-9484-10ea309dfc23
```
### ScreenShots
![Logs_1](https://github.com/dyte-submissions/november-2023-hiring-bhutani2002/assets/84590758/ed3a4d58-3d41-4198-ac04-f498dc4f605d)
![Logs_2](https://github.com/dyte-submissions/november-2023-hiring-bhutani2002/assets/84590758/75f23b47-be07-42b2-a0f6-42e1c269c0a8)

## Project Scalability / Future Plans
```
1. Role-Based Access Control:
Implementing role-based access control (RBAC) to the query interface will enable different levels of access based on user roles. Define roles such as 'Admin,' 'User,' or 'Viewer,' and assign specific permissions to each role.

2. Timestamp Filtering:
Implement timestamp filtering to retrieve logs between the specified time range.

3. Preloaders:
Integrate preloaders to enhance the user experience by displaying loading indicators during asynchronous operations.
```

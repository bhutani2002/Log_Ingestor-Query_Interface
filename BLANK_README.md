<!-- ABOUT THE PROJECT -->
## About The Project
The project is based on log ingestor system that can efficiently handle vast volumes of log data, and offer a simple interface for querying this data using specific field filters.



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

* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

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

<p align="right">(<a href="#readme-top">back to top</a>)</p>



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

![Logs_1](https://github.com/dyte-submissions/november-2023-hiring-bhutani2002/assets/84590758/ed3a4d58-3d41-4198-ac04-f498dc4f605d)
![Logs_2](https://github.com/dyte-submissions/november-2023-hiring-bhutani2002/assets/84590758/75f23b47-be07-42b2-a0f6-42e1c269c0a8)
![Logs_3](https://github.com/dyte-submissions/november-2023-hiring-bhutani2002/assets/84590758/d4375f8a-eca1-4aa2-bcf1-40a3e4bb66e9)


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact
```
Name: Raag Bhutani
Email-Id: raagbhutani2002@gmail.com
```
<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/github_username/repo_name.svg?style=for-the-badge
[contributors-url]: https://github.com/github_username/repo_name/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/github_username/repo_name.svg?style=for-the-badge
[forks-url]: https://github.com/github_username/repo_name/network/members
[stars-shield]: https://img.shields.io/github/stars/github_username/repo_name.svg?style=for-the-badge
[stars-url]: https://github.com/github_username/repo_name/stargazers
[issues-shield]: https://img.shields.io/github/issues/github_username/repo_name.svg?style=for-the-badge
[issues-url]: https://github.com/github_username/repo_name/issues
[license-shield]: https://img.shields.io/github/license/github_username/repo_name.svg?style=for-the-badge
[license-url]: https://github.com/github_username/repo_name/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/linkedin_username
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 

Certainly! Here's the updated README file with the provided GitHub repository link and MongoDB Atlas URL:

---
# Employee Search Website

This is a React-based website that allows users to search for employees by their names or job titles, such as software engineer or designer.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

The Employee Search Website provides a user-friendly interface for searching employees based on their names or job titles. Users can easily find the desired employees and view their details.

## Features

- Search for employees by their names or job titles.
- Display detailed information about each employee, including their contact details and department.

## Installation

To run the Employee Search Website locally on your system, follow these steps:

1. Clone the repository:

```shell
git clone https://github.com/zainwaseem/employeessearch.git
```

2. Install dependencies:

```shell
cd employeessearch
npm install
```

3. Set up the MongoDB database:
   - Create an account on MongoDB Atlas: [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
   - Create a new cluster and obtain the connection URI.
   - Replace `<your-mongodb-uri>` in the `.env` file with your MongoDB connection URI.

4. Set up environment variables:
   - Create a `.env` file in the `server` folder of the project.
   - Specify the following environment variables in the `.env` file:

```plaintext
MONGODB_URI=mongodb+srv://zainwaseem9371:xx989mvrw8lgfC0q@cluster0.7rno3ax.mongodb.net/
```

Replace `<your-mongodb-uri>` with the MongoDB connection URI you obtained in the previous step.

5. Start the backend server:

```shell
cd server
npm start
```

6. Start the frontend development server:

```shell
cd ..
npm start
```

7. Access the website locally in your browser:

```
http://localhost:3000
```

## Usage

- Open the Employee Search Website in your browser.
- Use the search bar to enter the employee's name or job title.
- Click the "Search" button to retrieve matching employees.
- View the detailed information of each employee.

## Technologies Used

The Employee Search Website is built using the following technologies:

- React
- Node.js
- MongoDB Atlas

## Contributing

Contributions to this project are welcome! If you find any issues or have suggestions for new features, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

---

Please make sure to replace `<your-mongodb-uri>` with your actual MongoDB Atlas connection URI. Feel free to adjust any details or instructions as needed. Let me know if you have any further questions!

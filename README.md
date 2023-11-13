# Flexhire Code Test

## Introduction

This repository contains the solution for the Flexhire Code Test, a small prototype frontend application that interacts with the Flexhire API. The goal is to assess the technical skills of the engineer in the context of the Flexhire tech stack.

## Tech Stack

The recommended tech stack for this project includes:

- **React or Next.js**: Used for building the frontend application. In this project, we have opted for Vite as the React bundler.

- **MUI (Material-UI)**: Chosen as the UI toolkit for designing a modern and responsive user interface.

- **Relay**: Utilized as the API client for data fetching from the Flexhire API.

- **Axios**: Employed for handling HTTP requests and interacting with the Flexhire API.

- **GraphQL**: Utilized for querying data from the Flexhire API.

- **Babel**: Used for transpiling JavaScript code.

- **Routing**: Incorporated routing functionality for navigation within the application.

## Project Structure

The project is structured as follows:


flexhireteam/
│
├── src/
│   ├   |   Navigator.jsx
│   │   ├── Profile.jsx
│   │   ├── main.jsx
│   │   ├── SignIn.jsx
│   │   └── ...
│   ├── App.jsx
│   ├── index.jsx
│   └── ...
│
├── .babelrc
├── .gitignore
├── package.json
├── README.md
└── ...


- **`src/`**: Contains the source code for the React application.
- **`assets/`**: Includes React assets such as images and vite docs etc.
- **`.babelrc`**: Babel configuration file for transpiling JavaScript code.
- **`.gitignore`**: Specifies files and directories to be ignored by Git.
- **`package.json`**: Lists project dependencies and configuration.
- **`README.md`**: Documentation file providing information about the project.

## Setup Instructions

To run the project locally, follow these steps:

1. Clone the repository:

   
   git clone https://github.com/coderroy05/flexhireteam.git
   

2. Install dependencies:

   
   cd flexhireteam
   npm install
   

3. Start the development server:

   
   npm run dev
   

4. Open your browser and visit [http://localhost:3000](http://localhost:3000) to view the application.

## API Key Configuration

To access data from the Flexhire API, configure the API key by using the Form component in the application. Enter the API key and proceed to view the relevant data.

## Automated Tests

The project includes automated tests using Cypress. To run the tests, use the following command:


npm run test


---

### CORS Issue with Flexhire API

#### Problem Statement

Hello Mr. Brian,

I hope this message finds you well. I am currently working on integrating your API into a React application hosted at http://localhost:5173. However, I'm encountering a CORS (Cross-Origin Resource Sharing) issue, preventing successful communication with the API.

#### Error Message

The error message indicates that the server at https://flexhire.com/api/v2 does not include the necessary CORS headers, particularly the 'Access-Control-Allow-Origin' header, to allow requests from my application's origin.

#### Request for Assistance

Could you please look into this matter and configure the server to include the appropriate CORS headers? Your assistance in resolving this matter would be greatly appreciated.

#### Thank You

Thank you for your attention to this issue. If you have any questions or require additional information, please feel free to reach out.

---


## Contributors

- [coderroy05](https://github.com/coderroy05) - Main contributor

## Feedback and Questions

If you have any feedback, questions, or encounter issues with the project, feel free to reach out to [coderroy05](https://github.com/coderroy05).

Thank you for considering my submission for the Flexhire Code Test!
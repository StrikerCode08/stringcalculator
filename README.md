# String Calculator

## Description

This project is a simple string calculator web application built with React. It allows users to input a string of numbers separated by spaces and calculates the sum of those numbers. The application communicates with a backend API to perform the calculation.

## Setup Instructions

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install the dependencies using `npm install`.
4. Create a `.env` file in both the `client` and `server` directories.
   - In the `server` directory, define any necessary environment variables for your backend like PORT.
   - In the `client` directory, define the `VITE_API_URL` environment variable pointing to your backend API. For local development, set it to `http://localhost:5000` or the appropriate port your server runs on.
5. Start the development server using `npm run dev`.
6. To run tests, execute `npm run test` `server` directories.

## Usage

- Open the application in your browser.
- Enter a string of numbers separated by spaces in the input field.
- Click the "Calculate" button to see the result.

## Technologies Used

- React
- TypeScript
- Axios
- Vite

## License

This project is licensed under the MIT License.

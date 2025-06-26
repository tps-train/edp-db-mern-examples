# Vite User Table App

This project is a simple Vite application that fetches user data from a backend API and displays it in a formatted table.

## Project Structure

```
vite-user-table-app
├── src
│   ├── App.tsx               # Main application component
│   ├── main.tsx              # Entry point of the Vite application
│   ├── components
│   │   └── UserTable.tsx     # Component that fetches and displays user data
│   └── styles
│       └── UserTable.css     # Styles for the UserTable component
├── index.html                # Main HTML file
├── package.json              # npm configuration file
├── tsconfig.json             # TypeScript configuration file
└── README.md                 # Project documentation
```

## Getting Started

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd vite-user-table-app
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Run the application:**
   ```
   npm run dev
   ```

4. **Access the application:**
   Open your browser and navigate to `http://localhost:3000` to view the user data table.

## API Endpoint

The application fetches user data from the following API endpoint:
- `GET /user`

## License

This project is licensed under the MIT License.
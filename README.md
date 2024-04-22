COVID-19 Dashboard

This project is a COVID-19 dashboard built using React.js and Tailwind CSS. It provides interactive charts and statistical data visualizations, including total cases, recoveries, and deaths for various countries.

Features

- API Integration: Fetches historical COVID-19 data and country list from external RESTful APIs.
- Interactive Charts: Utilizes line and pie charts to visualize pandemic statistics.
- Dropdown Menu: Allows users to select different countries to view data for.
- Responsive Design: Ensures compatibility and usability across various screen sizes.
- Error Handling: Implements error handling for all API requests.
- Clean Code: Written in modular and well-commented code for easy maintenance.

 Technologies Used

- React.js
- Tailwind CSS

 Getting Started

To run this project locally, follow these steps:

1. Clone this repository: `git clone <repository-url>`
2. Navigate to the project directory: `cd covid19-dashboard`
3. Install dependencies: `npm install`
4. Start the development server: `npm start`
5. Open your browser and go to `http://localhost:3000` to view the dashboard.

 API Integration

- COVID-19 Historical Data:
  - Endpoint: `https://disease.sh/v3/covid-19/historical/{country}?lastdays=1500`
  - Replace `{country}` with the ISO code of the chosen country.
- Country Options for Dropdown:
  - Endpoint: `https://restcountries.com/v3.1/all`

 Folder Structure

```
covid19-dashboard/
│
├── public/            # Static assets
│   └── 
│
├── src/               # Source files
│   ├── components/    # React components
        ├── LineChart.jsx
        ├── PieChart.jsx
        ├── StatisticalChart.jsx
│   ├── App.css         # Data fetching and handling
│   ├── App.jsx        # CSS styles (Tailwind CSS)
│   ├── index.css        # Main component
│   └── main.jsx       # Entry point
│
└── README.md 
```

 Contributing

Contributions are welcome! Feel free to open issues and pull requests to suggest improvements or new features.

 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

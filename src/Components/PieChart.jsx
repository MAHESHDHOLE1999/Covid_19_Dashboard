import React from "react";
import { Chart, Tooltip, Title, ArcElement, Legend } from "chart.js/auto";
import { Doughnut, Pie } from "react-chartjs-2";
Chart.register(Tooltip, Title, ArcElement, Legend);

const PieChart = (props) => {
  if (!props.covidData) {
    return <div>No data available</div>;
  }

  const covidData = props.covidData;
  if (!covidData) {
    return <div>Invalid data structure</div>;
  }

  let totalCases = 0;
  let totalDeath = 0;
  let totalRecovery = 0;
  let total = 0;
  let totalCasesPercentage = 0;
  let totalDeathPercentage = 0;
  let totalRecoveryPercentage = 0;

  for (var date in covidData.cases) {
    totalCases += covidData.cases[date];
    totalDeath += covidData.deaths[date];
    totalRecovery += covidData.recovered[date];
  }
  total = totalCases + totalDeath + totalRecovery ;
    totalCasesPercentage = ( ( totalCases / total) * 100).toFixed(2);
    totalDeathPercentage = ( ( totalDeath / total) * 100).toFixed(2);
    totalRecoveryPercentage = ( ( totalRecovery / total) * 100).toFixed(2);


  const data = {
    labels:['Cases','Deaths','Recovered'],
    datasets: [{
      label: 'Covid Cases',
      data: [totalCasesPercentage,totalDeathPercentage,totalRecoveryPercentage],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 4
    }]
  };




  
  return (
    <div>
      <Doughnut data={data} className="size-36 md:size-40 lg:size-72" />
    </div>
  );
};

export default PieChart;

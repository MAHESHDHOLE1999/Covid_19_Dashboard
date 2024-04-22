import React from 'react'
import {Chart,Tooltip,Title,ArcElement, Legend} from 'chart.js/auto';
import { Line } from 'react-chartjs-2';
import '../App.css'

Chart.register(Tooltip,Title,ArcElement, Legend)

function LineChart( props ){
    if (!props.covidData) {
        return <div>No data available</div>;
      }

    const { cases, deaths, recovered} = props.covidData
    if (!cases || !deaths || !recovered) {
        return <div>Invalid data structure</div>;
      }

    const dates = Object.keys(cases)
    const values= Object.values(cases)

    const labels = Object.keys(cases);
    const data = {
        labels: labels,
        datasets: [{
          label: 'Cases',
          data: Object.values(cases),
          fill: false,
          borderColor: 'rgb(168, 85, 247)',
          tension: 0.1
        },
        {
            label: 'Deaths',
            data: Object.values(deaths),
            fill: false,
            borderColor: 'rgb(239, 68, 68)',
            tension: 0.1
          },
          {
            label: 'Recovered',
            data: Object.values(recovered),
            fill: false,
            borderColor: 'rgb(34, 197, 94)',
            tension: 0.1
          },
    ]
      };

  return (
    <div>
        <Line data={data} className='w-full h-56 md:w-full lg:w-[500px] md:h-[600px] lg:h-[900px]' id='linechart'/>
    </div>
  )
}

export default LineChart
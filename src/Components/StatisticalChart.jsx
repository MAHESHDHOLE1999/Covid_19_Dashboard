import React from 'react'

function StatisticalChart(props){
    const covidData =props.covidData

    let totalCases = 0
    let totalDeath = 0
    let totalRecovery = 0
    let total = 0
    let totalCasesPercentage = 0
    let totalDeathPercentage = 0
    let totalRecoveryPercentage = 0

    for(var date in covidData.cases){
        totalCases += covidData.cases[date];
        totalDeath += covidData.deaths[date];
        totalRecovery += covidData.recovered[date];
    }
    total = totalCases + totalDeath + totalRecovery ;
    totalCasesPercentage = ( ( totalCases / total) * 100).toFixed(2) + "%";
    totalDeathPercentage = ( ( totalDeath / total) * 100).toFixed(2) + "%";
    totalRecoveryPercentage = ( ( totalRecovery / total) * 100).toFixed(2) + "%";

    function formatNumber(num){
        if(num >= 1000000000){
            return (num / 1000000000).toFixed(2) + 'B';
        }
        else if(num >= 1000000){
            return (num / 1000000).toFixed(2) + 'M';
        }
        else {
            return num.toString();
        }
    }

  return (<>

  <div className=' p-2 flex items-center flex-col gap-5 md:flex-row md:justify-evenly py-5'>
    <div className='flex items-center'>
        <div className='w-40 md:w-28 lg:w-48 md:h-auto lg:h-16 py-2 px-3 border border-black rounded-md bg-violet-500'>
            <h1 className='font-bold md:text-md lg:text-xl'>Total Cases</h1>
            <h6>{totalCasesPercentage}</h6>
        </div>
        <div className='w-20 h-16 md:w-20 lg:w-24 md:h-16 lg:h-20 text-center flex justify-center items-center font-extrabold text-lg rounded-xl border border-red-900'>{formatNumber(totalCases)}</div>
    </div>

    <div className='flex items-center'>
        <div className='w-40 md:w-28 lg:w-48 md:h-auto lg:h-16 py-2 px-3 border border-black rounded-md bg-green-500'>
            <h1 className='font-bold md:text-md lg:text-xl'>Recoveries</h1>
            <h6>{totalRecoveryPercentage}</h6>
        </div>
        <div className='w-20 h-16 md:w-20 lg:w-24 md:h-16 lg:h-20 text-center flex justify-center items-center font-extrabold text-lg rounded-xl border border-red-900'>{formatNumber(totalRecovery)}</div>
    </div>

    <div className='flex items-center'>
        <div className='w-40 md:w-28 lg:w-48 md:h-auto lg:h-16 py-2 px-3 border border-black rounded-md bg-red-500'>
            <h1 className='font-bold md:text-md lg:text-xl'>Deaths</h1>
            <h6>{totalDeathPercentage}</h6>
        </div>
        <div className='w-20 h-16 md:w-20 lg:w-24 md:h-16 lg:h-20 text-center flex justify-center items-center font-extrabold text-lg rounded-xl border border-red-900'>{formatNumber(totalDeath)}</div>
    </div>
  </div>
  </>)
}

export default StatisticalChart
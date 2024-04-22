import { useState, useEffect } from "react";
import axios from "axios";
import { IoSearch } from "react-icons/io5";
import StatisticalChart from "./Components/StatisticalChart";
import LineChart from "./Components/LineChart";
import PieChart from "./Components/PieChart";

function App() {
  const [country, setCountry] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("USA");
  const [covidData, setCovidData] = useState([]);
  let dates = 0;

  useEffect(() => {
    try {
      const countryData = async () => {
        const res = await axios.get("https://restcountries.com/v3.1/all");
        setCountry(res.data);
      };
      countryData();
    } catch (error) {
      console.log("Error : " + error);
    }
  }, []);

  useEffect(() => {
    try {
      const getCovidData = async () => {
        const res = await axios.get(
          `https://disease.sh/v3/covid-19/historical/${selectedCountry}?lastdays=1500`
        );
        const timeline = res.data.timeline;
        const dates = Object.keys(timeline);
        dates.sort();
        console.log("Covid data for", selectedCountry, ":", res.data); // Log the fetched data here
        setCovidData(timeline);
      };
      getCovidData();
    } catch (error) {
      console.log("Errors : " + error);
    }
  }, [selectedCountry]); 

  if (covidData && covidData.cases) {
    dates = Object.keys(covidData.cases);
  } else {
    console.error("covidData or covidData.cases is undefined or null.");
  }

  return (
    <>
      <div className="w-full h-full md:py-12 md:px-10 lg:py-0 lg:px-0">
        <div className="w-full h-full lg:container md:w-full lg:w-3/4 md:h-auto lg:h-auto lg:mx-auto lg:my-5 rounded-xl p-5 bg-violet-100 min-h-[80vh]">
          <h1 className="text-2xl font-bold">
            COVID-19 and Population Dashboard
          </h1>
          <div className="flex flex-col md:flex-row lg:flex-row gap-5">
            <div className="w-full md:w-1/2 md:py-5 ">
              <div className="flex justify-start items-center gap-3 md:w-3/4  border border-black py-1 px-4 rounded-2xl">
                <div>
                  <IoSearch />
                </div>
                <form action="">
                  <select
                    name="country"
                    id="country"
                    className="w-full bg-transparent outline-none"
                    value={selectedCountry}
                    onChange={(e) => setSelectedCountry(e.target.value)}
                  >
                    {country.map((ele) => (
                      <option key={ele.cca2} value={ele.name.common} >
                        {ele.name.common}
                      </option>
                    ))}
                  </select>
                </form>
              </div>
            </div>

            <div className="md:w-1/2 flex md:justify-end md:items-center pb-5 ">
              <div className="w-full md:w-3/4 md:content-end">
                <p>Filtered Date Range</p>
                <div className="border border-black w-full h-8 text-center">
                  {dates[0]} - {dates[dates.length - 1]}
                </div>
              </div>
            </div>
          </div>

          <StatisticalChart covidData={covidData} />

          <div className="py-5 flex flex-col md:flex-col lg:flex-row">
            <div className="w-full h-56 md:w-full lg:w-1/2 md:h-[400px] lg:h-80 lg:flex lg:justify-center ">
              <LineChart covidData={covidData} />
            </div>
            <div className="w-full h-96 md:w-full lg:w-1/2 md:h-[700px] lg:h-80 lg:flex lg:justify-center ">
              <PieChart covidData={covidData}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

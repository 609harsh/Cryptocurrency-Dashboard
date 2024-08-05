import { Line,Bar } from "react-chartjs-2";
import 'chart.js/auto'; 
import { useAppDispatch } from "../redux/hooks";
import { useEffect, useRef, useState } from "react";

export const CurrencyGraph = () => {
  const [isCurrencyTypeOpen, setCurrencyTypeOpen] = useState(false)
  const [isChartTypeOpen, setChartTypeOpen] = useState(false)
  const [chartVal, setChart] = useState("Chart Type")
  const [cryptoVal, setCrypto] = useState("Cryptocurrency")
  const dropdownRef = useRef<HTMLDivElement>(null);
  const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul','Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [
            {
                label: 'My First dataset',
                data: [100, 400, 200, 800, 1500, 2000,10000,100, 400, 200, 800, 1500, 2000,10000],
                fill: false,
                backgroundColor: 'rgb(75, 192, 192)',
                borderColor: 'rgba(75, 192, 192, 1)',
          },
          {
                label: 'My Second dataset',
                data: [100, 400, 200, 800, 1500, 200,1000,100, 400, 200, 800, 1500, 2000,10000],
                fill: false,
                backgroundColor: 'rgb(75, 192, 0)',
                borderColor: 'rgba(75,192,1)',
            },
        ],
    };

  const options = {
    indexAxis: chartVal==="Bar Chart(H)"?'y':'x',
      maintainAspectRatio: true,
    aspectRatio: 3,
      responsive:true,
      scales: {
          x: {
              grid: {
                  display: false, // Removes vertical grid lines
              },
          },
          y: {
              beginAtZero: true,
              grid: {
                  display: true, // Keeps horizontal grid lines
              },
              title: {
                  display: true,
                  text: 'USD', // Label for the vertical axis
              },
          },
      },
      plugins: {
            legend: {
                display: true,
                position: 'top',
                align: 'end',
                labels: {
                    usePointStyle: true,
                    pointStyle: 'circle',
                    boxWidth: 10,
                    boxHeight: 10,
                    padding: 20,
                },
            },
        },
    };

  const crypto = [
    "Ethreumn",
    "Bitcoin",
    "Tether",
    "Bacadian"
  ]

  const chartType = [
    "Line",
    "Bar Chart(H)",
    "Bar Chart(V)"
  ]
  // const dispatch=useAppDispatch()
  const changeCurrency = (ele: string) => {
    console.log(ele)
    // dispatch(changeTo(ele))
    setCrypto(ele)
    setCurrencyTypeOpen(!isCurrencyTypeOpen)
  }
  const changeChart = (ele: string) => {
    console.log("Hello")
    setChart(ele)
    setChartTypeOpen(!isChartTypeOpen);
  }
  useEffect(() => {
    let handler = (event:MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setChartTypeOpen(false)
        setCurrencyTypeOpen(false);
      }   
    }
    document.addEventListener("mousedown", handler)
    return () => {
      document.removeEventListener("mousedown",handler)
    }
  })
  return (
    <div className="flex flex-col py-4 px-6 space-y-2 h-full w-full bg-white rounded-md">
      <div className="basis-1/12 flex flex-col md:flex-row space-x-4">
        <div className="basis-2/4 text-center flex flex-row space-x-2 justify-end">
          <button className="bg-gray-100 py-1 px-3 w-12 rounded-lg font-semibold ">1D</button>
          <button className="bg-gray-100 py-1 px-3 w-12 rounded-lg font-semibold ">1W</button>
          <button className="bg-gray-100 py-1 px-3 w-12 rounded-lg font-semibold ">1M</button>
          <button className="bg-gray-100 py-1 px-3 w-12 rounded-lg font-semibold ">6M</button>
          <button className="bg-gray-100 py-1 px-3 w-12 rounded-lg font-semibold ">1Y</button>
          <button className="bg-gray-100 py-1 px-3 w-12 rounded-lg font-semibold ">C</button>
        </div>
        <div className="basis-2/4 self-end flex flex-row justify-center items-center space-x-2 h-full w-full" ref={dropdownRef}>
          <div className="basis-1/2 h-full w-full flex relative justify-center items-center" >
            <button onClick={() => setCurrencyTypeOpen(!isCurrencyTypeOpen)} className="h-full w-full flex items-center justify-around font-bold text-lg tracking-wider bg-gray-100 rounded-md p-2">
            {cryptoVal}
            {
              isCurrencyTypeOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4 transform -rotate-90">
                  <path fill-rule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clip-rule="evenodd" />
                </svg>
              ): (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4 transform rotate-90">
                  <path fill-rule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clip-rule="evenodd" />
                </svg>
              )
              }
            </button>
            {
              isCurrencyTypeOpen && 
              <div className="absolute bg-white shadow-xl top-full flex flex-col items-center rounded-md p-2 w-full h-40 overflow-auto">
                {
                  crypto.map((ele,i) => (
                    <div onClick={()=>changeCurrency(ele)}  key={i} className=" p-2 flex w-full justify-between hover:bg-red-300 cursor-pointer rounded-r-lg border-l-transparent hover:border-l-white border-l-4">
                      <h3 className="font-bold">{ele.toUpperCase()}</h3>
                    </div>
                  ))
                }
              </div>
            }
          </div>
          <div className="basis-1/2 h-full w-full flex relative justify-center items-center">
            <button onClick={() => setChartTypeOpen(!isChartTypeOpen)} className="h-full w-full flex items-center justify-around font-bold text-lg tracking-wider bg-gray-100 rounded-md p-2">
            {chartVal}
            {
              isChartTypeOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4 transform -rotate-90">
                  <path fill-rule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clip-rule="evenodd" />
                </svg>
              ): (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4 transform rotate-90">
                  <path fill-rule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clip-rule="evenodd" />
                </svg>
              )
              }
            </button>
            {
              isChartTypeOpen && 
              <div className="absolute bg-white shadow-xl top-full flex flex-col items-center rounded-md p-2 w-full h-40 overflow-auto">
                {
                  chartType.map((ele,i) => (
                    <div onClick={()=>changeChart(ele)}  key={i} className=" p-2 flex w-full justify-between hover:bg-red-300 cursor-pointer rounded-r-lg border-l-transparent hover:border-l-white border-l-4">
                      <h3 className="font-bold">{ele.toUpperCase()}</h3>
                    </div>
                  ))
                }
              </div>
            }
          </div>
        </div>
      </div>
      <div className="basis-11/12 ">
        {
          chartVal === "Line" ?
            (<Line data={data} options={options} />) :  
            (<Bar data={data} options={options} />)
        }
        
      </div>
    </div>
  );
}
import { Pie } from "react-chartjs-2"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { useEffect, useRef, useState } from "react";
import { useGetExchangeRatesQuery, useGetPortfolioDetailsQuery } from "../redux/cryptocurrency";

// Register the components to be used in the chart
ChartJS.register(ArcElement, Tooltip, Legend,ChartDataLabels);

interface Currency{
  name: string,
  unit: string,
  value: number,
  type: string
}

const dummy =  { name: 'Bitcoin', unit: 'BTC', value: 1, type: 'crypto' }
export const Analysis = () => {
  const [sell, isSellOpen] = useState(false)
  const [buy, isBuyOpen] = useState(false);
  const [currencySell, isCurrencySell] = useState(dummy);
  const [currencyBuy, isCurrencyBuy] = useState(dummy);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [input, setInput] = useState(0);
  // const [curr, setCurr] = useState([]);
  const [skip, setSkip] = useState(true);
  const[exchangeValue,setExchangeValue]=useState(1)
  // const { data, isLoading, error } = useGetExchangeRatesQuery('')
  const { data: marketCap, isLoading: loading, error: e } = useGetPortfolioDetailsQuery('')
//   let marketCap=[
//     {
//         "id": "bitcoin",
//         "symbol": "btc",
//         "name": "Bitcoin",
//         "image": "https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png?1696501400",
//         "current_price": 52717.366,
//         "market_cap": 1042850716564,
//         "market_cap_rank": 1,
//         "fully_diluted_valuation": 1109648097403,
//         "total_volume": 83783570656,
//         "high_24h": 61048,
//         "low_24h": 49221,
//         "price_change_24h": -7855.807232999294,
//         "price_change_percentage_24h": -12.96912,
//         "market_cap_change_24h": -152560188699.37585,
//         "market_cap_change_percentage_24h": -12.76215,
//         "circulating_supply": 19735865,
//         "total_supply": 21000000,
//         "max_supply": 21000000,
//         "ath": 73738,
//         "ath_change_percentage": -28.28468,
//         "ath_date": "2024-03-14T07:10:36.635Z",
//         "atl": 67.81,
//         "atl_change_percentage": 77885.81354,
//         "atl_date": "2013-07-06T00:00:00.000Z",
//         "roi": null,
//         "last_updated": "2024-08-05T09:11:23.489Z"
//     },
//     {
//         "id": "ethereum",
//         "symbol": "eth",
//         "name": "Ethereum",
//         "image": "https://coin-images.coingecko.com/coins/images/279/large/ethereum.png?1696501628",
//         "current_price": 2327.852,
//         "market_cap": 280836617183,
//         "market_cap_rank": 2,
//         "fully_diluted_valuation": 280836617183,
//         "total_volume": 52721971682,
//         "high_24h": 2922.79,
//         "low_24h": 2171.25,
//         "price_change_24h": -582.594866055209,
//         "price_change_percentage_24h": -20.01737,
//         "market_cap_change_24h": -69118674717.87701,
//         "market_cap_change_percentage_24h": -19.75072,
//         "circulating_supply": 120257536.972011,
//         "total_supply": 120257536.972011,
//         "max_supply": null,
//         "ath": 4878.26,
//         "ath_change_percentage": -52.24842,
//         "ath_date": "2021-11-10T14:24:19.604Z",
//         "atl": 0.432979,
//         "atl_change_percentage": 537904.62033,
//         "atl_date": "2015-10-20T00:00:00.000Z",
//         "roi": {
//             "times": 57.98142554771637,
//             "currency": "btc",
//             "percentage": 5798.142554771637
//         },
//         "last_updated": "2024-08-05T09:11:21.297Z"
//     },
//     {
//         "id": "tether",
//         "symbol": "usdt",
//         "name": "Tether",
//         "image": "https://coin-images.coingecko.com/coins/images/325/large/Tether.png?1696501661",
//         "current_price": 0.999,
//         "market_cap": 114541714254,
//         "market_cap_rank": 3,
//         "fully_diluted_valuation": 114541714254,
//         "total_volume": 92768826371,
//         "high_24h": 1.008,
//         "low_24h": 0.993766,
//         "price_change_24h": -0.001336784866899699,
//         "price_change_percentage_24h": -0.1337,
//         "market_cap_change_24h": 114996438,
//         "market_cap_change_percentage_24h": 0.1005,
//         "circulating_supply": 114527666301.096,
//         "total_supply": 114527666301.096,
//         "max_supply": null,
//         "ath": 1.32,
//         "ath_change_percentage": -24.12515,
//         "ath_date": "2018-07-24T00:00:00.000Z",
//         "atl": 0.572521,
//         "atl_change_percentage": 75.34669,
//         "atl_date": "2015-03-02T00:00:00.000Z",
//         "roi": null,
//         "last_updated": "2024-08-05T09:11:21.863Z"
//     },
//     {
//         "id": "binancecoin",
//         "symbol": "bnb",
//         "name": "BNB",
//         "image": "https://coin-images.coingecko.com/coins/images/825/large/bnb-icon2_2x.png?1696501970",
//         "current_price": 445.614,
//         "market_cap": 65174451515,
//         "market_cap_rank": 4,
//         "fully_diluted_valuation": 65174451515,
//         "total_volume": 3468260192,
//         "high_24h": 527.78,
//         "low_24h": 404.51,
//         "price_change_24h": -80.59288009333198,
//         "price_change_percentage_24h": -15.31582,
//         "market_cap_change_24h": -11448460865.242622,
//         "market_cap_change_percentage_24h": -14.9413,
//         "circulating_supply": 145887575.79,
//         "total_supply": 145887575.79,
//         "max_supply": 200000000,
//         "ath": 717.48,
//         "ath_change_percentage": -38.10639,
//         "ath_date": "2024-06-06T14:10:59.816Z",
//         "atl": 0.0398177,
//         "atl_change_percentage": 1115161.42921,
//         "atl_date": "2017-10-19T00:00:00.000Z",
//         "roi": null,
//         "last_updated": "2024-08-05T09:11:24.159Z"
//     },
//     {
//         "id": "solana",
//         "symbol": "sol",
//         "name": "Solana",
//         "image": "https://coin-images.coingecko.com/coins/images/4128/large/solana.png?1718769756",
//         "current_price": 121.013,
//         "market_cap": 56511715425,
//         "market_cap_rank": 5,
//         "fully_diluted_valuation": 70598938855,
//         "total_volume": 12722441588,
//         "high_24h": 144.79,
//         "low_24h": 112.01,
//         "price_change_24h": -21.673875758369206,
//         "price_change_percentage_24h": -15.18985,
//         "market_cap_change_24h": -9734656204.185661,
//         "market_cap_change_percentage_24h": -14.69463,
//         "circulating_supply": 465592849.383726,
//         "total_supply": 581655694.888404,
//         "max_supply": null,
//         "ath": 259.96,
//         "ath_change_percentage": -53.4715,
//         "ath_date": "2021-11-06T21:54:35.825Z",
//         "atl": 0.500801,
//         "atl_change_percentage": 24052.32431,
//         "atl_date": "2020-05-11T19:35:23.449Z",
//         "roi": null,
//         "last_updated": "2024-08-05T09:10:35.843Z"
//     }
// ]
  // console.log(marketCap)
  let curr: Currency[] = [
    {
        "name": "Bitcoin",
        "unit": "BTC",
        "value": 1,
        "type": "crypto"
    },
    {
        "name": "Ether",
        "unit": "ETH",
        "value": 22.663,
        "type": "crypto"
    },
    {
        "name": "Litecoin",
        "unit": "LTC",
        "value": 986.546,
        "type": "crypto"
    },
    {
        "name": "Bitcoin Cash",
        "unit": "BCH",
        "value": 177.31,
        "type": "crypto"
    },
    {
        "name": "Binance Coin",
        "unit": "BNB",
        "value": 118.352,
        "type": "crypto"
    },
    {
        "name": "EOS",
        "unit": "EOS",
        "value": 121686.448,
        "type": "crypto"
    },
    {
        "name": "XRP",
        "unit": "XRP",
        "value": 113031.937,
        "type": "crypto"
    },
    {
        "name": "Lumens",
        "unit": "XLM",
        "value": 641624.853,
        "type": "crypto"
    },
    {
        "name": "Chainlink",
        "unit": "LINK",
        "value": 5917.69,
        "type": "crypto"
    },
    {
        "name": "Polkadot",
        "unit": "DOT",
        "value": 13395.5,
        "type": "crypto"
    },
    {
        "name": "Yearn.finance",
        "unit": "YFI",
        "value": 11.232,
        "type": "crypto"
    },
    {
        "name": "US Dollar",
        "unit": "$",
        "value": 52768.334,
        "type": "fiat"
    },
    {
        "name": "United Arab Emirates Dirham",
        "unit": "DH",
        "value": 193820.732,
        "type": "fiat"
    },
    {
        "name": "Argentine Peso",
        "unit": "$",
        "value": 49246496.902,
        "type": "fiat"
    },
    {
        "name": "Australian Dollar",
        "unit": "A$",
        "value": 81843.318,
        "type": "fiat"
    },
    {
        "name": "Bangladeshi Taka",
        "unit": "৳",
        "value": 6147329.978,
        "type": "fiat"
    },
    {
        "name": "Bahraini Dinar",
        "unit": "BD",
        "value": 19886.855,
        "type": "fiat"
    },
    {
        "name": "Bermudian Dollar",
        "unit": "$",
        "value": 52768.334,
        "type": "fiat"
    },
    {
        "name": "Brazil Real",
        "unit": "R$",
        "value": 302262.299,
        "type": "fiat"
    },
    {
        "name": "Canadian Dollar",
        "unit": "CA$",
        "value": 73262.659,
        "type": "fiat"
    },
    {
        "name": "Swiss Franc",
        "unit": "Fr.",
        "value": 44886.434,
        "type": "fiat"
    },
    {
        "name": "Chilean Peso",
        "unit": "CLP$",
        "value": 49826931.965,
        "type": "fiat"
    },
    {
        "name": "Chinese Yuan",
        "unit": "¥",
        "value": 376597.053,
        "type": "fiat"
    },
    {
        "name": "Czech Koruna",
        "unit": "Kč",
        "value": 1219577.062,
        "type": "fiat"
    },
    {
        "name": "Danish Krone",
        "unit": "kr.",
        "value": 359640.634,
        "type": "fiat"
    },
    {
        "name": "Euro",
        "unit": "€",
        "value": 48196.855,
        "type": "fiat"
    },
    {
        "name": "British Pound Sterling",
        "unit": "£",
        "value": 41359.979,
        "type": "fiat"
    },
    {
        "name": "Georgian Lari",
        "unit": "₾",
        "value": 142738.346,
        "type": "fiat"
    },
    {
        "name": "Hong Kong Dollar",
        "unit": "HK$",
        "value": 410642.866,
        "type": "fiat"
    },
    {
        "name": "Hungarian Forint",
        "unit": "Ft",
        "value": 19196327.321,
        "type": "fiat"
    },
    {
        "name": "Indonesian Rupiah",
        "unit": "Rp",
        "value": 853523644.588,
        "type": "fiat"
    },
    {
        "name": "Israeli New Shekel",
        "unit": "₪",
        "value": 201292.781,
        "type": "fiat"
    },
    {
        "name": "Indian Rupee",
        "unit": "₹",
        "value": 4422182.19,
        "type": "fiat"
    },
    {
        "name": "Japanese Yen",
        "unit": "¥",
        "value": 7512172.726,
        "type": "fiat"
    },
    {
        "name": "South Korean Won",
        "unit": "₩",
        "value": 72011234.489,
        "type": "fiat"
    },
    {
        "name": "Kuwaiti Dinar",
        "unit": "KD",
        "value": 16107.428,
        "type": "fiat"
    },
    {
        "name": "Sri Lankan Rupee",
        "unit": "Rs",
        "value": 15792082.723,
        "type": "fiat"
    },
    {
        "name": "Burmese Kyat",
        "unit": "K",
        "value": 110707966.822,
        "type": "fiat"
    },
    {
        "name": "Mexican Peso",
        "unit": "MX$",
        "value": 1042107.072,
        "type": "fiat"
    },
    {
        "name": "Malaysian Ringgit",
        "unit": "RM",
        "value": 233763.724,
        "type": "fiat"
    },
    {
        "name": "Nigerian Naira",
        "unit": "₦",
        "value": 84980237.411,
        "type": "fiat"
    },
    {
        "name": "Norwegian Krone",
        "unit": "kr",
        "value": 583514.253,
        "type": "fiat"
    },
    {
        "name": "New Zealand Dollar",
        "unit": "NZ$",
        "value": 89082.395,
        "type": "fiat"
    },
    {
        "name": "Philippine Peso",
        "unit": "₱",
        "value": 3051750.801,
        "type": "fiat"
    },
    {
        "name": "Pakistani Rupee",
        "unit": "₨",
        "value": 14570403.212,
        "type": "fiat"
    },
    {
        "name": "Polish Zloty",
        "unit": "zł",
        "value": 207823.707,
        "type": "fiat"
    },
    {
        "name": "Russian Ruble",
        "unit": "₽",
        "value": 4490665.832,
        "type": "fiat"
    },
    {
        "name": "Saudi Riyal",
        "unit": "SR",
        "value": 198087.844,
        "type": "fiat"
    },
    {
        "name": "Swedish Krona",
        "unit": "kr",
        "value": 558532.773,
        "type": "fiat"
    },
    {
        "name": "Singapore Dollar",
        "unit": "S$",
        "value": 69727.55,
        "type": "fiat"
    },
    {
        "name": "Thai Baht",
        "unit": "฿",
        "value": 1861297.48,
        "type": "fiat"
    },
    {
        "name": "Turkish Lira",
        "unit": "₺",
        "value": 1758810.82,
        "type": "fiat"
    },
    {
        "name": "New Taiwan Dollar",
        "unit": "NT$",
        "value": 1723070.826,
        "type": "fiat"
    },
    {
        "name": "Ukrainian hryvnia",
        "unit": "₴",
        "value": 2158676.545,
        "type": "fiat"
    },
    {
        "name": "Venezuelan bolívar fuerte",
        "unit": "Bs.F",
        "value": 5283.693,
        "type": "fiat"
    },
    {
        "name": "Vietnamese đồng",
        "unit": "₫",
        "value": 1324672837.407,
        "type": "fiat"
    },
    {
        "name": "South African Rand",
        "unit": "R",
        "value": 977749.755,
        "type": "fiat"
    },
    {
        "name": "IMF Special Drawing Rights",
        "unit": "XDR",
        "value": 39440.161,
        "type": "fiat"
    },
    {
        "name": "Silver - Troy Ounce",
        "unit": "XAG",
        "value": 1899.498,
        "type": "commodity"
    },
    {
        "name": "Gold - Troy Ounce",
        "unit": "XAU",
        "value": 21.76,
        "type": "commodity"
    },
    {
        "name": "Bits",
        "unit": "μBTC",
        "value": 1000000,
        "type": "crypto"
    },
    {
        "name": "Satoshi",
        "unit": "sats",
        "value": 100000000,
        "type": "crypto"
    }
]
  // if(!isLoading){
  //   curr = Object.values(data?.rates);
  //   console.log(curr);
  //   // console.log(curr);
  // }
  useEffect(() => {
    // Trigger the query only once by setting `skip` to false
    setSkip(false);
  }, []);
  const pieData = {
    labels: marketCap?.map((ele) => {
      return ele.name
    }),
    datasets: [
      {
        label: 'Market_Cap($)',
        data: marketCap?.map((ele) => {
          return ele.market_cap
        }),
        backgroundColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          '#60b583',
          '#90120190',
          '#100100150'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          '#60b583',
          '#90120190',
          '#100100150'
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "right",
        labels: {
          usePointStyle: true,
          useBorderRadius: true,
          borderRadius:20,
          padding: 20,
          textAlign:'left',
          font: {
            size: 14, // Increase font size
          },
          color: 'black',
          pointStyleWidth:20
        },
      },
      tooltip: {
        enabled: true, // Disable tooltips
      },
      datalabels: {
        display:false
        // color: '#f5faf7',
        // font: {
        //   weight: 'bold',
        //   size: 15,
        // },
        // formatter: (value, context) => {
        //   console.log(value)
        //   console.log(context)
        //   return `$${context.chart.legend}`;
        // },
      },
      layout: {
      padding: {
        right: 50, // Adjust the value to increase space between the legend and the chart
      },
    },
      
    },
  };  
  
  const onCurrencySell = (ele:Currency) => {
    isSellOpen(!sell)
    isCurrencySell(ele)
  }
  const onCurrencyBuy = (ele:Currency) => {
    isBuyOpen(!buy)
    isCurrencyBuy(ele)
  }
  useEffect(() => {
    let handler = (event:MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        isSellOpen(false)
        isBuyOpen(false);
      }   
    }
    document.addEventListener("mousedown", handler)
    return () => {
      document.removeEventListener("mousedown",handler)
    }
  })
  const doExchange = () => {
    const val = Number(input) / (currencySell.value);
    const result = val * Number(currencyBuy.value);
    setExchangeValue(Number(result.toPrecision(2)));
  }
  const saveInput = (e) => {
    if (!Number(e.target.value)) {
      console.log("Enter Valid value")
      return 
    }
    setInput(e.target.value)
    console.log(e.target.value)
  }
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-4">
      <div className="basis-1/2 rounded-md p-5 space-y-4 shadow-md bg-white">
        <div className="flex flex-col md:flex-row justify-between">
          <p className="text-xl font-bold ">Portfolio</p>
          <p className="text-gray-400 font-sans">Total Value <span className="text-black font-bold">${marketCap?.reduce((acc, curr) =>acc + Number(curr.market_cap),0 )}</span></p>
        </div>
        <div className="flex px-2 lg:p-4 justify-center">
          <Pie data={pieData} options={options} />
        </div>
      </div>
      <div className="basis-1/2 flex flex-col rounded-md p-5 space-y-4 shadow-md bg-white" ref={dropdownRef}>
        <div className="basis-1/4">
          <p className="text-xl font-bold ">Exchange Coins</p>
        </div>
        <div className="basis-1/4 flex flex-row">
          
          <p className="basis-1/2 self-center flex flex-row justify-around items-center relative">
            
              <span className="text-orange-400 font-medium">Sell </span>
              <button  onClick={()=>isSellOpen(!sell)} className="w-3/4 h-full flex items-center justify-around font-bold text-lg tracking-wider bg-gray-100 rounded-md p-2 m-1">
              {currencySell.name}
                {
                  sell ? (
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
              sell && 
              <div className="absolute bg-white shadow-xl top-0 transform -translate-y-full flex flex-col items-center rounded-md p-2 w-full h-32 overflow-auto">
                {
                  curr.map((ele:Currency,i) => (
                    <div onClick={()=>onCurrencySell(ele)}  key={i} className=" p-2 flex w-full justify-between hover:bg-red-300 cursor-pointer rounded-r-lg border-l-transparent hover:border-l-white border-l-4">
                      <h3 className="font-bold">{ele.name}</h3>
                    </div>
                  ))
                }
              </div>
            }
            </p>
            <p className="basis-1/2">
              <label className="text-sm text-gray-500 block pb-1">Enter value</label>
              <input type="text" onChange={(e)=>saveInput(e)} className="outline-none border-2 rounded-md p-1 text-center w-full md:w-1/2" placeholder="Amount 0.00" />
            </p>
        </div>
        <div className="basis-1/4 flex flex-row " >
            <p className="basis-1/2 self-center flex flex-row justify-around items-center relative">
              <span className="text-green-700 font-medium">Buy </span>
            <button onClick={()=>isBuyOpen(!buy)} className="w-3/4 h-full flex items-center justify-around font-bold text-lg tracking-wider bg-gray-100 rounded-md p-2 m-1">
              {currencyBuy.name}
              {
                buy ? (
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
              buy && 
              <div className="absolute bg-white shadow-xl top-0 transform -translate-y-full flex flex-col items-center rounded-md p-2 w-full h-32 overflow-auto">
                {
                  curr.map((ele:Currency,i) => (
                    <div onClick={()=>onCurrencyBuy(ele)}  key={i} className=" p-2 flex w-full justify-between hover:bg-red-300 cursor-pointer rounded-r-lg border-l-transparent hover:border-l-white border-l-4">
                      <h3 className="font-bold text-wrap">{ele.name}</h3>
                    </div>
                  ))
                }
              </div>
            }
            </p>
            <p className="basis-1/2 text-green-700 font-medium self-center">
            {exchangeValue} { currencyBuy.unit}
            </p>
          
        </div>
        <div className="basis-1/4 self-center">
          <button
            onClick={()=>doExchange()}
            type="button"
            className="py-2 px-5 bg-blue-600 outline-none rounded-md text-white font-sans">
            Exchange
          </button>
        </div>
      </div>
    </div>
  )
}

import { cryptoCurrency, useGetMarketCapQuery } from "../redux/cryptocurrency"




export const MarketCap = () => {
  // const { data, isLoading, error } = useGetMarketCapQuery('coins/markets')
  // console.log(data);
  // console.log(error)
  const data = [{
    "id": "bitcoin",
    "symbol": "btc",
    "name": "Bitcoin",
    "image": "https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png?1696501400",
    "current_price": 64277,
    "market_cap": 1268060700130,
    "market_cap_rank": 1,
    "fully_diluted_valuation": 1349378010130,
    "total_volume": 39156853437,
    "high_24h": 65505,
    "low_24h": 62304,
    "price_change_24h": 175.62,
    "price_change_percentage_24h": 0.27398,
    "market_cap_change_24h": 3580940369,
    "market_cap_change_percentage_24h": 0.28319,
    "circulating_supply": 19734481,
    "total_supply": 21000000,
    "max_supply": 21000000,
    "ath": 73738,
    "ath_change_percentage": -12.90797,
    "ath_date": "2024-03-14T07:10:36.635Z",
    "atl": 67.81,
    "atl_change_percentage": 94606.99081,
    "atl_date": "2013-07-06T00:00:00.000Z",
    "roi": null,
    "last_updated": "2024-08-02T05:36:46.182Z"
  },
  {
    "id": "bitcoin",
    "symbol": "btc",
    "name": "Bitcoin",
    "image": "https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png?1696501400",
    "current_price": 64277,
    "market_cap": 1268060700130,
    "market_cap_rank": 1,
    "fully_diluted_valuation": 1349378010130,
    "total_volume": 39156853437,
    "high_24h": 65505,
    "low_24h": 62304,
    "price_change_24h": 175.62,
    "price_change_percentage_24h": 0.27398,
    "market_cap_change_24h": 3580940369,
    "market_cap_change_percentage_24h": 0.28319,
    "circulating_supply": 19734481,
    "total_supply": 21000000,
    "max_supply": 21000000,
    "ath": 73738,
    "ath_change_percentage": -12.90797,
    "ath_date": "2024-03-14T07:10:36.635Z",
    "atl": 67.81,
    "atl_change_percentage": 94606.99081,
    "atl_date": "2013-07-06T00:00:00.000Z",
    "roi": null,
    "last_updated": "2024-08-02T05:36:46.182Z"
    },
  {
    "id": "bitcoin",
    "symbol": "btc",
    "name": "Bitcoin",
    "image": "https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png?1696501400",
    "current_price": 64277,
    "market_cap": 1268060700130,
    "market_cap_rank": 1,
    "fully_diluted_valuation": 1349378010130,
    "total_volume": 39156853437,
    "high_24h": 65505,
    "low_24h": 62304,
    "price_change_24h": 175.62,
    "price_change_percentage_24h": 0.27398,
    "market_cap_change_24h": 3580940369,
    "market_cap_change_percentage_24h": 0.28319,
    "circulating_supply": 19734481,
    "total_supply": 21000000,
    "max_supply": 21000000,
    "ath": 73738,
    "ath_change_percentage": -12.90797,
    "ath_date": "2024-03-14T07:10:36.635Z",
    "atl": 67.81,
    "atl_change_percentage": 94606.99081,
    "atl_date": "2013-07-06T00:00:00.000Z",
    "roi": null,
    "last_updated": "2024-08-02T05:36:46.182Z"
    },
  {
    "id": "bitcoin",
    "symbol": "btc",
    "name": "Bitcoin",
    "image": "https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png?1696501400",
    "current_price": 64277,
    "market_cap": 1268060700130,
    "market_cap_rank": 1,
    "fully_diluted_valuation": 1349378010130,
    "total_volume": 39156853437,
    "high_24h": 65505,
    "low_24h": 62304,
    "price_change_24h": 175.62,
    "price_change_percentage_24h": 0.27398,
    "market_cap_change_24h": 3580940369,
    "market_cap_change_percentage_24h": 0.28319,
    "circulating_supply": 19734481,
    "total_supply": 21000000,
    "max_supply": 21000000,
    "ath": 73738,
    "ath_change_percentage": -12.90797,
    "ath_date": "2024-03-14T07:10:36.635Z",
    "atl": 67.81,
    "atl_change_percentage": 94606.99081,
    "atl_date": "2013-07-06T00:00:00.000Z",
    "roi": null,
    "last_updated": "2024-08-02T05:36:46.182Z"
    },
  {
    "id": "bitcoin",
    "symbol": "btc",
    "name": "Bitcoin",
    "image": "https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png?1696501400",
    "current_price": 64277,
    "market_cap": 1268060700130,
    "market_cap_rank": 1,
    "fully_diluted_valuation": 1349378010130,
    "total_volume": 39156853437,
    "high_24h": 65505,
    "low_24h": 62304,
    "price_change_24h": 175.62,
    "price_change_percentage_24h": 0.27398,
    "market_cap_change_24h": 3580940369,
    "market_cap_change_percentage_24h": -0.28319,
    "circulating_supply": 19734481,
    "total_supply": 21000000,
    "max_supply": 21000000,
    "ath": 73738,
    "ath_change_percentage": -12.90797,
    "ath_date": "2024-03-14T07:10:36.635Z",
    "atl": 67.81,
    "atl_change_percentage": 94606.99081,
    "atl_date": "2013-07-06T00:00:00.000Z",
    "roi": null,
    "last_updated": "2024-08-02T05:36:46.182Z"
    },
  {
    "id": "bitcoin",
    "symbol": "btc",
    "name": "Bitcoin",
    "image": "https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png?1696501400",
    "current_price": 64277,
    "market_cap": 1268060700130,
    "market_cap_rank": 1,
    "fully_diluted_valuation": 1349378010130,
    "total_volume": 39156853437,
    "high_24h": 65505,
    "low_24h": 62304,
    "price_change_24h": 175.62,
    "price_change_percentage_24h": 0.27398,
    "market_cap_change_24h": 3580940369,
    "market_cap_change_percentage_24h": -0.28319,
    "circulating_supply": 19734481,
    "total_supply": 21000000,
    "max_supply": 21000000,
    "ath": 73738,
    "ath_change_percentage": -12.90797,
    "ath_date": "2024-03-14T07:10:36.635Z",
    "atl": 67.81,
    "atl_change_percentage": 94606.99081,
    "atl_date": "2013-07-06T00:00:00.000Z",
    "roi": null,
    "last_updated": "2024-08-02T05:36:46.182Z"
    },
  {
    "id": "bitcoin",
    "symbol": "btc",
    "name": "Bitcoin",
    "image": "https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png?1696501400",
    "current_price": 64277,
    "market_cap": 1268060700130,
    "market_cap_rank": 1,
    "fully_diluted_valuation": 1349378010130,
    "total_volume": 39156853437,
    "high_24h": 65505,
    "low_24h": 62304,
    "price_change_24h": 175.62,
    "price_change_percentage_24h": 0.27398,
    "market_cap_change_24h": 3580940369,
    "market_cap_change_percentage_24h": -0.28319,
    "circulating_supply": 19734481,
    "total_supply": 21000000,
    "max_supply": 21000000,
    "ath": 73738,
    "ath_change_percentage": -12.90797,
    "ath_date": "2024-03-14T07:10:36.635Z",
    "atl": 67.81,
    "atl_change_percentage": 94606.99081,
    "atl_date": "2013-07-06T00:00:00.000Z",
    "roi": null,
    "last_updated": "2024-08-02T05:36:46.182Z"
    },
  {
    "id": "bitcoin",
    "symbol": "btc",
    "name": "Bitcoin",
    "image": "https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png?1696501400",
    "current_price": 64277,
    "market_cap": 1268060700130,
    "market_cap_rank": 1,
    "fully_diluted_valuation": 1349378010130,
    "total_volume": 39156853437,
    "high_24h": 65505,
    "low_24h": 62304,
    "price_change_24h": 175.62,
    "price_change_percentage_24h": 0.27398,
    "market_cap_change_24h": 3580940369,
    "market_cap_change_percentage_24h": -0.28319,
    "circulating_supply": 19734481,
    "total_supply": 21000000,
    "max_supply": 21000000,
    "ath": 73738,
    "ath_change_percentage": -12.90797,
    "ath_date": "2024-03-14T07:10:36.635Z",
    "atl": 67.81,
    "atl_change_percentage": 94606.99081,
    "atl_date": "2013-07-06T00:00:00.000Z",
    "roi": null,
    "last_updated": "2024-08-02T05:36:46.182Z"
    },
  {
    "id": "bitcoin",
    "symbol": "btc",
    "name": "Bitcoin",
    "image": "https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png?1696501400",
    "current_price": 64277,
    "market_cap": 1268060700130,
    "market_cap_rank": 1,
    "fully_diluted_valuation": 1349378010130,
    "total_volume": 39156853437,
    "high_24h": 65505,
    "low_24h": 62304,
    "price_change_24h": 175.62,
    "price_change_percentage_24h": 0.27398,
    "market_cap_change_24h": 3580940369,
    "market_cap_change_percentage_24h": -0.28319,
    "circulating_supply": 19734481,
    "total_supply": 21000000,
    "max_supply": 21000000,
    "ath": 73738,
    "ath_change_percentage": -12.90797,
    "ath_date": "2024-03-14T07:10:36.635Z",
    "atl": 67.81,
    "atl_change_percentage": 94606.99081,
    "atl_date": "2013-07-06T00:00:00.000Z",
    "roi": null,
    "last_updated": "2024-08-02T05:36:46.182Z"
    },
  {
    "id": "bitcoin",
    "symbol": "btc",
    "name": "Bitcoin",
    "image": "https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png?1696501400",
    "current_price": 64277,
    "market_cap": 1268060700130,
    "market_cap_rank": 1,
    "fully_diluted_valuation": 1349378010130,
    "total_volume": 39156853437,
    "high_24h": 65505,
    "low_24h": 62304,
    "price_change_24h": 175.62,
    "price_change_percentage_24h": 0.27398,
    "market_cap_change_24h": 3580940369,
    "market_cap_change_percentage_24h": -0.28319,
    "circulating_supply": 19734481,
    "total_supply": 21000000,
    "max_supply": 21000000,
    "ath": 73738,
    "ath_change_percentage": -12.90797,
    "ath_date": "2024-03-14T07:10:36.635Z",
    "atl": 67.81,
    "atl_change_percentage": 94606.99081,
    "atl_date": "2013-07-06T00:00:00.000Z",
    "roi": null,
    "last_updated": "2024-08-02T05:36:46.182Z"
    },
  {
    "id": "bitcoin",
    "symbol": "btc",
    "name": "Bitcoin",
    "image": "https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png?1696501400",
    "current_price": 64277,
    "market_cap": 1268060700130,
    "market_cap_rank": 1,
    "fully_diluted_valuation": 1349378010130,
    "total_volume": 39156853437,
    "high_24h": 65505,
    "low_24h": 62304,
    "price_change_24h": 175.62,
    "price_change_percentage_24h": 0.27398,
    "market_cap_change_24h": 3580940369,
    "market_cap_change_percentage_24h": 0.28319,
    "circulating_supply": 19734481,
    "total_supply": 21000000,
    "max_supply": 21000000,
    "ath": 73738,
    "ath_change_percentage": -12.90797,
    "ath_date": "2024-03-14T07:10:36.635Z",
    "atl": 67.81,
    "atl_change_percentage": 94606.99081,
    "atl_date": "2013-07-06T00:00:00.000Z",
    "roi": null,
    "last_updated": "2024-08-02T05:36:46.182Z"
  }]
  return (
    <div className="h-full w-full overflow-auto shadow-xl bg-white rounded-md">
      <p className="text-center m-2 text-wrap font-bold text-lg">Cryptocurrency by market cap</p>

      <ul role="list" className="divide-y divide-gray-100 px-4 ">
      {data.map((person:any,index:any) => (
        <li key={index} className="flex justify-between py-5 ">
          <div className="flex min-w-0 gap-x-4">
            <img alt="" src={person.image} className="h-12 w-12 flex-none rounded-full bg-gray-50" />
            <div className="min-w-0 flex-auto">
              <p className="text-md font-semibold leading-6 text-gray-900">{person.name}</p>
              <p className="mt-1 truncate text-sm leading-5 text-gray-500">Mkt.Cap ${person.market_cap}</p>
            </div>
          </div>
          <div className="shrink-0 flex flex-col items-end">
            {
              person.market_cap_change_percentage_24h > 0 ?
                <p className="mt-1 text-sm leading-5 text-gray-500 ">
                  <span className="flex flex-row items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4 transform -rotate-90 animate-glitter text-green-700 ">
                    <path fill-rule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clip-rule="evenodd" />
                  </svg>
                {(person.market_cap_change_percentage_24h * 100).toFixed(2)}%
                </span>
              </p>
                :
                <p className="mt-1 text-sm leading-5 text-gray-500 ">
                <span className="flex flex-row items-stretch">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4 transform rotate-90 animate-glitter text-red-600 ">
                    <path fill-rule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clip-rule="evenodd" />
                  </svg>
                {(person.market_cap_change_percentage_24h * 100).toFixed(2)}%
                </span>
              </p>
            }
          </div>
        </li>
      ))}
    </ul>
    </div>
    // <></>
  )
}


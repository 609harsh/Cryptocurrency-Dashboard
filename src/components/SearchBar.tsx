import { useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "../redux/hooks"
import { changeTo } from "../redux/currencySlice"

const curr=[
  "btc",
  "eth",
  "ltc",
  "bch",
  "bnb",
  "eos",
  "xrp",
  "xlm",
  "link",
  "dot",
  "yfi",
  "usd",
  "aed",
  "ars",
  "aud",
  "bdt",
  "bhd",
  "bmd",
  "brl",
  "cad",
  "chf",
  "clp",
  "cny",
  "czk",
  "dkk",
  "eur",
  "gbp",
  "gel",
  "hkd",
  "huf",
  "idr",
  "ils",
  "inr",
  "jpy",
  "krw",
  "kwd",
  "lkr",
  "mmk",
  "mxn",
  "myr",
  "ngn",
  "nok",
  "nzd",
  "php",
  "pkr",
  "pln",
  "rub",
  "sar",
  "sek",
  "sgd",
  "thb",
  "try",
  "twd",
  "uah",
  "vef",
  "vnd",
  "zar",
  "xdr",
  "xag",
  "xau",
  "bits",
  "sats"
]

export const SearchBar = () => {
  const currency = useAppSelector(state => state.currency.value)
  const dispatch=useAppDispatch()
  const [isOpen, setIsOpen] = useState(false)
  const changeCurrency = (ele: string) => {
    console.log(ele)
    dispatch(changeTo(ele))
    setIsOpen(!isOpen)
  }
  
  useEffect(() => {
    let handler = () => {
      setIsOpen(false)
    }
    document.addEventListener("mousedown", handler)
    return () => {
      document.removeEventListener("mousedown",handler)
    }
  })
  return (
    <div className="flex flex-row h-full w-full space-x-3 ">
      <div className="basis-1/6 bg-gray-100 font-bold relative flex flex-col items-center rounded-lg outline-none border-gray-300 border-2">
        <button onClick={() => setIsOpen(!isOpen)} className="w-full h-full flex items-center justify-around font-bold text-lg tracking-wider">
          {currency.toUpperCase()}
          {
            isOpen ? (
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
          isOpen && 
          <div className="absolute bg-white shadow-xl top-full flex flex-col items-center rounded-md p-2 w-full h-40 overflow-auto">
            {
              curr.map((ele,i) => (
                <div onClick={()=>changeCurrency(ele)}  key={i} className=" p-4 flex w-full justify-between hover:bg-red-300 cursor-pointer rounded-r-lg border-l-transparent hover:border-l-white border-l-4">
                  <h3 className="font-bold">{ele.toUpperCase()}</h3>
                </div>
              ))
            }
          </div>
        }
      </div>
      <div className="basis-5/6 border-2 rounded-lg flex flex-row justify-center items-center p-2 px-4 bg-white">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-gray-500" >
          <path fill-rule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clip-rule="evenodd" />
        </svg>
        <input className="h-full w-full px-2 placeholder-slate-500 outline-none" type='text' placeholder="Search by coin"/>
      </div>
    </div>
    
  )
}
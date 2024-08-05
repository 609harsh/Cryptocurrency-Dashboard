import { Analysis } from "./Analysis"
import { CurrencyGraph } from "./CurrencyGraph"
import { SearchBar } from "./SearchBar"


export const InfoLayout = () => {
  return (
    <div className="flex flex-col space-y-2 h-full w-full">
      <div className="basis-1/12 shadow-sm">
        <SearchBar/>
      </div >
      <div className="basis-7/12 shadow-sm">
        <CurrencyGraph/>
      </div>
      <div className="basis-4/12 shadow-sm">
        <Analysis/>
      </div>
    </div>
  )
}
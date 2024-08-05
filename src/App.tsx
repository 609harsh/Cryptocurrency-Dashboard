
import { InfoLayout } from './components/InfoLayout';
import { MarketCap } from './components/MarketCap';


function App() {
  return (
    <div className="flex flex-col lg:flex-row p-4 lg:p-14 max-h-screen  bg-gradient-to-r from-blue-100 via-cyan-100 to-blue-100">
      <div className="basis-3/4 mr-5">
        <InfoLayout/>
      </div>
      <div className="basis-1/4 ">
        <MarketCap/>
      </div>
    </div>
  )
}

export default App

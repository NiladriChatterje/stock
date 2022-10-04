import { AutoComplete } from "../components/AutoComplete"
import { StockList } from "../components/StockList";
import X from './X.png'
export const StockOverviewPage = () => {
  return <div>
    <div className="text-center">
      <h1>Trade - <img src={X} alt='X' height='15%' width='5%' /></h1>
    </div>
    <AutoComplete />
    <StockList />
  </div>
}
import AdditionalServices from "./additional-services/AdditionalServices";
import CalculatorCleaning from "./calculator-cleaning/CalculatorCleaning";
import CalculatorStock from "./calculator-stock/CalculatorStock";
import "./CalculatorMain.scss";

const CalculatorMain = () => {
  return (
    <>
      <div className="calculator">
        <CalculatorCleaning />
        <AdditionalServices />
        <CalculatorStock />
      </div>
    </>
  )
}

export default CalculatorMain;
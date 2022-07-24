import AdditionalServices from "./additional-services/AdditionalServices";
import CalculatorCleaning from "./calculator-cleaning/CalculatorCleaning";
import CalculatorStock from "./calculator-stock/CalculatorStock";
import "./CalculatorMain.scss";

const CalculatorMain = ({ optionCleaning, servicesCleaning }) => {

  return (
    <>
      <div className="calculator">
        <CalculatorCleaning optionCleaning={optionCleaning} />
        <AdditionalServices servicesCleaning={servicesCleaning} />


        <CalculatorStock />
      </div>
    </>
  )
}

export default CalculatorMain;
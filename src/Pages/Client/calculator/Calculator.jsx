import CalculatorMain from "../../../components/client/calculator/CalculatorMain";
import CalculatorData from "../../../components/client/calculator/calculator-data/CalculatorData";
import "./Calculator.scss";
import { useState, useEffect } from "react";

const Calculator = () => {
  // Состояние выбранных опций
  const [optionCleaning, setOptionCleaning] = useState({
    cleaningType: 0,
    roomType: 0
  });

  // Состояние добавленных услуг
  const [servicesCleaning, setServicesCleaning] = useState([]);

  useEffect(() => {
    console.log(servicesCleaning);
  }, [servicesCleaning]);

  return (
    <section className="calculator__main">
      <CalculatorMain servicesCleaning={{ servicesCleaning, setServicesCleaning }} optionCleaning={{ optionCleaning, setOptionCleaning }} />
      <CalculatorData servicesCleaning={servicesCleaning} optionCleaning={optionCleaning} />
    </section>
  )
}

export default Calculator;
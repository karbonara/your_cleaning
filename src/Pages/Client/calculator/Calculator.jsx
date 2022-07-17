import CalculatorMain from "../../../components/client/calculator/CalculatorMain";
import CalculatorData from "../../../components/client/calculator/calculator-data/CalculatorData";
import "./Calculator.scss";

const Calculator = () => {
    return (
        <section className="calculator__main">
            <CalculatorMain />
            <CalculatorData />
        </section>
    )
}

export default Calculator;
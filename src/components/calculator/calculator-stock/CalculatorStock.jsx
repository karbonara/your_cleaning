import BoxSmallImg from "../../../assets/img-services/boxSmall.svg";
import BoxBigImg from "../../../assets/img-services/boxBig.svg";
import { useState } from "react";
import "./CalculatorStock.scss";

const CalculatorStock = () => {
  // Выбор услуги
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index)
  };

  return (
    <div>
      <div className="calculator-stock__title">Оказание услуги можно завершить в любой момент.</div>
      <div className="calculator-stock__tabs">
        <div
          onClick={() => toggleTab(1)}
          className={toggleState === 1 ? "tab tab__active" : "tab"}
        >
          Габаритное хранение</div>
        <div
          onClick={() => toggleTab(2)}
          className={toggleState === 2 ? "tab tab__active" : "tab"}
        >Складирование вещей в коробке</div>
        <div
          onClick={() => toggleTab(3)}
          className={toggleState === 3 ? "tab tab__active" : "tab"}
        >Хранение инвентаря</div>
      </div>

      <div className="calculator-stock__content">

        <div
          className={toggleState === 1 ? "content content__active" : "content"}
        >

        </div>
        <div
          className={toggleState === 2 ? "content content__active" : "content"}
        >
          <div className="content__boxes">
            <img src={BoxSmallImg} alt="box" />
            <div>200 ₽/мес</div>
          </div>
          <div className="content__boxes">
            <img src={BoxBigImg} alt="box" />
            <div>200 ₽/мес</div>
          </div>
        </div>
        <div
          className={toggleState === 3 ? "content content__active" : "content"}
        >

        </div>

      </div>
    </div>
  )
}

export default CalculatorStock;

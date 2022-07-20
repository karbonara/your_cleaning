import QuestionIcon from "../../../../assets/questionIcon.svg";
import { useState } from "react";
import "./CalculatorCleaning.scss";

const CalculatorCleaning = () => {

  // Выбор помещения
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index)
  };
  // Переключение вида уборки 
  const [toggleActive, setToggleActive] = useState(2);
  const toggleActiveButton = (index) => {
    setToggleActive(index)
  };

  const [toggleQuestionIcon, setQuestionIcon] = useState(false);
  const handleQuestionIcon = () => {
    setQuestionIcon(!toggleQuestionIcon);
  };

  return (
    <div className="calculator__cleaning-wrapper">
      <div className="calculator__cleaning-titles">
        <div
          onClick={() => toggleActiveButton(1)}
          className={toggleActive === 1 ? "calculator__cleaning-title calculator__cleaning-title-active" : "calculator__cleaning-title"}
        >
          Поддерживающая
        </div>
        <div
          onClick={() => toggleActiveButton(2)}
          className={toggleActive === 2 ? "calculator__cleaning-title calculator__cleaning-title-active" : "calculator__cleaning-title"}
        >
          Генеральная
        </div>
        <div
          onClick={() => toggleActiveButton(3)}
          className={toggleActive === 3 ? "calculator__cleaning-title calculator__cleaning-title-active" : "calculator__cleaning-title"}
        >
          После ремонта
        </div>
      </div>
      <div className="calculator__cleaning-tabs">
        <div
          onClick={() => toggleTab(1)}
          className={toggleState === 1 ? "tab tab__active" : "tab"}
        >Квартира</div>
        <div
          onClick={() => toggleTab(2)}
          className={toggleState === 2 ? "tab tab__active" : "tab"}
        >Нежилое помещение</div>
        <div
          onClick={() => toggleTab(3)}
          className={toggleState === 3 ? "tab tab__active" : "tab"}
        >Дом</div>
      </div>
      <div className="calculator__cleaning-content">
        <div className={toggleState === 1 ? "content content__active" : "content"}>
          <div className="content__container">
            <span className="calculator-text">Количество комнат</span>
            <ul className="content__rooms">
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
            </ul>
          </div>
          <div className="content__container">
            <div className="calculator-text__container">
              <span className="calculator-text calculator-text-bathroom-icon">Количество санузлов</span>
              <img onClick={handleQuestionIcon} src={QuestionIcon} alt="icon" />
              {
                toggleQuestionIcon &&
                <div className="calculator-text-bathroom-hover">ыыы</div>
              }
            </div>
            <ul className="content__rooms">
              <li>1</li>
              <li>2</li>
            </ul>
          </div>
        </div>
        <div className={toggleState === 2 ? "content content__active" : "content"}>
          <span className="calculator-text">Площадь Вашего помещения</span>
          <label className="content__label" htmlFor="">
            <input className="content__input" type="text" />
            <span>М2</span>
          </label>
        </div>
        <div className={toggleState === 3 ? "content content__active" : "content"}>
          <div className="content__container">
            <span className="calculator-text">Площадь Вашего помещения</span>
            <label className="content__label" htmlFor="">
              <input className="content__input" type="text" />
              <span>М2</span>
            </label>
          </div>
          <div className="content__container">
            <span className="calculator-text">Количество этажей</span>
            <ul className="content__rooms">
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CalculatorCleaning;
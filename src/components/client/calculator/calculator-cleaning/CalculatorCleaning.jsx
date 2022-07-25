import QuestionIcon from "../../../../assets/questionIcon.svg";
// import { useState } from "react";
import "./CalculatorCleaning.scss";

const CalculatorCleaning = ({ optionCleaning }) => {

  /**
   * Метод добавляем/изменяет объект с опцией уборки в состоянии
   *
   * @param newOption - добавляемый/изменяемый объект в состоянии
   */
  const setNewCleaningOptions = (newOption) => {
    optionCleaning.setOptionCleaning({
      ...optionCleaning.optionCleaning,
      ...newOption
    });
  };

  // Выбор помещения
  const toggleTab = (index) => {
    setNewCleaningOptions({ roomType: index });
  };

  // Переключение вида уборки
  const toggleActiveButton = (index) => {
    setNewCleaningOptions({ cleaningType: index });
  };

  const toggleRoomFlat = (index) => {
    setNewCleaningOptions({ roomFlat: index });
  };

  return (
    <div className="calculator__cleaning-wrapper">
      <div className="calculator__cleaning-titles">
        <div
          onClick={() => toggleActiveButton(0)}
          className={optionCleaning.optionCleaning.cleaningType === 0 ? "calculator__cleaning-title calculator__cleaning-title-active" : "calculator__cleaning-title"}
        >
          Поддерживающая
        </div>
        <div
          onClick={() => toggleActiveButton(1)}
          className={optionCleaning.optionCleaning.cleaningType === 1 ? "calculator__cleaning-title calculator__cleaning-title-active" : "calculator__cleaning-title"}
        >
          Генеральная
        </div>
        <div
          onClick={() => toggleActiveButton(2)}
          className={optionCleaning.optionCleaning.cleaningType === 2 ? "calculator__cleaning-title calculator__cleaning-title-active" : "calculator__cleaning-title"}
        >
          После ремонта
        </div>
      </div>
      <div className="calculator__cleaning-tabs">
        <div
          onClick={() => toggleTab(0)}
          className={optionCleaning.optionCleaning.roomType === 0 ? "tab tab__active" : "tab"}
        >Квартира</div>
        <div
          onClick={() => toggleTab(1)}
          className={optionCleaning.optionCleaning.roomType === 1 ? "tab tab__active" : "tab"}
        >Нежилое помещение</div>
        <div
          onClick={() => toggleTab(2)}
          className={optionCleaning.optionCleaning.roomType === 2 ? "tab tab__active" : "tab"}
        >Дом</div>
      </div>
      <div className="calculator__cleaning-content">
        <div className={optionCleaning.optionCleaning.roomType === 0 ? "content content__active" : "content"}>
          <div className="content__container">
            <span className="calculator-text">Количество комнат</span>
            <ul className="content__rooms">
              <li onClick={() => toggleRoomFlat(0)}>1</li>
              <li onClick={() => toggleRoomFlat(1)}>2</li>
              <li onClick={() => toggleRoomFlat(2)}>3</li>
              <li onClick={() => toggleRoomFlat(3)}>4</li>
              <li onClick={() => toggleRoomFlat(4)}>5</li>
            </ul>
          </div>
          <div className="content__container">
            <div className="calculator-text__container">
              <span className="calculator-text calculator-text-bathroom-icon">Количество санузлов</span>
              <img src={QuestionIcon} alt="icon" />
            </div>
            <ul className="content__rooms">
              <li>1</li>
              <li>2</li>
            </ul>
          </div>
        </div>
        <div className={optionCleaning.optionCleaning.roomType === 1 ? "content content__active" : "content"}>
          <span className="calculator-text">Площадь Вашего помещения</span>
          <label className="content__label" htmlFor="">
            <input className="content__input" type="text" />
            <span>М2</span>
          </label>
        </div>
        <div className={optionCleaning.optionCleaning.roomType === 2 ? "content content__active" : "content"}>
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
import "./Tabs.scss";
import { useState } from "react";
import Timetable from "../timetable/Timetable";

const Tabs = () => {

  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index)
  };

  return (
    <section>
      <ul className="tabs__items">
        <li
          onClick={() => toggleTab(1)}
          className={toggleState === 1 ? "tab__item tab__item-active" : "tab__item"}
        >Расписание</li>
        <li
          onClick={() => toggleTab(2)}
          className={toggleState === 2 ? "tab__item tab__item-active" : "tab__item"}
        >Завершенные услуги</li>
        <li
          onClick={() => toggleTab(3)}
          className={toggleState === 3 ? "tab__item tab__item-active" : "tab__item"}
        >История платежей</li>
        <li
          onClick={() => toggleTab(4)}
          className={toggleState === 4 ? "tab__item tab__item-active" : "tab__item"}
        >Настройки</li>
      </ul>
      <div className="tab__content">
        <div
          className={toggleState === 1 ? "content tab__content-active" : "content"}
        >
          <Timetable />
        </div>
        <div
          className={toggleState === 2 ? "content tab__content-active" : "content"}
        >

        </div>
      </div>
    </section>
  )
}

export default Tabs;

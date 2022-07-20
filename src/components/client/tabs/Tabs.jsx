import { useState } from "react";
import Timetable from "../timetable/Timetable";
import CompletedServices from "../completed-services/CompletedServices";
import PaymentHistory from "../payment-history/PaymentHistory";
import Settings from "../settings/Settings";
import Requisites from "../requisites/Requisites";
import "./Tabs.scss";

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
        >Реквизиты</li>
        <li
          onClick={() => toggleTab(5)}
          className={toggleState === 5 ? "tab__item tab__item-active" : "tab__item"}
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
          <CompletedServices />
        </div>

        <div
          className={toggleState === 3 ? "content tab__content-active" : "content"}
        >
          <PaymentHistory />
        </div>

        <div
          className={toggleState === 4 ? "content tab__content-active" : "content"}
        >
          <Requisites />
        </div>

        <div
          className={toggleState === 5 ? "content tab__content-active" : "content"}
        >
          <Settings />
        </div>

      </div>
    </section>
  )
}

export default Tabs;

import Tabs from "../../../components/client/tabs/Tabs";
import AvatarBig from "../../../assets/avatar-big.svg";
import CalendarNotification from "../../../assets/calendarNotification.svg";
import { Link } from "react-router-dom";
import "./Main.scss";

const Main = () => {
  return (
    <>
      <Link to="/timetable" className="timetable">
        <img src={CalendarNotification} alt="calendar" />
        <span className="timetable__title">Расписание</span>
        <span className="timetable__text">Сегодня, в 16:30, запланирована доставка</span>
      </Link>
      <section className="main__wrapper">
        <div className="main__header-info">
          <img src={AvatarBig} alt="avatar" />
          <div className="main__header-info-container">
            <div className="main__header-info-name">Здравствуйте, София!</div>
            <div className="main__header-info-balance-container">
              <span className="main__header-info-balance-text">Баланс:</span>
              <span className="main__header-info-balance">455 ₽</span>
              <Link to="/balance" className="main__header-info-balance-button">Пополнить</Link>
            </div>
          </div>
        </div>
        <Tabs />
      </section>
    </>
  )
}

export default Main;

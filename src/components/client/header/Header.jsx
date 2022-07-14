import Logo from "../../../assets/logo-client.svg";
import AvatarClient from "../../../assets/avatar-client.svg";
import CalendarNotification from "../../../assets/calendarNotification.svg";
import BellClient from "../../../assets/bell-client.svg";
import LocationClient from "../../../assets/location-client.svg";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <header>
      <nav className="nav__main">
        <div className="nav__container">
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
          <div>
            <img className="nav__icon-client" src={LocationClient} alt="icon" />
            Москва
          </div>
        </div>
        <div className="nav__info-container">
          <div>Здравствуйте, София!</div>
          <div>
            <img src={BellClient} alt="icon" />
          </div>
          <div className="nav__cabinet">
            <span className="nav__cabinet-title">Мой кабинет</span>
            <img src={AvatarClient} alt="avatar" />
          </div>
        </div>
      </nav>
      <Link to="/timetable" className="timetable">
        <img src={CalendarNotification} alt="calendar" />
        <span className="timetable__title">Расписание</span>
        <span className="timetable__text">Сегодня, в 16:30, запланирована доставка</span>
      </Link>

    </header>
  )
}

export default Header;

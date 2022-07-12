import Logo from "../../assets/logo.svg";
import Control from "../../assets/control.svg";
import Support from "../../assets/support.svg";
import Calendar from "../../assets/calendar.svg";
import { useState } from 'react';
import "./Nav.scss";

const NavMenu = () => {
  const [isActive, setIsActive] = useState(false);
  const handleClick = event => {
    setIsActive(current => !current);
  };

  return (
    <>
      <div className="nav__button">
        <input onClick={handleClick} id="menu__toggle" type="checkbox" />
        <label className="menu__btn" htmlFor="menu__toggle">
          <span></span>
        </label>
      </div>
      <nav className={isActive ? 'nav nav__mobile' : 'nav'}>
        <div className="nav__logo">
          <img src={Logo} alt="" />
        </div>
        <ul className="nav__lists">
          <li>
            <a href="/">
              <img src={Control} alt="" />
              Управление</a>
          </li>
          <li>
            <a href="/">
              <img src={Support} alt="" />
              Поддержка</a>
          </li>
          <li>
            <a href="/">
              <img src={Calendar} alt="" />
              Календарь</a>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default NavMenu;

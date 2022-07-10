import Logo from "../../assets/logo.svg";
import Control from "../../assets/control.svg";
import Support from "../../assets/support.svg";
import Calendar from "../../assets/calendar.svg";
import "./Nav.scss";

const NavMenu = () => {
    return (
        <div className="nav">
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
        </div>
    )
}

export default NavMenu;

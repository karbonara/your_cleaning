import "./Header.scss";
import Bell from "../../assets/bell.svg";
import Avatar from "../../assets/avatar.png";
import Location from "../../assets/location.svg";
import Localization from "../../assets/localization.svg";
import React from 'react';

const Header = () => {
    const [toggleMenu, setToggleMenu] = React.useState(false);

    return (
        <header>
            <nav className="nav__wrapper">
                <span className="nav__text">
                    <img src={Location} alt="" />
                    <span>
                        Москва
                    </span>
                </span>

                <div className="nav__info">
                    <span className="nav__text">
                        <img src={Localization} alt="" />
                        <span>Русский</span>
                    </span>
                    <button className="nav__bell">
                        <img src={Bell} alt="icon" />
                    </button>
                    <div className="nav__modal-wrapper">
                        <img className="nav__user" onClick={() => setToggleMenu(!toggleMenu)} src={Avatar} alt="" />
                        {toggleMenu && (
                            <div>
                                <div className="nav__modal">
                                    <div className="nav__modal-user-mail">s.ivanov_73@mail.ru</div>
                                    <div className="nav__modal-user-name">Сергей Иванов</div>
                                    <div className="modal__buttons">
                                        <a className="modal__button" href="/">Усправление</a>
                                        <a className="modal__button-exit" href="/">Выйти</a>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                </div>
            </nav>
        </header>
    )
}

export default Header;
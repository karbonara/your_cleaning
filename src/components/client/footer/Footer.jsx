import Instagram from "../../../assets/instagram-client.svg";
import Whatsapp from "../../../assets/whatsapp-client.svg";
import PhoneDesktop from "../../../assets/phone-desktop.svg";
import DownloadBtn from "../../../assets/downloadBtn.svg";
import "./Footer.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <section className="footer__wrapper">
                <div className="footer__container">
                    <div className="footer__text-container">
                        <div className="footer__text">Жалобы, отзывы и предложения</div>
                        <div className="footer__text">Для сотрудничества</div>
                    </div>
                    <img className="footer__img-icon" src={Instagram} alt="" />
                    <img className="footer__img-icon" src={Whatsapp} alt="" />
                </div>
                <div className="footer__container">
                    <div className="footer__mail">tvoauborka@yandex.ru</div>
                    <div className="footer__mail">tvoauborka@yandex.ru</div>
                    <div className="footer_number">8 985 400 36 36</div>
                    <a className="footer__link" href="/">Договор оферты</a>
                    <a className="footer__link" href="/">Политика конфиденциальности</a>
                </div>
                <div>
                    <img className="footer__phone-desktop" src={PhoneDesktop} alt="" />
                </div>
                <div className="footer__container">
                    <div className="footer__download-text">В приложении еще удобнее!</div>
                    <img src={DownloadBtn} alt="" />
                    <div className="footer__download-intro">ТвояУборка 2021</div>
                </div>
            </section>
        </footer>
    )
}

export default Footer;
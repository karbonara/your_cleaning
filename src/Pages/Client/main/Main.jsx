import Tabs from "../../../components/client/tabs/Tabs";
import AvatarBig from "../../../assets/avatar-big.svg";
import "./Main.scss";

const Main = () => {
  return (
    <section className="main__wrapper">
      <div className="main__header-info">
        <img src={AvatarBig} alt="avatar" />
        <div className="main__header-info-container">
          <div className="main__header-info-name">Здравствуйте, София!</div>
          <div className="main__header-info-balance-container">
            <span className="main__header-info-balance-text">Баланс:</span>
            <span className="main__header-info-balance">455 ₽</span>
            <a href="/" className="main__header-info-balance-button">Пополнить</a>
          </div>
        </div>
      </div>
      <Tabs />
    </section>
  )
}

export default Main;

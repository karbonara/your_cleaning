import Visa from "../../../assets/pay/visa.svg";
import MasterCard from "../../../assets/pay/Mastercard.svg";
import "./Balance.scss";

const Balance = () => {
  return (
    <section className="balance">
      <div className="balance__title">Выберите способ пополнения баланса:</div>
      <div className="balance__item">
        <div className="balance__item-img"><img src={Visa} alt="visa" /></div>
        <div className="balance__item-img"><img src={MasterCard} alt="masterCard" /></div>
      </div>
      <input className="balance__input" type="number" placeholder="Сумма" />
      <a className="balance__button" href="/">Далее</a>
    </section>
  )
}

export default Balance;
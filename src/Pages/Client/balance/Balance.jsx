import "./Balance.scss";

const Balance = () => {
  return (
    <section className="balance">
      <div className="balance__title">Выберите способ пополнения баланса:</div>
      <div>
      </div>
      <input className="balance__input" type="number" placeholder="Сумма" />
      <a className="balance__button" href="/">Далее</a>
    </section>
  )
}

export default Balance;
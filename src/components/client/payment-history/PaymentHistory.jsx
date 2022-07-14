import "./PaymentHistory.scss";

const PaymentHistory = () => {
  const paymentHistory = [
    {
      title: 'Индивидуальная уборка с особым подходом',
      price: 6450,
      date: '07:30, 1 окт 2021',
    },
    {
      title: 'Поддерживающая уборка',
      price: 2500,
      date: '07:30, 1 окт 2021',
    },
    {
      title: 'Генеральная уборка',
      price: 4000,
      date: '07:30, 1 окт 2021',
    },
    {
      title: 'Поддерживающая уборка',
      price: 2500,
      date: '07:30, 1 окт 2021',
    },

  ]
  return (
    <section>
      <ul className="completed-services__items">
        {
          paymentHistory.map((item, index) => (
            <li className="completed-services__item" key={index}>
              <div>
                <div>{item.title}</div>
              </div>
              <div>
                <div>{item.price}</div>
                <div>Чек об оплате</div>
              </div>
              <div>
                <div>{item.date}</div>
              </div>
            </li>
          ))
        }
      </ul>
    </section>
  )
}

export default PaymentHistory;

import "./Settings.scss";

const Settings = () => {
  return (
    <section className="setting">
      <div>Данные для входа</div>
      <div className="setting__data">
        <div className="setting__data-item">
          <div>Номер телефона</div>
          <div>+7 999 000 00 00</div>
          <div>Изменить</div>
        </div>
        <div className="setting__data-item">
          <div>E-mail</div>
          <div>ex@ex.com</div>
          <div>Изменить</div>
        </div>
        <div className="setting__data-item">
          <div>Пароль</div>
          <div>Был изменен 19 дней назад</div>
          <div>Изменить</div>
        </div>
      </div>
      <div>
        <div>Способы оплаты</div>
        <div>Вы еще не добавили способ оплаты</div>
        <button className="setting__button-add">+</button>
      </div>
      <div>
        <div>Адреса</div>
        <div>Вы еще не добавили ни один адрес</div>
        <button className="setting__button-add">+</button>
      </div>
    </section>
  )
}

export default Settings;

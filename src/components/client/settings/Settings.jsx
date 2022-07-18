import * as React from 'react';
import Switch from '@mui/material/Switch';
import "./Settings.scss";

const Settings = () => {

  const label = { inputProps: { 'aria-label': 'Switch demo' } };

  return (
    <section className="setting">
      <div>Данные для входа</div>
      <div className="setting__data">
        <div className="setting__data-item">
          <div>Номер телефона</div>
          <div>+7 999 000 00 00</div>
          <div className="setting__data-button">Изменить</div>
        </div>
        <div className="setting__data-item">
          <div>E-mail</div>
          <div>ex@ex.com</div>
          <div className="setting__data-button">Изменить</div>
        </div>
        <div className="setting__data-item">
          <div>Пароль</div>
          <div>Был изменен 19 дней назад</div>
          <div className="setting__data-button">Изменить</div>
        </div>
      </div>

      <div className="setting__data-add-item">
        <div>Способы оплаты</div>
        <div>Вы еще не добавили способ оплаты</div>
        <button className="setting__button-add">+</button>
      </div>

      <div className="setting__data-add-item">
        <div>Адреса</div>
        <div>Вы еще не добавили ни один адрес</div>
        <button className="setting__button-add">+</button>
      </div>
      <div>

        <div className="setting__data-switchs">
          <div className="setting__data-switch">
            <div>E-mail</div>

            <div className="setting__data-switch-item">
              <div>О внесении изменений в Личном кабинете</div>
              <Switch {...label} />
            </div>
            <div className="setting__data-switch-item">
              <div>Расписание</div>
              <Switch {...label} />
            </div>
            <div className="setting__data-switch-item">
              <div>Акции</div>
              <Switch {...label} />
            </div>
          </div>
          <div>
            <div>SMS</div>
            <div className="setting__data-switch-item">
              <div>О внесении изменений в Личном кабинете</div>
              <Switch {...label} />
            </div>
            <div className="setting__data-switch-item">
              <div>Расписание</div>
              <Switch {...label} />
            </div>
            <div className="setting__data-switch-item">
              <div>Акции</div>
              <Switch {...label} />
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Settings;

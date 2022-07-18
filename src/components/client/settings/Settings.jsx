import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Switch from '@mui/material/Switch';
import CloseBlack from "../../../assets/close-black.svg";
import "./Settings.scss";

const Settings = () => {

  const [addPayment, setAddPayment] = useState(false);
  const label = { inputProps: { 'aria-label': 'Switch demo' } };

  const handleAddPayment = () => {
    setAddPayment(!addPayment);
  };


  const { register, handleSubmit, reset, formState: { isValid } } = useForm();
  const onSubmits = (data) => {
    reset();
  };

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

      <div className="setting__data-add-item setting__payment-modal">
        <div>Адреса</div>
        <div>Вы еще не добавили ни один адрес</div>
        <button onClick={handleAddPayment} className="setting__button-add">+</button>
        {
          addPayment &&
          <div>
            <div onClick={handleAddPayment} className="payment__modal-bg"></div>
            <div className="payment__modal">
              <div className="payment__modal-header">
                <div>Добавление карты</div>
                <div onClick={handleAddPayment} className="payment__modal-close">
                  <img src={CloseBlack} alt="" />
                </div>
              </div>
              <form onSubmit={handleSubmit(onSubmits)}>
                <label>
                  <div className="payment__modal-title">Номер карты</div>
                  <input
                    {...register("cardNumber", { required: true })}
                    className="payment__modal-input"
                    type="text"
                    placeholder="Номер"
                  />
                </label>
                <div>
                  <div className="payment__modal-title">Срок истечения</div>
                  <div className="payment__modal-inputs-small">
                    <label>
                      <div>Месяц</div>
                      <input
                        {...register("month", { required: true })}
                        className="payment__modal-input-small"
                        type="number"
                      />
                    </label>
                    <label>
                      <div>Год</div>
                      <input
                        {...register("year", { required: true })}
                        className="payment__modal-input-small"
                        type="number"
                      />
                    </label>
                  </div>
                </div>
                <label>
                  <div className="payment__modal-title">Имя держателя карты</div>
                  <input
                    {...register("firstNameLastName", { required: true })}
                    className="payment__modal-input"
                    type="text"
                    placeholder="Имя Фамилия"
                  />
                </label>
                <label>
                  <div className="payment__modal-title">CVV</div>
                  <input
                    {...register("CVV", { required: true })}
                    className="payment__modal-input"
                    type="password"
                    placeholder="***"
                  />
                </label>
                <div>
                  <input
                    type="submit"
                    className="payment__modal-button"
                    value={' Сохранить'}
                  // disabled={!isValid}
                  />
                </div>
              </form>
            </div>
          </div>
        }
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

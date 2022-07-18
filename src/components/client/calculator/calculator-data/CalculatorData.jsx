import { useForm } from "react-hook-form";
import Cash from "../../../../assets/pay/cash.svg";
import MasterCard from "../../../../assets/pay/Mastercard.svg";
import Visa from "../../../../assets/pay/visa.svg";
import "./CalculatorData.scss";

const CalculatorData = () => {

  const payItems = [
    {
      img: MasterCard,
      title: 'MasterCard',
    },
    {
      img: Visa,
      title: 'Visa',
    },
    {
      img: Cash,
      title: 'Cash',
    },
  ];

  const { register, handleSubmit, reset, formState: { isValid } } = useForm();

  const onSubmit = (data) => {
    reset();
  };

  return (
    <div className="calculator__data">
      <div className="calculator__data-title">Адрес оказания услуги</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="calculator__data-input"
          {...register("region", { required: true })}
          type="text" placeholder="Область" />
        <input
          className="calculator__data-input"
          {...register("city", { required: true })}
          type="text" placeholder="Город/район, улица, дом " />
        <input
          className="calculator__data-input"
          {...register("flat", { required: true })}
          type="text" placeholder="Квартира" />
        <input
          className="calculator__data-input"
          {...register("intercom", { required: false })}
          type="text" placeholder="Наличие домофона" />
        <textarea
          {...register("wishes", { required: false })}
          className="calculator__data-textarea"
          placeholder="Ваши пожелания"
          cols="10"
          rows="10"
        ></textarea>
        <div className="calculator__data-total">
          <div>Сумма</div>
          <div>6450 ₽</div>
        </div>
        <div>Отменить услугу можно не позднее, чем за 1 час до начала оказания услуг</div>
        <div className="calculator__data-pay-items">
          {
            payItems.map((item, index) => (
              <div className="calculator__data-pay-item" key={index}>
                <img src={item.img} alt={item.title} />
              </div>
            ))
          }
        </div>
        <input
          type="submit"
          className="calculator__data-button"
          value={'Перейти к оплате'}
        // disabled={!isValid}
        />
      </form>
      <div className="calculator__data-text">
        Нажимая кнопку, Вы принимаете
        <a className="calculator__data-agreement" href="/">Условия пользовательского соглашения</a>
        и даете согласие на
        <a className="calculator__data-agreement" href="/">Обработку персональных данных</a>
      </div>
    </div>
  )
}

export default CalculatorData;
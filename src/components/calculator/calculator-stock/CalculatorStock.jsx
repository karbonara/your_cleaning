import BoxSmallImg from "../../../assets/img-services/boxSmall.svg";
import BoxBigImg from "../../../assets/img-services/boxBig.svg";
import TiresImg from "../../../assets/img-services/tires.svg";
import BikeImg from "../../../assets/img-services/bake.svg";
import SkisImg from "../../../assets/img-services/skis.svg";
import KickScooterImg from "../../../assets/img-services/kickScooter.svg";
import FurnitureImg from "../../../assets/img-services/furniture.svg";
import Appliances from "../../../assets/img-services/appliances.svg";
import { useState } from "react";
import "./CalculatorStock.scss";

const CalculatorStock = () => {
  // Выбор услуги
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index)
  };

  const inventory = [
    {
      title: 'Шины ',
      price: 500,
      img: TiresImg
    },
    {
      title: 'Велосипед',
      price: 500,
      img: BikeImg
    },
    {
      title: 'Горные лыжи Сноуборд',
      price: 200,
      img: SkisImg
    },
    {
      title: 'Электросамокаты',
      price: 500,
      img: KickScooterImg
    },
    {
      title: 'Хранение мебели',
      price: 1000,
      img: FurnitureImg
    },
    {
      title: 'Хранение бытовой техники',
      price: 1000,
      img: Appliances
    },
  ]

  return (
    <div>
      <div className="calculator-stock__title">Оказание услуги можно завершить в любой момент.</div>
      <div className="calculator-stock__tabs">
        <div
          onClick={() => toggleTab(1)}
          className={toggleState === 1 ? "tab tab__active" : "tab"}
        >
          Габаритное хранение</div>
        <div
          onClick={() => toggleTab(2)}
          className={toggleState === 2 ? "tab tab__active" : "tab"}
        >Складирование вещей в коробке</div>
        <div
          onClick={() => toggleTab(3)}
          className={toggleState === 3 ? "tab tab__active" : "tab"}
        >Хранение инвентаря</div>
      </div>

      <div className="calculator-stock__content">

        <div
          className={toggleState === 1 ? "content content__active" : "content"}
        >

        </div>
        <div
          className={toggleState === 2 ? "content content__active" : "content"}
        >
          <div className="content__boxes">
            <div className="content__box-img">
              <span className="content__box-img-text-1">50 см</span>
              <img src={BoxSmallImg} alt="box" />
              <span className="content__box-img-text-2">50 см</span>
            </div>
            <div className="content__boxes-text">200 ₽/мес</div>
          </div>
          <div className="content__boxes">
            <div className="content__box-img">
              <span className="content__box-img-text-big-1">100 см</span>
              <img className="content__box-img-big" src={BoxBigImg} alt="box" />
              <span className="content__box-img-text-big-2">100 см</span>
            </div>
            <div className="content__boxes-text">200 ₽/мес</div>
          </div>
        </div>
        <div
          className={toggleState === 3 ? "content content__active" : "content"}
        >
          <ul className="additional-services__items">
            {
              inventory.map((item, index) => (
                <li className="additional-services__item" key={index}>
                  <div className="additional-services__item-text-main">
                    <div className="additional-services__item-text">{item.title}</div>
                    <div className="additional-services__item-text">{item.price} ₽ </div>
                  </div>
                  <img src={item.img} alt={item.title} />
                </li>
              ))
            }
          </ul>
        </div>

      </div>
    </div>
  )
}

export default CalculatorStock;

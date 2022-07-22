import TablewareImg from "../../../../assets/img-services/tableware.svg"
import WindowImg from "../../../../assets/img-services/window.svg";
import WashImg from "../../../../assets/img-services/wash.svg";
import IroningImg from "../../../../assets/img-services/ironing.svg";
import DisinfectionImg from "../../../../assets/img-services/disinfection.svg";
import KeyImg from "../../../../assets/img-services/key.svg";
import DepartureImg from "../../../../assets/img-services/departure.svg";
import LeavingTheRegionImg from "../../../../assets/img-services/leavingTheRegion.svg";
import TrayImg from "../../../../assets/img-services/tray.svg";
import UnderwearImg from "../../../../assets/img-services/underwear.svg";
import BalconyImg from "../../../../assets/img-services/balcony.svg";
import FridgeImg from "../../../../assets/img-services/fridge.svg";
import OvenImg from "../../../../assets/img-services/oven.svg";
import BakeImg from "../../../../assets/img-services/bake.svg";
import PutAwayImg from "../../../../assets/img-services/putAway.svg";
import "./AdditionalServices.scss";
import { useState } from "react";
// import Items from "./Items";

const AdditionalServices = () => {

  const services = [
    {
      title: 'Помыть посуду',
      price: 250,
      additionText: '/ 30 мин',
      img: TablewareImg,
    },
    {
      title: 'Мойка окон',
      price: 500,
      additionText: '',
      img: WindowImg,
      imgInfo: <svg className="additional-services__item-img-info" width="20" height="20" viewBox="0 0 20 20" fill="white" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.693 13.4074C9.12117 13.4074 8.6582 13.8839 8.6582 14.4558C8.6582 15.014 9.10754 15.5042 9.693 15.5042C10.2785 15.5042 10.7414 15.0141 10.7414 14.4558C10.7414 13.8839 10.2649 13.4074 9.693 13.4074Z" fill="black" />
        <path d="M9.86984 5.46891C8.03168 5.46891 7.1875 6.55817 7.1875 7.29344C7.1875 7.82449 7.6368 8.06957 8.00445 8.06957C8.73969 8.06957 8.44016 7.02113 9.82898 7.02113C10.5098 7.02113 11.0545 7.3207 11.0545 7.94703C11.0545 8.68234 10.292 9.10441 9.84262 9.48566C9.44777 9.82605 8.93035 10.3843 8.93035 11.5553C8.93035 12.2633 9.12094 12.4676 9.67922 12.4676C10.3464 12.4676 10.4825 12.168 10.4825 11.9093C10.4825 11.2013 10.4962 10.7928 11.2451 10.2073C11.6127 9.9214 12.7701 8.99551 12.7701 7.71559C12.7701 6.43567 11.6127 5.46891 9.86984 5.46891Z" fill="black" />
        <path d="M10 0C4.47328 0 0 4.47254 0 10V19.2188C0 19.6502 0.349766 20 0.78125 20H10C15.5267 20 20 15.5275 20 10C20 4.47328 15.5275 0 10 0ZM10 18.4375H1.5625V10C1.5625 5.33684 5.33621 1.5625 10 1.5625C14.6632 1.5625 18.4375 5.33621 18.4375 10C18.4375 14.6632 14.6638 18.4375 10 18.4375Z" fill="black" />
      </svg>
      ,
    },
    {
      title: 'Мойка балконного остекления',
      price: 500,
      additionText: '/ балкон',
      img: WindowImg,
    },
    {
      title: 'Стирка вещей',
      price: 500,
      additionText: '/ ч',
      img: WashImg,
    },
    {
      title: 'Глажка вещей',
      price: 500,
      additionText: '/ ч',
      img: IroningImg,
    },
    {
      title: 'Дезинфекция',
      price: 500,
      additionText: '',
      img: DisinfectionImg,
    },
    {
      title: 'Отвезти ключи',
      price: 500,
      additionText: '',
      img: KeyImg,
    },
    {
      title: 'Выезд за МКАД',
      price: 500,
      additionText: '',
      img: DepartureImg,
    },
    {
      title: 'Выезд в область',
      price: 250,
      additionText: '/ 30 мин',
      img: LeavingTheRegionImg,
    },
    {
      title: 'Помыть лоток',
      price: 250,
      additionText: '',
      img: TrayImg,
    },
    {
      title: 'Поменять белье',
      price: 200,
      additionText: '',
      img: UnderwearImg,
    },
    {
      title: 'Убраться на балконе',
      price: 700,
      additionText: '',
      img: BalconyImg,
    },
    {
      title: 'Помыть холодильник',
      price: 300,
      additionText: '',
      img: FridgeImg,
    },
    {
      title: 'Помыть духовку',
      price: 400,
      additionText: '',
      img: OvenImg,
    },
    {
      title: 'Помыть СВЧ-печь',
      price: 200,
      additionText: '',
      img: BakeImg,
    },
    {
      title: 'Убрать что-то еще',
      price: 400,
      additionText: '/ 30 мин',
      img: PutAwayImg,
    },
  ];

  const [count, setCount] = useState(0);

  const [items, setItems] = useState(services)

  return (
    <div className="additional-services">
      <div className="additional-services__title">Дополнительные услуги</div>
      <ul className="additional-services__items">
        {
          items.map((item, index) => (
            <li className="additional-services__item" key={item.title}>
              <div className="additional-services__item-text-main">
                <div className="additional-services__item-text">{item.title}{item.imgInfo}</div>

                <div className="additional-services__item-text">{item.price} ₽ {item.additionText}</div>
              </div>
              <img src={item.img} alt={item.title} />
              {
                <div className="additional-services-add-buttons">
                  <button className="additional-services-add-button">-</button>
                  <div>{count}</div>
                  <button className="additional-services-add-button">+</button>
                </div>
              }
            </li>
          ))
        }
        {/* <Items services={services} count={count} setCount={setCount} /> */}
      </ul>
    </div >
  )
}

export default AdditionalServices;
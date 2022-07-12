import TablewareImg from "../../../assets/img-services/tableware.svg"
import WindowImg from "../../../assets/img-services/window.svg";
import WashImg from "../../../assets/img-services/wash.svg";
import IroningImg from "../../../assets/img-services/ironing.svg";
import DisinfectionImg from "../../../assets/img-services/disinfection.svg";
import KeyImg from "../../../assets/img-services/key.svg";
import DepartureImg from "../../../assets/img-services/departure.svg";
import LeavingTheRegionImg from "../../../assets/img-services/leavingTheRegion.svg";
import TrayImg from "../../../assets/img-services/tray.svg";
import UnderwearImg from "../../../assets/img-services/underwear.svg";
import BalconyImg from "../../../assets/img-services/balcony.svg";
import FridgeImg from "../../../assets/img-services/fridge.svg";
import OvenImg from "../../../assets/img-services/oven.svg";
import BakeImg from "../../../assets/img-services/bake.svg";
import PutAwayImg from "../../../assets/img-services/putAway.svg";
import "./AdditionalServices.scss";

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

  return (
    <div className="additional-services">
      <div className="additional-services__title">Дополнительные услуги</div>
      <ul className="additional-services__items">
        {
          services.map((item, index) => (
            <li className="additional-services__item" key={index}>
              <div className="additional-services__item-text-main">
                <div className="additional-services__item-text">{item.title}</div>
                <div className="additional-services__item-text">{item.price} ₽ {item.additionText}</div>
              </div>
              <img src={item.img} alt={item.title} />
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default AdditionalServices;
import Time from "../../assets/time.svg"
import "./ServicesActive.scss";

const ServicesActive = () => {
    const servicesItems = [
        { date: '15.10.2022', day: '55', link: 'https://www.google.com/' },
        { date: '20.10.2022', day: '245', link: 'https://www.google.com/' },
        { date: '03.11.2022', day: '45', link: 'https://www.google.com/' },
    ];

    return (
        <div className="services-active">
            <span className="services__title">Активные услуги</span>
            <ul className="services-active__items">
                {
                    servicesItems.map((item, index) => (
                        <li key={index} className="services-active__item">
                            <img src={Time} alt="" />
                            <div className="services__item-title">Склад</div>
                            <div className="services__item-price">до {item.date}</div>
                            <div className="services__item-info">
                                <a href={item.link}>Еще {item.day} дней</a>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default ServicesActive;

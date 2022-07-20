import Treaty from "../../../assets/treaty.svg";
import "./Requisites.scss";

const Requisites = () => {
    return (
        <section className="requisites">
            <div className="requisites__item">
                <div>ИНН:</div>
                <div>9913542354</div>
            </div>
            <div className="requisites__item">
                <div>Наименование организации:</div>
                <div>ООО Организация</div>
            </div>
            <div className="requisites__item">
                <div>ФИО Владельца:</div>
                <div>Марков Марк Маркович</div>
            </div>
            <div className="requisites__item">
                <div>Юридический адрес:</div>
                <div>ул. Михаила Морозова, д.55, Омск, Омская обл., 644043</div>
            </div>
            <div className="requisites__item">
                <div>Контактный номер:</div>
                <div>+7 (999) 999 99 99</div>
            </div>
            <div className="requisites__item">
                <div>Номер договора:</div>
                <div className="requisites__item-icon">
                    <img src={Treaty} alt="" />
                    №61213216
                </div>
            </div>
            <div className="requisites__button">Изменить</div>
        </section>
    )
}

export default Requisites;

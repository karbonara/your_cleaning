import { useState } from "react";
import Treaty from "../../../assets/treaty.svg";
import "./Requisites.scss";

const Requisites = () => {

    const [toggleInput, setToggleInput] = useState(false);
    const handleInput = () => {
        setToggleInput(!toggleInput);
    };

    return (
        <section className="requisites">
            {(!toggleInput) ?
                <div>
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
                    <div onClick={handleInput} className="requisites__button">Изменить</div>
                </div> :
                (
                    <div>
                        <div className="requisites__item">
                            <div>ИНН:</div>
                            <input
                                className="requisites__item-input"
                                type="text"
                                placeholder="9913542354" />
                        </div>
                        <div className="requisites__item">
                            <div>Наименование организации:</div>
                            <input
                                className="requisites__item-input"
                                type="text"
                                placeholder="ООО Организация" />
                        </div>
                        <div className="requisites__item">
                            <div>ФИО Владельца:</div>
                            <input
                                className="requisites__item-input"
                                type="text"
                                placeholder="Марков Марк Маркович" />
                        </div>
                        <div className="requisites__item">
                            <div>Юридический адрес:</div>
                            <input
                                className="requisites__item-input"
                                type="text"
                                placeholder="л. Михаила Морозова, д.55, Омск, Омская обл., 644043" />
                        </div>
                        <div className="requisites__item">
                            <div>Контактный номер:</div>
                            <input
                                className="requisites__item-input"
                                type="text"
                                placeholder="+7 (999) 999 99 99" />
                        </div>
                        <div className="requisites__item">
                            <div>Номер договора:</div>
                            <div className="requisites__item-icon">
                                <img src={Treaty} alt="" />
                                №61213216
                            </div>
                        </div>
                        <div className="requisites__buttons">
                            <div onClick={handleInput} className="requisites__cancel-button">Отменить</div>
                            <div onClick={handleInput} className="requisites__button-save">Сохранить</div>
                        </div>
                    </div>
                )}
        </section>
    )
}

export default Requisites;

import "./CompletedServices.scss";

const CompletedServices = () => {
    const completedServices = [
        {
            title: 'Индивидуальная уборка с особым подходом',
            date: '06:30, 1 окт 2021'
        },
        {
            title: 'Поддерживающая уборка',
            date: '07:20, 2 окт 2021'
        },
        {
            title: 'Поддерживающая уборка',
            date: '07:30, 5 окт 2021'
        },
        {
            title: 'Генеральная уборка',
            date: '07:30, 10 окт 2021'
        },
        {
            title: 'Поддерживающая уборка',
            date: '09:30, 21 окт 2021'
        },
    ]

    return (
        <section>
            <ul className="completed-services__items">
                {
                    completedServices.map((item, index) => (
                        <li className="completed-services__item" key={index}>
                            <div>
                                <div>{item.title}</div>
                            </div>
                            <div>
                                <div></div>
                                <div >Оставить чаевые</div>
                            </div>
                            <div>
                                <div>{item.date}</div>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </section>
    )
}

export default CompletedServices;

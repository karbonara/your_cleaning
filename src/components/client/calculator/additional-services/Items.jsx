export default function Items({ services, count, setCount }) {

    return (
        <>
            {
                services.map((item, index) => (
                    <li className="additional-services__item" key={index}>
                        <div className="additional-services__item-text-main">
                            <div className="additional-services__item-text">{item.title}{item.imgInfo}</div>

                            <div className="additional-services__item-text">{item.price} ₽ {item.additionText}</div>
                        </div>
                        <img src={item.img} alt={item.title} />
                        {
                            <div className="additional-services-add-buttons">
                                <button className="additional-services-add-button">-</button>
                                <div>{count}</div>
                                <button onClick={() => setCount(count + 1)} className="additional-services-add-button">+</button>
                            </div>
                        }
                    </li>
                ))
            }
        </>
    )
}

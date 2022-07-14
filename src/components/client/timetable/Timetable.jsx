import "./Timetable.scss";

const Timetable = () => {

  const timetable = [
    {
      title: 'ТвояУборка',
      text: 'Ближайшая уборка запланирована на 07:30, 26 окт 2021',
    },
    {
      title: 'ТвойСклад',
      text: 'Приедет 25 окт 2021 в 15:00',
    },
    {
      title: 'ТвояХимчистка мебели',
      text: 'Приедет 25 окт 2021 в 15:00',
    },
    {
      title: 'ТвояУборка',
      text: 'Ближайшая уборка запланирована на 07:30, 26 окт 2021',
    },
    {
      title: 'ТвойСклад',
      text: 'Приедет 25 окт 2021 в 15:00',
    },
    {
      title: 'ТвояХимчистка мебели',
      text: 'Приедет 25 окт 2021 в 15:00',
    },
  ];

  return (
    <section>
      <ul className="timetable__tab-items">
        {
          timetable.map((item, index) => (
            <li className="timetable__tab-item" key={index}>
              <div className="timetable__tab-item-container">
                <div className="timetable__tab-text-ct timetable__tab-text">{item.title}</div>
                <div className="timetable__tab-text">{item.text}</div>
              </div>
              <div className="timetable__tab-item-container">
                <div className="timetable__tab-button">Изменить</div>
                <div className="timetable__tab-button">Отмена</div>
              </div>
            </li>
          ))
        }
      </ul>
    </section>
  )
}

export default Timetable;

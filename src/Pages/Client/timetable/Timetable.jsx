import Close from "../../../assets/close.svg"
import "./Timetable.scss";

const Timetable = () => {
  const timetable = [
    {
      title: 'Расписание',
      text: 'Запланирована уборка на 16:00, 7 окт 2021',
      date: '7 окт 2021 15:00'
    },
    {
      title: 'Расписание',
      text: 'Запланирована уборка на 16:00, 7 окт 2021',
      date: '7 окт 2021 15:00'
    },
    {
      title: 'Расписание',
      text: 'Запланирована уборка на 16:00, 7 окт 2021',
      date: '7 окт 2021 15:00'
    },
    {
      title: 'Расписание',
      text: 'Запланирована уборка на 16:00, 7 окт 2021',
      date: '7 окт 2021 15:00'
    },
    {
      title: 'Расписание',
      text: 'Запланирована уборка на 16:00, 7 окт 2021',
      date: '7 окт 2021 15:00'
    },
  ]
  return (
    <ul className="timetable__items">
      {
        timetable.map((item, index) => (
          <li key={index} className="timetable__item">
            <div>
              <div className="timetable__item-title">{item.title}</div>
              <div className="timetable__item-text">{item.text}</div>
            </div>
            <div>
              {item.date}
              <span>
                <img className="timetable__item-img" src={Close} alt="" />
              </span>
            </div>
          </li>
        ))
      }
    </ul>
  )
}

export default Timetable;
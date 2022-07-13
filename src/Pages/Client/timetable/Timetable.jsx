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
              <div>{item.title}</div>
              <div>{item.text}</div>
            </div>
            <div>{item.date}</div>
          </li>
        ))
      }
    </ul>
  )
}

export default Timetable;
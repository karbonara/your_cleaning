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
  ]

  return (
    <section>
      <ul>
        {
          timetable.map((item, index) => (
            <li key={index}>
              <div>{item.title}</div>
              <div>{item.text}</div>
              <div>
                <div>Изменить</div>
                <div>Отмена</div>
              </div>
            </li>
          ))
        }
      </ul>
    </section>
  )
}

export default Timetable;

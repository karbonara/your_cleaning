import { useState } from "react";
import Close from "../../../assets/close.svg"
import "./Timetable.scss";

const Timetable = () => {

  const timetable = [
    {
      id: 1,
      title: 'Расписание',
      text: 'Запланирована уборка на 16:00, 7 окт 2021',
      date: '7 окт 2021 15:00'
    },
    {
      id: 2,
      title: 'Расписание',
      text: 'Запланирована уборка на 16:00, 7 окт 2021',
      date: '7 окт 2021 15:00'
    },
    {
      id: 3,
      title: 'Расписание',
      text: 'Запланирована уборка на 16:00, 7 окт 2021',
      date: '7 окт 2021 15:00'
    },
    {
      id: 4,
      title: 'Расписание',
      text: 'Запланирована уборка на 16:00, 7 окт 2021',
      date: '7 окт 2021 15:00'
    },
    {
      id: 5,
      title: 'Расписание',
      text: 'Запланирована уборка на 16:00, 7 окт 2021',
      date: '7 окт 2021 15:00'
    },
  ];

  const [posts, setPost] = useState(timetable);

  const remove = (post) => {
    setPost(posts.filter(p => p.id !== post.id));
  };

  return (
    <ul className="timetable__items">
      {
        posts.map((item, index) => (
          <li key={index} className="timetable__item">
            <div>
              <div className="timetable__item-title">{item.title}</div>
              <div className="timetable__item-text">{item.text}</div>
            </div>
            <div>
              {item.date}
              <span onClick={() => remove(item.id)}>
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
import { useState } from 'react';
import Rating from '@mui/material/Rating';
import "./CompletedServices.scss";

const CompletedServices = () => {
  const [value, setValue] = useState(2);

  const completedServices = [
    {
      title: 'Индивидуальная уборка с особым подходом',
      date: '06:30, 1 окт 2021',
      Object: <Rating name="simple-controlled" defaultValue={5} onChange={(event, newValue) => { setValue(newValue); }} />,
    },
    {
      title: 'Поддерживающая уборка',
      date: '07:20, 2 окт 2021',
      Object: <Rating name="simple-controlled" defaultValue={1} onChange={(event, newValue) => { setValue(newValue); }} />,
    },
    {
      title: 'Поддерживающая уборка',
      date: '07:30, 5 окт 2021',
      Object: <Rating name="simple-controlled" defaultValue={1} onChange={(event, newValue) => { setValue(newValue); }} />,
    },
    {
      title: 'Генеральная уборка',
      date: '07:30, 10 окт 2021',
      Object: <Rating name="simple-controlled" defaultValue={1} onChange={(event, newValue) => { setValue(newValue); }} />,
    },
    {
      title: 'Поддерживающая уборка',
      date: '09:30, 21 окт 2021',
      Object: <Rating name="simple-controlled" defaultValue={1} onChange={(event, newValue) => { setValue(newValue); }} />,
    },
  ];

  return (
    <section>
      <ul className="completed-services__items">
        {
          completedServices.map((item, index) => (
            <li className="completed-services__item" key={index}>
              <div>
                <div className="completed-services__text">{item.title}</div>
              </div>
              <div className="completed-services__container">
                <div>{item.Object}</div>
                <div className="completed-services__button">Оставить чаевые</div>
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

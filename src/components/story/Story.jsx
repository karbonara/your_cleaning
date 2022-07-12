import CloseIcon from "../../assets/close.svg";
import ArrowStoryIcon from "../../assets/arrow-story.svg";
import LinearProgress, {
  linearProgressClasses
} from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";
import React from "react";
import "./Story.scss";

const Story = () => {

  const storyItems = [
    {
      id: '1',
      title: 'Склад',
      text: 'Хранение',
      dateStart: '03.06.2022 | 14:00',
      dateStartText: 'Старт',
      dateEnd: '03.06.2022 | 14:00',
      dateEndText: 'Финиш'
    },
    {
      id: '2',
      title: 'Склад',
      text: 'Хранение',
      dateStart: '03.06.2022 | 14:00',
      dateStartText: 'Старт',
      dateEnd: '03.06.2022 | 14:00',
      dateEndText: 'Финиш'
    },
    {
      id: '3',
      title: 'Склад',
      text: 'Хранение',
      dateStart: '03.06.2022 | 14:00',
      dateStartText: 'Старт',
      dateEnd: '03.06.2022 | 14:00',
      dateEndText: 'Финиш'
    },
  ];

  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor:
        theme.palette.grey[theme.palette.mode === "light" ? 200 : 800]
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8"
    }
  }));

  const [item, setItem] = React.useState(storyItems);

  const handleClick = (itemId) => {
    storyItems.filter(test => test.id !== itemId)
  }

  return (
    <div className="story">
      <div className="story__main-text">
        <span className="story__text">История</span>
        <span className="story__label">
          За все время
          <img src={ArrowStoryIcon} alt="icon" />
        </span>
      </div>
      <ul className="story__items">
        {
          storyItems.map((item) => (
            <li key={item.id} className="story__item">
              <div className="story__item-info">

                <div className="story__item-info-container">
                  <span className="story__item-info-title">{item.title}</span>
                  <span className="story__item-info-text">{item.text}</span>
                </div>

                <div className="story__item-info-container">
                  <span className="story__item-info-date">{item.dateStart}</span>
                  <span className="story__item-info-text">{item.dateStartText}</span>
                </div>

                <div className="story__item-info-container">
                  <span className="story__item-info-date">{item.dateEnd}</span>
                  <span className="story__item-info-text">{item.dateEndText}</span>
                </div>

                <div>
                  <span className="story__item-close">
                    <img
                      onClick={handleClick}
                      src={CloseIcon}
                      alt="close"
                    />
                  </span>
                </div>

              </div>
              <div className="story__item-progress">
                <span className="story__item-progress-button">
                  Подробнее
                  <img src={ArrowStoryIcon} alt="icon" />
                </span>
                <BorderLinearProgress className="progress" variant="determinate" value={80} />
              </div>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Story;

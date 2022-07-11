import CloseIcon from "../../assets/close.svg";
import ArrowStoryIcon from "../../assets/arrow-story.svg";
import LinearProgress, {
    linearProgressClasses
} from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";
import "./Story.scss";

const Story = () => {

    const storyItems = [
        {
            title: 'Склад',
            text: 'Хранение',
            dateStart: '03.06.2022 | 14:00',
            dateStartText: 'Старт',
            dateEnd: '03.06.2022 | 14:00',
            dateEndText: 'Финиш'
        },
        {
            title: 'Склад',
            text: 'Хранение',
            dateStart: '03.06.2022 | 14:00',
            dateStartText: 'Старт',
            dateEnd: '03.06.2022 | 14:00',
            dateEndText: 'Финиш'
        },
        {
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
                    storyItems.map((item, index) => (
                        <li key={index} className="story__item">
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
                                    <span className="story__item-close"><img src={CloseIcon} alt="close" /></span>
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

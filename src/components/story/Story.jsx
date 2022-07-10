import LinearProgress, {
    linearProgressClasses
} from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";
import "./Story.scss";

const Story = () => {

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
        <>
            <ul className="story__items">
                <li className="story__item">
                    <div className="story__item-info">
                        <div className="story__item-info-container">
                            <span className="story__item-info-title">Склад</span>
                            <span className="story__item-info-text">Хранение</span>
                        </div>

                        <div className="story__item-info-container">
                            <span className="story__item-info-title">03.06.2022 | 14:00</span>
                            <span className="story__item-info-text">Старт</span>
                        </div>

                        <div className="story__item-info-container">
                            <span className="story__item-info-title">03.06.2022 | 14:00</span>
                            <span className="story__item-info-text">Финиш</span>
                        </div>
                    </div>
                    <div className="story__item-progress">
                        <span>Подробнее</span>
                        <BorderLinearProgress className="progress" variant="determinate" value={80} />
                    </div>
                </li>
            </ul>
        </>
    )
}

export default Story;

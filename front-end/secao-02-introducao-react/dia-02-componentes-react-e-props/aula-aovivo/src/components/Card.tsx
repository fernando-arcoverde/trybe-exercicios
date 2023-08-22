import { ForecastType } from '../data/forecast';
import './Card.css';

type CardProps = {
  data: ForecastType
};

function Card(props:CardProps) {
  const { data } = props;
  const { weekday, date, image, temp, weather } = data;
  return (
    <div className="Card">
      <h3>{weekday}</h3>
      <p>{date}</p>
      <img src={ image } alt="" />
      <p>{temp}</p>
      <p>{weather}</p>
    </div>
  );
}

export default Card;

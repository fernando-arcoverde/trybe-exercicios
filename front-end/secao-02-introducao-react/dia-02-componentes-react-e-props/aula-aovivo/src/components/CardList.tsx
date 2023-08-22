import { forecastList } from '../data/forecast';
import Card from './Card';
import './CardList.css';

function CardList() {
  return (
    <div className="CardList">
      <Card data={ forecastList[0] } />
      <Card data={ forecastList[1] } />
      <Card data={ forecastList[2] } />
      <Card data={ forecastList[3] } />
    </div>
  );
}

export default CardList;

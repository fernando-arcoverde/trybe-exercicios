export type ForecastType = {
  weekday: string,
  date: string,
  temp: string,
  image?: string,
  weather: string
};

export const forecastList:ForecastType[] = [
  {
    weekday: 'Monday',
    date: 'JAN 1',
    temp: '25°',
    image: 'https://cdn-icons-png.flaticon.com/128/3222/3222800.png',
    weather: 'Cloudy',
  },
  {
    weekday: 'Tuesday',
    date: 'JAN 2',
    temp: '32°',
    image: 'https://cdn-icons-png.flaticon.com/128/3222/3222675.png',
    weather: 'Sunny',
  },
  {
    weekday: 'Wednesday',
    date: 'JAN 3',
    temp: '8°',
    image: 'https://cdn-icons-png.flaticon.com/128/3222/3222692.png',
    weather: 'Thunderstorm',
  },
  {
    weekday: 'Thursday',
    date: 'JAN 4',
    temp: '15°',
    image: 'https://cdn-icons-png.flaticon.com/128/3222/3222689.png',
    weather: 'Rainy',
  },
];

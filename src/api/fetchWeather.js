import axios from 'axios';
import API_K from './config_keys';


const URL = ('https://api.openweathermap.org/data/2.5/weather');
const API_KEY = API_K;
;
 console.log(process.env.WORLD_WEATHER_API_KEY);
export const fetchWeather = async (query) => {
    const { data } = await axios.get(URL, {
        params: {
            q: query,
            units: 'metric',
            APPID: API_KEY,
        }
    });

    return data;
}


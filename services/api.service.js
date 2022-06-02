// import https from 'https'; //? для 1-го та 2-го способу
import axios from 'axios'; //? 3-го способу
import { getKeyValue, TOKEN_DICTIONARY } from './storage.service.js';

const getIcon = (icon) => {
    switch (icon.slice(0, -1)) {
		case '01':
			return '☀️';
		case '02':
			return '🌤️';
		case '03':
			return '☁️';
		case '04':
			return '☁️';
		case '09':
			return '🌧️';
		case '10':
			return '🌦️';
		case '11':
			return '🌩️';
		case '13':
			return '❄️';
		case '50':
			return '🌫️';
	}
};

const getWeather = async (city) => {
    const token = process.env.TOKEN ?? await getKeyValue(TOKEN_DICTIONARY.token);
    if (!token) {
        throw new Error('Не задано ключ API. Задайте його через команду -t [API_KEY]');
    }

    //! конструювання url та отримання даних 
    //? замість 1-го варіанту конструювання url краще використовувати варіант 2 або 3
    //* 1-й спосіб (ручне конструювання url + https плагін)
    /* const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;

    https.get(url, (response) => {
        let res = '';
        response.on('data', (chunk) => {
            res += chunk;
        });
        response.on('end', () => {
            console.log(res);
        });
    });  */
    //* 2-й спосіб (конструювання за допомогою конструктора URL + https плагін)
    /* const url = new URL('https://api.openweathermap.org/data/2.5/weather');
    url.searchParams.append('q', city);
    url.searchParams.append('appid', token);
    url.searchParams.append('lang', 'en');
    url.searchParams.append('units', 'metric');

    https.get(url, (response) => {
        let res = '';
        response.on('data', (chunk) => {
            res += chunk;
        });
        response.on('end', () => {
            console.log(res);
        });
    }); */
    //* 3-й спосіб (плагін axios конструює url і отримує дані)
    const { data } = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
        params: {
            q: city,
            appid: token,
            lang: 'en',
            units: 'metric'
        }
    });
    return data;
};

export { getWeather, getIcon }
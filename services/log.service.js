import chalk from 'chalk'; //? для кольорових повідомлень в консолі
import dedent from 'dedent-js'; //? щоб не було відступу зліва у консольних повідомленнях

const printError = (error) => {
	console.log(chalk.bgRed(' ERROR ') + ' ' + error);
};

const printSuccess = (message) => {
	console.log(chalk.bgGreen(' SUCCESS ') + ' ' + message);
};

const printHelp = () => {
	console.log(
		dedent`${chalk.bgCyan(' HELP ')}
		Без параметрів - вивід погоди
		-s [CITY] - встановлення міста
		-h - вивід довідки
		-t [API_KEY] - вибір токена
		`
	);
};

const printWeather = (res, icon) => {
	console.log(
		dedent`${chalk.bgBlue(' Weather ')}
		${chalk.bgGray(' Місто ')} ${res.name}
		${chalk.bgGray(' Погода ')} ${res.weather[0].description} ${icon}
		${chalk.bgGray(' Температура ')} ${res.main.temp}℃  (відчувається як ${res.main.feels_like}℃ )
		${chalk.bgGray(' Вологість ')} ${res.main.humidity}%
		${chalk.bgGray(' Швидкість вітру ')} ${res.wind.speed}м/с
		`
	);
};

export { printError, printSuccess, printHelp, printWeather };
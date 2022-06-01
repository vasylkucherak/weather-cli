import chalk from 'chalk';
import dedent from 'dedent-js';

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

export { printError, printSuccess, printHelp };
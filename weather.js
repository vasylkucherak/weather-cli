#!/usr/bin/env node //? вказує, що викликати цей файл за допомогою node

const initCLI = () => {
    const args = getArgs(process.argv);
    console.log(args);
    if (args.h) {
        //? виклк help
    }
    if (args.s) {
        //? зберегти місто
    }
    if (args.t) {
        //? зберегти токен
    }
    // вивести погоду
}

initCLI();
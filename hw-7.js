//hw-7
/*
//1

let str = "js";
let upperCaseStr = str.toUpperCase();
console.log(upperCaseStr);

//2

function searchStart(arr, prefix) {
    prefix = prefix.toLowerCase();   //приводим префикс к нижнему регистру
    return arr.filter((str) => str.toLowerCase().startsWith(prefix));
}

console.log(searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко'));
console.log(searchStart(['яблоко', 'груша', 'гриб', 'огурец'], 'гру'));
console.log(searchStart(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино'));


//3

let numberDown = 32.58884;
let roundedDown = Math.floor(numberDown);
console.log(roundedDown);

let numberUp = 32.58884;
let roundedUp = Math.ceil(numberUp);
console.log(roundedUp);

let numberRound = 32.58884;
let rounded = Math.round(numberRound);
console.log(rounded);

//4

let numbers = [52, 53, 49, 77, 21, 32];  //создаем массив
let minNumber = Math.min(...numbers); // с помощью spread оператора (троеточия) передаем значение массива в функцию max и min
let maxNumber = Math.max(...numbers);

console.log(minNumber);
console.log(maxNumber);

//5

getRandomNumber = () => {
    let randomNumber = Math.floor(Math.random() * 10) + 1;  //math.random => случайное число, затем умножили на 10 чтобы получить число от 0 до 10 исключительно => округляем через floor и добавлям 1 чтобы получиьь 10
    console.log(randomNumber);
}

getRandomNumber()

//6

function getRandomArrNumbers(num) {
    let arrLenght = Math.floor(num / 2);
    let randomArr = [];  //в пустой массив пойдут сгенерированые числа

    for (let i = 0; i < arrLenght; i++) {  //цикл for выполняет arrLenght один раз
        let randomNum = Math.floor(Math.random() * (num + 1));
        randomArr.push(randomNum);
    }  //через push цифры поступают в рустой массив
    return randomArr;
}

console.log(getRandomArrNumbers(7));
console.log(getRandomArrNumbers(12));

//7

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomInt(1, 10));

//8

let myDate = new Date();
console.log(myDate);

//9

let currentDate = new Date(); //сохраняем текущую дату здесь
console.log('Текущая дата:', currentDate);

let futureDate = new Date(currentDate);
futureDate.setDate(currentDate.getDate() + 73);

console.log('Дата через 73 дня:', futureDate);

//10

function formatDateAndTime(date) {
    const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
    const days = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];

    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const weekday = days[date.getDay()];
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    return `Дата: ${day} ${month} ${year} - это ${weekday}. Время: ${hours}:${minutes}:${seconds}`;
}

let currentFullDate = new Date();
let formattedDateTime = formatDateAndTime(currentFullDate);

console.log(formattedDateTime);




//11 Game 2

function playWordGame() {
    let words = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];

    words = words.sort(() => Math.random() - 0.5);   //перемешали элементы массива
    alert(`Перемешанные слова: ${words}`);  //выводим массив

    let firstWord = prompt('Какой фрукт был первым?');
    let lastWord = prompt('Какой фрукт был последним?');

    if (firstWord === words[0] && lastWord === words[6]) {
        alert('Поздравляем, вы угадали оба слова!');
    } else if (firstWord === words[0] || lastWord === words[6]) {
        alert('Вы были близки к победе!');
    } else {
        alert('Вы ответили неверно!');
    }
}


//from hw-5
//GAME 1

function season() {
    let month = Number(prompt("Введите номер месяца"));

    if ((month >= 1 && month <= 2) || month === 12) {
        alert(`Зима`)
    } else if (month >= 3 && month <= 5) {
        alert(`Весна`)
    } else if (month >= 6 && month <= 8) {
        alert(`Лето`)
    } else if (month >= 9 && month <= 11) {
        alert(`Осень`)
    } else {
        alert(`Такого месяца нет!`)
    }
}

*/
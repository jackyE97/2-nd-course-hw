//2.2
/* 
//Number 1
let a = 10;
alert(a);

a = 20;
alert(a);

//Number 2
let iphone = 2007;
alert(iphone);

//Number 3
let java = 'Eich';
alert(java);

//Number 4
let first = 10;
let second = 2;

alert( first + second);
alert( first - second);
alert( first * second);
alert( first / second);

//Number 5
let result = 2 ** 5;
alert(result);


//Number 6
let firstNum = 9;
let SecondNum = 2;

alert(firstNum % SecondNum);

//Number 7
let num = 5;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num += 1;
num -= 1;
alert(num);

//Number 8
let age = Number(prompt('Сколько вам лет?'));
alert(age);

//Number 9.0

let user = {
    name: 'Jacky',
    age: 27,
    isAdmin: true,
};

//Number 9.1
user['city of residence'] = "Estonia";

//Number 9.2
user.age = Number(18);

//Number 9.3
delete user['city of residence'];

alert(user.name);
alert(user.age);
alert(user.isAdmin);
alert(user['city of residence']);

//Number 9.4
let info = prompt('Какую информацию хотите узнать о пользователе?');

alert(user[info]);

//Number 10
let visitor = prompt('Привет, ИМЯ!');

alert('Привет' + ', ' + visitor + '!');
*/


/*
//2.3

//#1
let password = prompt('Введите пароль');
let message;

if (password === 'sky') {
    message = 'Пароль введен верно';
} else {
    message = 'Пароль введен неправильно';
} alert(message);

//#2

let c = 5;
c = 0;
c = 10;
c = -3;
c = 2;

if (c > 0 && c < 10) {
    message = 'Верно';
} else { message = 'Неверно' };
alert(message);


//#3

let d = 105;
let e = 15;

if (d > 100 || e > 100) {
    message = 'Верно';
} else { message = 'Неверно' };
alert(message);


//#4
let a = '2';
let b = '3';
alert(Number(a) + Number(b));

//#5

let monthNumber = Number(prompt('Введите номер месяца:'));
switch (monthNumber) {
    case 1:
    case 2:
    case 12:
        alert('Зима');
        break;

    case 3:
    case 4:
    case 5:
        alert('Весна');
        break;

    case 6:
    case 7:
    case 8:
        alert('Лето');
        break;

    case 9:
    case 10:
    case 11:
        alert('Осень');
        break;

    default:
        alert('Нет такого месяца');
}
*/
//DOP

//7

let input = prompt("Пожалуйста, введите любое число");

let number = Number(input);

if (isNaN(number)) {
    alert("Вы ввели не число, попробуйте ещё");
} else {
    if (number % 2 === 0) {
        alert("Число четное");
    } else {
        alert("Число нечетное");
    }
}

//8

let OS = prompt("Введите вашу операционную систему (0 - IOS, 1 - Android)");

if (OS === '0') {
    console.log("Установите версию приложения для IOS по ссылке");
} else if (OS === '1') {
    console.log("Установите версию приложения для Android по ссылке");
}


//9

let clientOS = prompt("Введите вашу операционную систему (0 - IOS, 1 - Android)");
let clientDeviceYear = Number(prompt("Введите год создания вашего устройства"));

if (clientOS === '0') {
    if (clientDeviceYear >= 2015) {
         console.log("Установите версию приложения для iOS по ссылке");
    } else {
         console.log("Установите облегченную версию приложения для iOS по ссылке");
    }

} else if (clientOS === '1') {
    if (clientDeviceYear >= 2015) {
         console.log("Установите версию приложения для Android по ссылке");
    } else {
         console.log("Установите облегченную версию приложения для Android по ссылке");
    }
}
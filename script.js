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
alert( +first + +second);
alert( +first - +second);
alert( +first * +second);
alert( +first / +second);

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

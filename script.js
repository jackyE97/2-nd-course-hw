//Number 1
let a = Number(10);
alert(a);

let b = 20;
alert(b);

//Number 2
let iphone = Number(2007);
alert(iphone);

//Number 3
let java = 'Eich';
alert(java);

//Number 4
let apples = Number (10);
let pineapples = Number (2);
alert( +apples + +pineapples);
alert( +apples - +pineapples);
alert( +apples * +pineapples);
alert( +apples / +pineapples);

//Number 5
let result = 2 ** 5;
alert(result);


//Number 6
let cats = Number (9);
let dogs = Number (2);
alert(cats % dogs);

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
    name: String('Jacky'),
    age: Number(27),
    isAdmin: Boolean(true),
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
alert(info);

//Number 10
let visitor = prompt('Привет, ИМЯ!');
alert('Привет' + ',' + visitor + '!');






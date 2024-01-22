let a = 10;
alert(20);

let iphone = 2007;
alert(2007);

let java = 'Eich';
alert('Eich');

let apples = "10";
let pineapples = "2";
alert( +apples + +pineapples);
alert( +apples - +pineapples);
alert( +apples * +pineapples);
alert( +apples / +pineapples);

let result = 2 ** 5;
alert(result);

alert(9 % 2);

let num = 1;
num = num + 5;
num = num - 3;
num = num * 7;
num = num / 3;
num = num + 1;
num = num - 1;
alert(num);

let age = prompt('Сколько вам лет?');
alert(age);

let user = {
    name: "Jacky",
    age: "27",
    isAdmin: true,
    cityOfResidence: "Estonia",
};

user.age = "18";
delete user["cityOfResidence"];

alert(user.name);
alert(user.age);
alert(user.cityOfResidence);
alert(user.isAdmin);

let info = prompt('Какую информацию хотите узнать о пользователе?');
alert(user.info);

let visitor = prompt('Привет, ИМЯ!');
alert(visitor);






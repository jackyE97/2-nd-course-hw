//HW-5

//1
function findSmaller(num1, num2) {
    return (num1 < num2) ? num1 : num2;
};

console.log(findSmaller(8, 4));
console.log(findSmaller(6, 6));

//2

function checkEvenorOdd(number) {
    return (number % 2 === 0) ? 'Число четное' : 'Число нечетное';
}

console.log(checkEvenorOdd(4));
console.log(checkEvenorOdd(7));
//3

function num(number) {
    return (number * number)
}
console.log(num(4));
//4

function checkAge() {
    let userAge = Number(prompt("Сколько вам лет?"));

    if (userAge >= 0 && userAge <= 12) {
        alert("Привет, друг!");
    } else if (userAge < 0) {
        alert("Вы ввели неправильное значение");
    } else {
        alert("Добро пожаловать!");
    }
}
checkAge();

//5 
function checkNumbers(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
        return `Одно или оба значения не являются числом`;
    } else {
        return num1 * num2;
    }
}
console.log(checkNumbers(5, 7));
console.log(checkNumbers('пять', 7));

//6
function cubeNumber() {
    let nums = Number(prompt("Введите число"));
    if (!isNaN(nums)) {
        let result = nums ** 3;
        console.log(nums + ' в кубе равняется ' + result);
    } else {
        console.log('Переданный параметр не является числом');
    }
}

cubeNumber();

//7
let circle1 = {
    radius: 5,
    getArea: function () {
        return Math.PI * this.radius ** 2;
    },
    getPerimeter: function () {
        return 2 * Math.PI * this.radius;
    }
};
let circle2 = {
    radius: 7,
    getArea: function () {
        return Math.PI * this.radius ** 2;
    },
    getPerimeter: function () {
        return 2 * Math.PI * this.radius;
    }
};
console.log("Площадь круга circle1:", circle1.getArea());
console.log("Периметр окружности circle1", circle1.getPerimeter());
console.log("Площадь круга circle2", circle2.getArea());
console.log("Периметр окружности circle2", circle2.getPerimeter());

//8

function season() {
    let month = Number(prompt("Введите номер месяца"));

    if ((month >= 1 && month <= 2) || month === 12) {
        return `Зима`
    } else if (month >= 3 && month <= 5) {
        return `Весна`
    } else if (month >= 6 && month <= 8) {
        return `Лето`
    } else if (month >= 9 && month <= 11) {
        return `Осень`
    } else {
        return `Такого месяца нет!`
    }
}
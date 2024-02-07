//HM-6

//№1

const numbs = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < numbs.length; i++) {
    if (numbs[i] == 10) break;
    console.log(numbs[i]);
}

//№2

let arr = [1, 5, 4, 10, 0, 3];
let index = arr.indexOf(4);
console.log(index);


//№3

let numbers = [1, 3, 5, 10, 20];
let result = numbers.join(' ');
console.log(result);

//№4

let firstArray = [];

for (let i = 0; i < 3; i++) {
    firstArray[i] = []; // создаем подмассив

    for (let j = 0; j < 1; j++) {
        firstArray[i][j] = 1; // заполняем подмассив числами
    }
}

console.log(firstArray);

//№5

let secondArr = [1, 1, 1];
secondArr.push(2, 2, 2);
console.log(secondArr);

//№6

let thirdArr = [9, 8, 7, 'a', 6, 5];
thirdArr = thirdArr.filter(item => typeof item === 'number').sort();
console.log(thirdArr);


//№7

let guessNum = Number(prompt("Угадай число от 1 до 10"));

let fourthArr = [9, 8, 7, 6, 5];

if (fourthArr.includes(guessNum)) {
    alert("Угадал");
} else if (guessNum > 10) {
    alert("число от 1 до 10");
} else {
    alert("не угадал");
};

//№8

let letters = 'abcdef';
let reversedLetters =
    letters.split('').reverse().join('');
console.log(reversedLetters);

//№9

let fifthArr = [[1, 2, 3], [4, 5, 6]];
let newArr = fifthArr.flat();

console.log(newArr);

//№10

let sixthArr = [3, 5, 7, 4, 9, 6, 8];
for (let i = 1; i < sixthArr.length; i++) {
    let sum = sixthArr[i] + sixthArr[i - 1];
    console.log(sum);
}

//№11

function squareArray(newArr) {
    return newArr.map(num => num ** 2);
}

let number = [2, 4, 6, 8, 10];
let squaredNumber = squareArray(number);
console.log(squaredNumber)

//№12

function wordsLength(arr) {
    return arr.map(word => word.length);
}

let words = ['слово', '', 'слог', 'длинное предложение', 'буква'];
let getLength = wordsLength(words);
console.log(getLength);


//№13

function filterPositive(array) {
    return array.filter(num => num < 0);
}
console.log(filterPositive([-1, 0, 5, -10, 56]));
console.log(filterPositive([-25, 25, 0, -1000, -2]));


//ADD

//№14

let originArray = []; //пустой массив для заполнения случайными числами
let evenArray = []; // пустой массив для хнанения четных чисел

for (let i = 0; i < 10; i++) {  //цикл создания случайных чисел
    originArray.push(Math.floor(Math.random() * 11)); // генерация случайного числа от 0 до 10. Посдедние число исключаеться, поэтому 11 или 10 + 1
}

for (let i = 0; i < originArray.length; i++) { //цикл для для прохода по всем элементам исходного массива
    if (originArray[i] % 2 === 0) {  //провряем на четность
        evenArray.push(originArray[i]); // добавляем четное число в массив для четных чисел
    }
}

console.log(originArray);
console.log(evenArray);

//№15

let randomArray = [];
let total = 0;

for (let i = 0; i < 6; i++) {

    randomArray[i] = Math.floor(Math.random() * 11); // floor округления до целого, random для генерирования
    total += randomArray[i]; //добавляем случаный числа к total, чтобы вычислить общую сумму
}

let average = total / randomArray.length; //среднее арифметическое

console.log(randomArray);
console.log(average);






//from hw-5
//8

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
//HW-8

//1
const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
 ];

 people.sort((a,b) => a.age - b.age);
 console.log(people);


//2


function isPositive(num) {
    return num > 0;
    }
    function isMale(person) {
    return person.gender === 'male';
    }
    function filter(arr, ruleFunction) {
        let result = [];
        for (let i = 0; i < arr.length; i++) {
            if (ruleFunction(arr[i])) {
                result.push(arr[i]);
            }
        }
        return result;
    }
    
    console.log(filter([3, -4, 1, 9], isPositive)); // Должен выводить [3, 1, 9]
    
    const peopleGender = [
       {name: 'Глеб', gender: 'male'},
       {name: 'Анна', gender: 'female'},
       {name: 'Олег', gender: 'male'},
       {name: 'Оксана', gender: 'female'}
    ];
    
    console.log(filter(peopleGender, isMale)); // Должен выводить [{name: 'Глеб', gender: 'male'},  {name: 'Олег', gender: 'male'}]

//3
function logDateEvery3Seconds() {
    const startTime = Date.now();
    const intervalId = setInterval(function() {

        let currentTime = new Date().toLocaleString();
        console.log(currentTime);
        
        if (Date.now() - startTime >= 30000) {
            clearInterval(intervalId); 
            
            console.log("30 секунд прошло"); 
        }
    }, 3000);
}

logDateEvery3Seconds();

//4

function delayForSecond (callback) {
    setTimeout(callback, 1000);
}

delayForSecond(function () {
    console.log('Привет, Глеб');
});

//5

// Функция delayForSecond через 1 секунду пишет в консоль «Прошла одна секунда», 
// а затем вызывает переданный колбэк
function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
				if(cb) { 	
        cb(); }
    }, 1000)
}

// Функция sayHi выводит в консоль приветствие для указанного имени
function sayHi (name) {
    console.log(`Привет, ${name}!`);
}

// Код выше менять нельзя

// Нужно изменить код ниже:
delayForSecond(() => {
    sayHi('Глеб')
});




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


//1
for (let i = 1; i < 3; i++) {
    alert("Привет");
}

//2
let i = 1;
while (i <= 5) {
    console.log(i)
    i++
};

//3
let num = 7;
while (num <= 22) {
    console.log(num)
    num++
};

//4

const obj = {
    'Коля': 100,
    'Вася': 300,
    'Петя': 400,
}; for (let key in obj) {
    console.log(`${key} - зарплата ${obj[key]}`);
}


//5
let number = 0;
let n;

for (n = 1000; n >= 50; n /= 2) {
    number = number + 1;
};

console.log(`Количество итераций:  ${number}`);
console.log(`Результат: ${n}`);


//6

for (let day = 5; day <= 31; day += 7) {
    console.log(`Сегодня пятница, ${day} число. Необходимо подготовить отчет.`)
}
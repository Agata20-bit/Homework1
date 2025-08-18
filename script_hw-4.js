//task1
let count = 0;

while (count < 2) {
    console.log ("Привет");
    count++;
}

//task2
let d = 1;
while(d <= 5) {
    console.log (d);
    d++;
}

//task3
let i = 7;
while(i <= 22) {
    console.log (i);
    i++;
}

//task4
const obj = {
    "Коля" : '200',
    "Вася" : '300',
    "Петя" : '400',
}

for (let key in obj) {
   console.log (`"${key}" — зарплата "${obj[key]}" долларов`);
}
    
//task5
let n = 1000;
let num = 1; 

while (n >= 50) {
    n = n / 2; 
    console.log ('Итоговое число:', n);
    console.log ('Количество итераций:', num);
    num++; 
}

//task6    
let firstFriday = 5; 

  for (let i = firstFriday; i <= 31; i += 7) {
    if (i <= 31) {
       console.log (`Сегодня пятница. Необходимо подготовить отчет.`);
    }
    
}

//доп. задание 1
let k = 100;
let iterations = 1; 

while (k >= 0) {
    k = k - 7;
    console.log ('Итоговое число:', + k);
    console.log ('Количество итераций:', iterations);
    iterations++; 
} 

//доп. задание 2
const months = [
    "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль",
    "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
];

for(let i = 0; i < months.length; i++) {
    console.log(`${i + 1}. ${months[i]}`);
}

//доп. задание 3
const book = {
    название : '"Капитанская дочка"', 
    автор : 'А.С. Пушкин', 
    год : "1836", 
    жанр : "роман",
};

for (let key in book) {
   console.log (`${key} — ${book[key]}`);
}

//доп. задание 4
let randomNumbers = [100, 5, 3, 10, 9, -4];
if (randomNumbers.length === 0) {
    console.error("Массив пуст!");   
}

let minValue = randomNumbers[0];
for (let i = 1; i < randomNumbers.length; i++) {
    if (randomNumbers[i] < minValue) {
        minValue = randomNumbers[i];
    }    
}

console.log("Минимальное значение:", minValue);


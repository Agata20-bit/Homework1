//task1
const people = [
   { name: 'Глеб', age: 29 },
   { name: 'Анна', age: 17 },
   { name: 'Олег', age: 7 },
   { name: 'Оксана', age: 47 }
];

// Допишите колбэк для sort, изучите, как работает колбэк, в документации
console.log(people.sort((a, b) => a.age - b.age));
// код выше должен вывеcти =>
// [
//  { name: 'Олег', age: 7 },
//  { name: 'Анна', age: 17 },
//  { name: 'Глеб', age: 29 },
//  { name: 'Оксана', age: 47 }
// ]

//task2
function isPositive(num) {
 return num > 0;
}
function isMale(person) {
 return person.gender === 'male';
}
function filter(array, ruleFunction) {
 const result = []; // Создаем пустой массив для результата
    
    for (let i = 0; i < array.length; i++) {
        // Если функция-правило вернула true, добавляем элемент в результат
        if (ruleFunction(array[i])) {
            result.push(array[i]);
        }
    }
    
    return result;
}


console.log(filter([3, -4, 1, 9], isPositive));

const people1 = [
   {name: 'Глеб', gender: 'male'},
   {name: 'Анна', gender: 'female'},
   {name: 'Олег', gender: 'male'},
   {name: 'Оксана', gender: 'female'}
];

console.log(filter(people1, isMale));

// task3
function printCurrentDate() {
    const now = new Date();
    console.log(`Текущая дата: ${now.toLocaleString()}`);
}

function stopTimer() {
    clearInterval(interval);
    console.log('30 секунд прошло');
}

const interval = setInterval(printCurrentDate, 3000);

setTimeout(stopTimer, 30000);

//task4
function delayForSecond(callback) {
   setTimeout (callback, 1000);
}

delayForSecond(function () {
   console.log('Привет, Глеб!');
})

//task5
// Функция delayForSecond через 1 секунду пишет в консоль 
// «Прошла одна секунда», а затем вызывает переданный колбэк
function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if(cb) {  cb(); }
    }, 1000)
}

// Функция sayHi выводит в консоль приветствие для указанного имени
function sayHi (name) {
    console.log (`Привет, ${name}!`);
}

// Код выше менять нельзя

// Нужно изменить код ниже:
delayForSecond(() => sayHi('Глеб'))

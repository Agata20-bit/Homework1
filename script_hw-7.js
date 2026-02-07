//task1
const originalString = 'js';
const upperCaseString = originalString.toUpperCase();

console.log(upperCaseString); 

//task2
function filter(arr, str) {
    const lowerStr = str.toLowerCase();

    return arr. filter(item => item.toLowerCase().startsWith(lowerStr));
}
console.log(filter(['JavaScript', 'Java', 'Apple'], 'ja'))

// task3
const number = 32.58884;
console.log(Math.floor(number)); // Округляет до ближайшего меньшего целого
console.log(Math.ceil(number)); // Округляет до ближайшего большего целого
console.log(Math.round(number)); // Округляет до ближайшего целого по правилам математики

//task4
console.log(Math.min(52, 53, 49, 77, 21, 32)); //минимальное значения
console.log(Math.max(52, 53, 49, 77, 21, 32)); //максимальное значения

//task5
let num = (Math.random() * 10) + 1;
console.log(Math.floor(num));

//task6
function generateRandomArray(n) {
    let arr = [];
    for (let i = 0; i < n/2; i++) {
        arr.push(Math.floor(Math.random() * (n + 1)));
    }
    return arr;
}

console.log(generateRandomArray(10));

//task7
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomNumber(1, 5));

//task8
console.log(new Date()); //Выводит в консоль текущую дату.

//task9
let currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 73);

console.log(currentDate);

// task10
function formatDate(date) {
    const months = [
        'января', 'февраля', 'марта', 'апреля', 
        'мая', 'июня', 'июля', 'августа', 
        'сентября', 'октября', 'ноября', 'декабря'
    ];
    
    const daysOfWeek = [
        'понедельник', 'вторник', 'среда', 'четверг', 
        'пятница', 'суббота', 'воскресенье'
    ];
        
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const dayOfWeek = daysOfWeek[date.getDay()];
    
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    
    return `
    Дата : ${day} ${month} ${year} — это ${dayOfWeek}
    Время : ${hours}:${minutes}:${seconds}
    `;
}

console.log(formatDate(new Date()));


//task1
const array = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < array.length; i++) {
    if (array[i] === 10) {
        console.log(array[i]);
        break;
    }
    console.log(array[i]);
}

//task2
const numbs = [1, 5, 4, 10, 0, 3];
console.log(numbs[2]);

// task3
let number = [1, 3, 5, 10, 20];
let сombinedNumber = number.join(" ");
console.log(сombinedNumber); 

//task4
const arr = [];

for (let i = 0; i < 3; i++) {
    const arr2 = [];
   for (let i = 0; i < 3; i++) {
        arr2.push(1);
   }
    arr.push(arr2);   
}

console.log (arr);

//task5
const array1 = [1, 1, 1];
array.push(2, 2, 2);

console.log(array1);

//task6
const array2 = [9, 8, 7, 'a', 6, 5];
array2.sort();
const result = array2.filter(item => typeof item === 'number');
console.log(result); 

const filteredArr = array2.filter(item => typeof item === 'number');
console.log(filteredArr);

//task7
const numbers = [9, 8, 7, 6, 5];
const userInput = prompt('Угадайте число');
const userNumber = Number(userInput);
if (isNaN(userNumber)) {
    alert('Пожалуйста, введите число!');
} else {
       if (numbers.includes(userNumber)) {
        alert('Угадал!');
    } else {
        alert('Не угадал');
    }
}

//task8
let letters = ['abcdef'];
let reversedString = letters[0].split('').reverse().join('');
console.log(reversedString);

//task9
const array3 = [[1, 2, 3], [4, 5, 6]];
let result1 = [];
for(let i = 0; i < array3.length; i++) {
  result1 = result.concat(array3[i]);
}

console.log(result1); 


// task10
const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; 1 < arr1.length; i++) {
    if(arr1[i + 1]) {
        console.log(arr1[i] + arr1[i + 1]);
    }
}

// task11
function square (arr3) {
    return arr3.map (item => item ** 2);
}

console.log (square ([1, 2, 3]));

//task12
function getLength (arr4) {
    return arr4.map(item => item.length);
}

console.log(getLength (['JavaScript', 'мир']));

//task13
function negativeNumbers (array4) {
    return array4.filter(item => item < 0);
}

console.log (negativeNumbers ([-10, 20, -30, 40, -50, 60]));

//task14
function randomInt() {
    return Math.floor(Math.random() * 10);
}

const randomArray = [];

for (let i = 0; i < 10; i++) {
    randomArray.push(randomInt());
}

console.log(randomArray);

const evenNumbers = [];

for (let i = 0; i < randomArray.length; i++) {
    if (randomArray [i] % 2 === 0) {
        evenNumbers.push(randomArray[i]);
    };
};

console.log (evenNumbers);

//task15
function randomInt1() {
    return Math.floor(Math.random() * 10);
}

const randomNumb = [];

for (let i = 0; i < 10; i++) {
    randomNumb.push(randomInt1());
}

console.log(randomNumb);
console.log(randomNumb.reduce((a, b) => a + b) / randomNumb.length);

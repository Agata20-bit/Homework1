//task1
// const array = [1, 5, 4, 10, 0, 3];

// for (let i = 0; i < array.length; i++) {
//     if (array[i] === 10) {
//         console.log(array[i]);
//         break;
//     }
//     console.log(array[i]);
// }

//task2
// const numbs = [1, 5, 4, 10, 0, 3];
// console.log(numbs[2]);

//task3
// let number = [1, 3, 5, 10, 20];
// let сombinedNumber = number.join(" ");
// console.log(сombinedNumber); 

//task4
// const arr = [];

// for (let i = 0; i < 3; i++) {
//     const arr2 = [];
//    for (let i = 0; i < 3; i++) {
//         arr2.push(1);
//    }
//     arr.push(arr2);   
// }

// console.log (arr);

//task5
// const array1 = [1, 1, 1];
// array.push(2, 2, 2);

// console.log(array1);

//task6
// const array2 = [9, 8, 7, 'a', 6, 5];
// array2.sort();
// // const result = array2.filter(item => typeof item === 'number');
// // console.log(result); 

// const filteredArr = array2.filter(item => typeof item === 'number');
// console.log(filteredArr);

//task7
// const numbers = [9, 8, 7, 6, 5];
// const userInput = prompt('Угадайте число');
// const userNumber = Number(userInput);
// if (isNaN(userNumber)) {
//     alert('Пожалуйста, введите число!');
// } else {
//        if (numbers.includes(userNumber)) {
//         alert('Угадал!');
//     } else {
//         alert('Не угадал');
//     }
// }

//task8
// let letters = ['abcdef'];
// let reversedString = letters[0].split('').reverse().join('');
// console.log(reversedString);
// //task1
// const people = [
//    { name: 'Глеб', age: 29 },
//    { name: 'Анна', age: 17 },
//    { name: 'Олег', age: 7 },
//    { name: 'Оксана', age: 47 }
// ];

// // Допишите колбэк для sort, изучите, как работает колбэк, в документации
// console.log(people.sort((a, b) => a.age - b.age));
// // код выше должен вывеcти =>
// // [
// //  { name: 'Олег', age: 7 },
// //  { name: 'Анна', age: 17 },
// //  { name: 'Глеб', age: 29 },
// //  { name: 'Оксана', age: 47 }
// // ]

// //task2
// function isPositive(num) {
//  return num > 0;
// }
// function isMale(person) {
//  return person.gender === 'male';
// }
// function filter(array, ruleFunction) {
//  const result = []; // Создаем пустой массив для результата
    
//     for (let i = 0; i < array.length; i++) {
//         // Если функция-правило вернула true, добавляем элемент в результат
//         if (ruleFunction(array[i])) {
//             result.push(array[i]);
//         }
//     }
    
//     return result;
// }


// console.log(filter([3, -4, 1, 9], isPositive));

// const people = [
//    {name: 'Глеб', gender: 'male'},
//    {name: 'Анна', gender: 'female'},
//    {name: 'Олег', gender: 'male'},
//    {name: 'Оксана', gender: 'female'}
// ];

// console.log(filter(people, isMale));

// task3


//task4


//task5

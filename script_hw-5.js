//task1
const min = (a, b) => (a <b) ? a : b;

console.log(min (8, 4)); 
console.log(min(6, 6));  

// task2
function checkEven(n) {
    return n % 2 === 0 ? 'Число четное' : 'Число нечетное';
}
console.log (checkEven(6)); 
console.log (checkEven(3)); 
console.log (checkEven(36)); 
console.log (checkEven(9)); 


// task3
function Square(number) {
   console.log (number ** 2);
}
Square(4);

const up = (n) => n ** 2;
console.log (up (2))

// task4
function age() {
    let age = +prompt('Сколько вам лет?');
        
    if (age < 0) {
        alert('Вы ввели неправильное значение');
    } else if (age >= 0 && age <= 12) {
        alert('Привет, друг!');
    } else if (age >= 13) {
        alert('Добро пожаловать!');
    } else {
        alert('Пожалуйста, введите число');
    }     
}  
age ();
    
// task5
function multiplyNumbers(a, b) {
    const num1 = Number(a);
    const num2 = Number(b);
    
    if (isNaN(num1) || isNaN(num2)) {
        return 'Одно или оба значения не являются числом';
    }
        return num1 * num2;
}

console.log(multiplyNumbers(5, 10));    
console.log(multiplyNumbers('3', 7));   
console.log(multiplyNumbers('abc', 5)); 
console.log(multiplyNumbers(null, 2));  
 
// task6
function cubeNumber() {
    let number = prompt('Введите число:');
    
    if (isNaN(number)) {
        return 'Переданный параметр не является числом';
    } else {
       return `${number} в кубе равняется ${number ** 3}`; 
    }
}

console.log(cubeNumber());

// task7
function getArea() {
    return Math.PI * this.radius ** 2;
};

function getPerimeter() {
    return 2 * Math.PI * this.radius;
};

const circle1 = {
    radius: 10,
    methodGetArea : getArea,
    methodGetPerimeter : getPerimeter,
}

const circle2 = {
    radius: 20,
    methodGetArea : getArea,
    methodGetPerimeter : getPerimeter,
}

console.log(circle1.methodGetArea());   
console.log(circle2. methodGetPerimeter());
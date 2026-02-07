//task1
let password = 'пароль';
let inputValue = prompt('Введите пароль');
if (inputValue === password) {
    alert('Пароль введен верно');
    } else {
    alert('Пароль введен неправильно');
}

//task2
let c = Number (prompt('ВВеди любое число'));
if (c > 0 && c < 10) {
    console.log('Верно');
    } else {
    console.log('Неверно');
}

//task3
let d = Number(prompt("Введите первое число"));
let e = Number(prompt("Введите второе число"));
  
if (d > 100 || e > 100) {
    console.log("Верно");  
} else {
    console.log("Неверно");
}

//task4
let a = '2';
let b = '3';
alert(Number(a) + Number(b));
    
//task5
let monthNumber = Number(prompt("Введите номер месяца"));

if (monthNumber > 12 || monthNumber < 1) {
    console.log("Ошибка: неверный номер месяца");
} else {
    switch (monthNumber) {
        case 12:
        case 1:
        case 2:
            console.log("Зима");
            break;
        case 3:
        case 4:
        case 5:
            console.log("Весна");
            break;
        case 6:
        case 7:
        case 8:
            console.log("Лето");
            break;
        case 9:
        case 10:
        case 11:
            console.log("Осень");
            break;
    }
} 
    
//доп. задание 1
let userInput = prompt('Пожалуйста, введите любое число');
let number = parseFloat(userInput);

if (isNaN(number)) {
    alert('Вы ввели некорректное значение. Пожалуйста, введите число.');
} else {
    if (number % 2 === 0) {
        alert('Число четное');
    } else {
        alert('Число нечетное');
    }
}
    
//доп. задание 2
let clientOS = Number(prompt("Введите тип OS"));
if (clientOS === 0) {
        alert("Установите версию приложения для iOS по ссылке");
    } else if (clientOS === 1) {
        alert("Установите версию приложения для Android по ссылке");
    } else {
        alert("Неизвестная операционная система");
}

//доп. задание 3
let clientDeviceYear = prompt("Введите год выпуска вашего телефона");

clientOS = Number(clientOS);
clientDeviceYear = Number(clientDeviceYear);

if (isNaN(clientOS) || isNaN(clientDeviceYear)) {
    alert("Ошибка ввода данных. Пожалуйста, введите числовые значения.");
} else {
    if (clientOS === 0) {
        // Для iOS
        if (clientDeviceYear >= 2015) {
            alert("Вы можете установить стандартную версию приложения для iOS по ссылке");
        } else {
            alert("Установите облегченную версию приложения для iOS по ссылке");
        }
    } else if (clientOS === 1) {
        // Для Android
        if (clientDeviceYear >= 2015) {
            alert("Вы можете установить стандартную версию приложения для Android по ссылке");
        } else {
            alert("Установите облегченную версию приложения для Android по ссылке");
        }
    } else {
        alert("Неизвестная операционная система");
    }
}
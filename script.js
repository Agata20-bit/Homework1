function startGame1() {
    let targetNumber = Math.floor(Math.random() * 100) + 1; // Исправлено match на Math
    let attempts = 0; // Добавляем счетчик попыток
    
    while (true) {
        let guess = prompt('Угадай число от 1 до 100.');
        guess = Number(guess);
        
        if (isNaN(guess) || guess < 1 || guess > 100) {
            alert('Пожалуйста, введите число от 1 до 100.');
            continue;
        }
        
        attempts++;
        
        if (guess === targetNumber) {
            alert(`Поздравляю, ты угадал число за ${attempts} попыток!`);
            break;
        } 
        else if (guess < targetNumber) {
            alert('Больше! Попробуй еще раз');
        } 
        else {
            alert('Меньше! Попробуй еще раз');
        }
    }
    console.log('Кнопка "Играть" нажата!');
}
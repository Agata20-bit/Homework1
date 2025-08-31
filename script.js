function startGame1() {
    let targetNumber = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;
    
    while (true) {
        let guess = prompt('Угадай число от 1 до 100 или нажми "Отмена" для выхода');
        
        if (guess === null) {
            alert('Игра отменена. Спасибо за участие!');
            break;
        }
        
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
    console.log('Игра завершена!');
}

function startGame2() {
    if (confirm('Решите 5 простых арифметических задач?')) {
        const operations = ['+', '-', '*', '/'];
        let operation;
        let a, b, result;
        let userAnswer;
        let score = 0;
        const totalQuestions = 5;
        let currentQuestion = 1;

        function generateQuestion() {
            operation = operations[Math.floor(Math.random() * operations.length)];
            
            switch (operation) {
                case '+':
                    a = Math.floor(Math.random() * 10) + 1;
                    b = Math.floor(Math.random() * 10) + 1;
                    result = a + b;
                    break;
                    
                case '-':
                    a = Math.floor(Math.random() * 10) + 1;
                    b = Math.floor(Math.random() * a) + 1; 
                    result = a - b;
                    break;

                case '*':
                    a = Math.floor(Math.random() * 10) + 1;
                    b = Math.floor(Math.random() * 10) + 1;
                    result = a * b;
                    break;

                case '/':
                    b = Math.floor(Math.random() * 10) + 1;
                    a = b * Math.floor(Math.random() * 10);
                    result = a / b;
                    break;
            }
        }

        function askQuestion() {
            let question = '';
            
            switch (operation) {
                case '+':
                    question = `Вопрос ${currentQuestion}: Сложите ${a} и ${b}`;
                    break;
                case '-':
                    question = `Вопрос ${currentQuestion}: Вычтите ${b} из ${a}`;
                    break;
                case '*':
                    question = `Вопрос ${currentQuestion}: ${a} умножить на ${b}`;
                    break;
                case '/':
                    question = `Вопрос ${currentQuestion}: ${a} разделить на ${b}`;
                    break;
            }
            
            userAnswer = prompt(question);
            
            if (userAnswer === null) {
                alert('Игра отменена. Спасибо за участие!');
                return;
            }
            
            userAnswer = parseFloat(userAnswer);
            
            if (userAnswer === result) {
                alert('Правильно!');
                score++;
            } else {
                alert(`Неверно! Правильный ответ: ${result}`);
            }
            
            currentQuestion++;
            
            if (currentQuestion <= totalQuestions) {
                generateQuestion();
                askQuestion();
            } else {
                endGame();
            }
        }

        function endGame() {
            alert(`Игра окончена! Ваш результат: ${score} из ${totalQuestions} правильных ответов`);
        }

        generateQuestion();
        askQuestion();
    } else {
        alert('Вы отменили игру.');
    }
}


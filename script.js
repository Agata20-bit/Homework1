function startGame1() {
  let targetNumber = Math.floor(Math.random() * 100) + 1;
  let attempts = 0;

  while (true) {
    let guess = prompt(
      'Угадай число от 1 до 100 или нажми "Отмена" для выхода'
    );

    if (guess === null) {
      alert("Игра отменена. Спасибо за участие!");
      break;
    }

    guess = Number(guess);
    if (isNaN(guess) || guess < 1 || guess > 100) {
      alert("Пожалуйста, введите число от 1 до 100.");
      continue;
    }

    attempts++;

    if (guess === targetNumber) {
      alert(`Поздравляю, ты угадал число за ${attempts} попыток!`);
      break;
    } else if (guess < targetNumber) {
      alert("Больше! Попробуй еще раз");
    } else {
      alert("Меньше! Попробуй еще раз");
    }
  }
  console.log("Игра завершена!");
}

function startGame2() {
  if (confirm("Решите 5 простых арифметических задач?")) {
    const operations = ["+", "-", "*", "/"];
    let operation;
    let a, b, result;
    let userAnswer;
    let score = 0;
    const totalQuestions = 5;
    let currentQuestion = 1;

    function generateQuestion() {
      operation = operations[Math.floor(Math.random() * operations.length)];

      switch (operation) {
        case "+":
          a = Math.floor(Math.random() * 10) + 1;
          b = Math.floor(Math.random() * 10) + 1;
          result = a + b;
          break;

        case "-":
          a = Math.floor(Math.random() * 10) + 1;
          b = Math.floor(Math.random() * a) + 1;
          result = a - b;
          break;

        case "*":
          a = Math.floor(Math.random() * 10) + 1;
          b = Math.floor(Math.random() * 10) + 1;
          result = a * b;
          break;

        case "/":
          b = Math.floor(Math.random() * 10) + 1;
          a = b * Math.floor(Math.random() * 10);
          result = a / b;
          break;
      }
    }

    function askQuestion() {
      let question = "";

      switch (operation) {
        case "+":
          question = `Вопрос ${currentQuestion}: Сложите ${a} и ${b}`;
          break;
        case "-":
          question = `Вопрос ${currentQuestion}: Вычтите ${b} из ${a}`;
          break;
        case "*":
          question = `Вопрос ${currentQuestion}: ${a} умножить на ${b}`;
          break;
        case "/":
          question = `Вопрос ${currentQuestion}: ${a} разделить на ${b}`;
          break;
      }

      userAnswer = prompt(question);

      if (userAnswer === null) {
        alert("Игра отменена. Спасибо за участие!");
        return;
      }

      userAnswer = parseFloat(userAnswer);

      if (userAnswer === result) {
        alert("Правильно!");
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
      alert(
        `Игра окончена! Ваш результат: ${score} из ${totalQuestions} правильных ответов`
      );
    }

    generateQuestion();
    askQuestion();
  } else {
    alert("Вы отменили игру.");
  }
}

function startGame3() {
  while (true) {
    let inputText = prompt(
      'Введи текст, который будет перевернут или нажми "Отмена" для выхода'
    );

    if (inputText === null) {
      alert("Игра отменена. Спасибо за участие!");
      break;
    }

    const reversedText = inputText.split("").reverse().join("");

    alert(`Исходный текст: ${inputText}\nПеревернутый текст: ${reversedText}`);
  }

  console.log("Игра завершена!");
}

function startGame4() {
  const quiz = [
    {
      question: "Какой цвет небо?",
      options: ["1. Красный", "2. Синий", "3. Зеленый"],
      correctAnswer: 2,
    },
    {
      question: "Сколько дней в неделе?",
      options: ["1. Шесть", "2. Семь", "3. Восемь"],
      correctAnswer: 2,
    },
    {
      question: "Сколько у человека пальцев на одной руке?",
      options: ["1. Четыре", "2. Пять", "3. Шесть"],
      correctAnswer: 2,
    },
  ];

  let score = 0; // счетчик правильных ответов

  function startQuiz() {
    for (let i = 0; i < quiz.length; i++) {
      const question = quiz[i];

      const optionsString = question.options.join("\n");

      const userAnswer = prompt(
        `${question.question}\n\n${optionsString}\n\nВыберите номер правильного ответа:`
      );

      if (userAnswer === null) {
        alert("Викторина отменена.");
        return;
      }

      if (parseInt(userAnswer) === question.correctAnswer) {
        score++;
      }
    }

    alert(
      `Викторина завершена!\nВы правильно ответили на ${score} из ${quiz.length} вопросов.`
    );
  }

  startQuiz();
  console.log("Игра завершена!");
}

// игра "камень", "ножницы", "бумага"
function getComputerChoice() {
  const choices = ["камень", "ножницы", "бумага"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "Ничья! Вы выбрали одинаковый вариант.";
  }

  if (
    (userChoice === "камень" && computerChoice === "ножницы") ||
    (userChoice === "ножницы" && computerChoice === "бумага") ||
    (userChoice === "бумага" && computerChoice === "камень")
  ) {
    return "Вы победили!";
  }

  return "Компьютер победил!";
}

function startGame5() {
  const userChoice = prompt(
    "Выберите: камень, ножницы или бумага"
  ).toLowerCase();

  if (!["камень", "ножницы", "бумага"].includes(userChoice)) {
    return alert(
      "Неверный ввод! Пожалуйста, выберите камень, ножницы или бумагу."
    );
  }

  const computerChoice = getComputerChoice();

  const result = determineWinner(userChoice, computerChoice);

  alert(`
Ваш выбор: ${userChoice}
Выбор компьютера: ${computerChoice}
Результат: ${result}
`);
}

 function startGame6() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b})`;
    }

    function changeBackgroundColor() {
        document.body.style.backgroundColor = startGame6();
    }
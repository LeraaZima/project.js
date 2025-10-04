'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

const displayGuessMessage = function (message) {
  document.querySelector('.guess-message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const quessingNumber = Number(document.querySelector('.number-input').value);
  console.log(quessingNumber);

  //Нет ввода
  if (!quessingNumber) {
    displayGuessMessage('Введите какое-то число!');
    //Игрок выиграл
  } else if (quessingNumber == secretNumber) {
    displayGuessMessage('Правильно!');
    document.querySelector('.question').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor =
      'rgba(92, 49, 85, 1)';
    document.querySelector('.guess-message').style.color =
      'rgba(10, 178, 130, 1)';
    //Лучший результат
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //Игрок ввел число больше, чем было загадано
  } else if (quessingNumber != secretNumber) {
    if (score > 1) {
      //Если число попыток еще осталось - продолжаем
      document.querySelector('.guess-message').textContent =
        quessingNumber > secretNumber
          ? 'Больше, чем надо!'
          : 'Меньше, чем надо!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      //У игрока кончились попытки
      displayGuessMessage('Проиграл :(');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.question').textContent = '???';
  document.querySelector('body').style.backgroundColor = 'rgba(0, 0, 0, 1)';
  displayGuessMessage('Начни угадывать!');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number-input').value = '';
  document.querySelector('.guess-message').style.color =
    'rgba(255, 255, 255, 1)';
});

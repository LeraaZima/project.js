const kg = prompt('Введите свой вес в килограммах');
const height = prompt('Введите свой рост в метрах(Например: 1.63)');

const bodyMassIndex = kg / (height * height);
let answer;
 if(bodyMassIndex <= 25) {
    alert(`Да, твой BMI норм: ${bodyMassIndex}`);
 } else {
    alert(`Нет, твой BMI не норм: ${bodyMassIndex}`);
 }




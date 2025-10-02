const kg = prompt('Введите свой вес в килограммах');
const height = prompt('Введите свой рост в метрах(Например: 1.63)');

const bodyMassIndex = kg / (height * height);
const areYouOverweight = bodyMassIndex >= 25;

console.log(bodyMassIndex);

 alert('Имеете ли вы лишний вес?: ' + areYouOverweight)
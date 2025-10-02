// 1. Функция для расчёта чаевых
const calculateTips = (bill) => {
  const tips = bill < 20 ? bill * 0.2 : bill * 0.15;
  return tips;
};

// 2. Массив счетов
const amount = [11, 20, 47];

// 3. Массив чаевых
const arrTips = amount.map(bill => calculateTips(bill));

// 4. Массив общих сумм
const totals = amount.map((bill, i) => bill + arrTips[i]);

// Проверка
console.log('Счета:', amount);
console.log('Чаевые:', arrTips);
console.log('Общие суммы:', totals);

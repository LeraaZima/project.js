// Давайте вернемся к индексу массы тела! На этот раз мы будем использовать объекты для расчетов!
// ИМТ = вес / рост ** 2 = вес / (рост * height) (вес в килограммах и рост в метрах)
// Ваша задача:
// У нас есть два друга - Джек и Майк
// 1. Для каждого из них создайте объект со свойствами его имени, фамилии, веса и роста (Джек Уайт и Майк Блэк).
// 2. Создайте метод расчета ИМТ для каждого объекта, чтобы рассчитать ИМТ (один и тот же метод для обоих объектов). Сохраните значение индекса массы тела в свойстве и также верните его из метода.
// 3. Войдите в консоль, у кого индекс массы тела выше, а также укажите полное имя и соответствующий индекс массы тела. Пример: "Индекс массы тела Джека Уайта (25,7) выше, чем у Майка Блэка (22,4)!"
// Данные теста: вес Джека 79 кг, рост 1,70 м. Майк весит 91 кг, а его рост составляет 1,93 м.
// Счастливого кодирования!

jackObject = {
  firstName: 'Jack',
  lastName: 'White',
  weight: 79,
  height: 1.7,
  calcBMI: function () {
    this.BMI = this.weight / (this.height * this.height);
    return this.BMI;
  },
};

mikeObject = {
  firstName: 'Mike',
  lastName: 'Black',
  weight: 91,
  height: 1.93,
  calcBMI: function () {
    this.BMI = this.weight / (this.height * this.height);
    return this.BMI;
  },
};

console.log(jackObject.calcBMI(), mikeObject.calcBMI());
console.log(
  `Индекс тела ${jackObject.firstName} ${jackObject.lastName} (${
    jackObject.BMI
  }) ${jackObject.BMI > mikeObject.BMI ? 'больше' : 'меньше'}, чем у 
  ${mikeObject.firstName} ${mikeObject.lastName} (${mikeObject.BMI})`
);

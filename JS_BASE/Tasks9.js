// The weather forecast app displays a string with forecasted humidities from a given array.
// Example
// [49, 51, 63] will display " ... 49% humidity in 1 days ... 51% humidity in 2 days ... 63% humidity in 3 days ..."
// 1.	Create  a function printHumiditiesForecast(), which takes an array as a parameter and logs a string like the above to the console. Try it with both test datasets.
// 2.	Use the problem-solving framework: understand the problem and divide it into sub-problems!
// Data1: [49, 51, 63]
// Data2: [31, 29, 43, 58, 52]

// Приложение "Прогноз погоды" отображает строку с прогнозируемой влажностью воздуха из заданного массива.
// Пример
// [49, 51, 63] отобразится сообщение " ... влажность 49% через 1 день ... влажность 51% через 2 дня ... влажность 63% через 3 дня ..."
// 1. Создайте функцию printHumiditiesForecast(), которая принимает массив в качестве параметра и записывает строку, подобную приведенной выше, в консоль. Попробуйте это с обоими тестовыми наборами данных.
// 2. Используйте подход к решению проблем: поймите проблему и разделите ее на подзадачи!
// Данные 1: [49, 51, 63]
// Данные 2: [31, 29, 43, 58, 52]

//Как, в зависимости от массива передавать день в сообщении?
//Подадачи
//Создать функцию
//пройтись по массиву
//вывести строку

const printHumiditiesForecast = (data1) => {
  for (let i = 0; i < data1.length; i++) {
    console.log(`влажность ${data1[i]}% через ${i + 1} день ...`);
  }
};
printHumiditiesForecast([49, 51, 63]);

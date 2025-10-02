// // №1
// // Дано число. Проверьте, отрицательное оно или нет. Выведите об этом информацию в консоль.

// // let num = prompt('Введите любое число');

// // if (num >= 0) {
// //     console.log('Число положительное');
// // } else if (num < 0){
// //     console.log('Число отрицательно');
// // } else {
// //     console.log('Это не число');
// // }

// // №2
// // Дана строка. Выведите в консоль длину этой строки.

// const str = 'Hello';
// console.log(str.length);

// // №3
// // Дана строка. Выведите в консоль последний символ строки.

// console.log(str.slice(-1));

// // №4
// // Дано число. Проверьте, четное оно или нет.

// const num = 4

// if (num % 2 == 0){
//     console.log('Четное')
// } else {
//     console.log('Нечетное');
// }

// // №5
// // Даны два слова. Проверьте, что первые буквы этих слов совпадают.
// const oneWord = 'Cat';
// const twoWord = 'Iar';
// if (oneWord[0] === twoWord[0]) {
//     console.log('Совпадают');
// } else {
//     console.log('Не совпадают');
// }

// // №6
// // Дано слово. Получите его последнюю букву. Если слово заканчивается на мягкий знак, то получите предпоследнюю букву.

// const getWord = 'Степень'
// if (getWord.slice(-1) === 'ь') {
//     console.log(getWord[getWord.length - 2]);
// } else {
//     console.log(getWord.slice(-1));
// }

// Дано число. Выведите в консоль первую цифру этого числа.

const num1 = 25;
console.log(String(num1)[0]);

// Дано число. Выведите в консоль последнюю цифру этого числа.
const num2 = 25;
console.log(String(num1).slice(-1));

// Дано число. Выведите в консоль сумму первой и последней цифры этого числа.
const num3 = 25;
const sum1 = Number(String(num1)[0]);
const sum2 = Number(String(num1).slice(-1));
console.log(sum1 + sum2);

// Дано число. Выведите количество цифр в этом числе.
const num4 = 25;
console.log(String(num1).length);

// Даны два числа. Проверьте, что первые цифры этих чисел совпадают.
const num5 = 56;
const num7 = 55;
if (String(num5)[0] === String(num7)[0]) {
  console.log('OK');
} else {
  console.log('No');
}

// Дана строка. Если в этой строке более одного символа, выведите в консоль предпоследний символ этой строки.

const str = 'C';
if (str.length > 1) {
  console.log(str[str.length - 2]);
} else {
  console.log('Sorry');
}

// Даны два целых числа. Проверьте, что первое число без остатка делится на второе.
const del1 = 10;
const del2 = 9;
if (del1 % del2 == 0) {
  console.log('super');
} else {
  console.log('No');
}

// Выведите в консоль все целые числа от 1 до 100.
for (let i = 0; i < 101; i++) {
  console.log(i);
}

// Выведите в консоль все целые числа от -100 до 0.
for (let i = -100; i <= 0; i++) {
  console.log(i);
}

// Выведите в консоль все целые числа от 100 до 1.
for (let i = 100; i > 0; i--) {
  console.log(i);
}

// Выведите в консоль все четные числа из промежутка от 1 до 100.
for (let i = 1; i <= 100; i += 2) {
  console.log(i);
}

// Выведите в консоль все числа кратные трем в промежутке от 1 до 100.
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0) {
    console.log(i);
  }
}

// Найдите сумму всех целых чисел от 1 до 100.
let sim = 0;
for (let i = 1; i <= 100; i++) {
  sim += i;
}
console.log(sim);

// Найдите сумму всех целых четных чисел в промежутке от 1 до 100.
let sumN = 0;
for (let i = 2; i <= 100; i += 2) {
  sumN += i;
}
console.log(sumN);

// Найдите сумму всех целых нечетных чисел в промежутке от 1 до 100.
let sumNu = 0;
for (let i = 1; i <= 100; i++) {
  if (i % 2 != 0) {
    sumNu += i;
  }
}
console.log(sumNu);

// Даны два целых числа. Найдите остаток от деления первого числа на второе.
let numOst1 = 8;
let numOst2 = 2;
let sumNum = numOst1 % numOst2;
console.log(sumNum);

// Дан массив с числами. Найдите сумму квадратов элементов этого массива.

let numArr = [1, 2, 3, 4, 5, 11];
let sumArr = 0;
for (let i = 0; i < numArr.length; i++) {
  sumArr += numArr[i] ** 2;
}
console.log(sumArr);

// Дан массив с числами. Найдите сумму квадратных корней элементов этого массива.

let sumSQ = 0;
for (let i = 0; i < numArr.length; i++) {
  sumSQ += Math.sqrt(numArr[i]);
}
console.log(sumSQ);

// Дан массив с числами. Найдите сумму положительных элементов этого массива.
let summArr = 0;
for (let i = 0; i < numArr.length; i++) {
  if (numArr[i] > 0) {
    summArr += numArr[i];
  }
}
console.log(summArr);

// Дан массив с числами. Найдите сумму тех элементов этого массива, которые больше нуля и меньше десяти.
let summArr2 = 0;
for (let i = 0; i < numArr.length; i++) {
  if (0 < numArr[i] && numArr[i] < 10) {
    summArr2 += numArr[i];
  }
}
console.log(summArr2);

// Дана строка:

// 'abcde'
// Получите массив букв этой строки.

const str1 = 'abcde';
const arr = str1.split('');

console.log(arr);

// Дано некоторое число:

// 12345
// Получите массив цифр этого числа.
const nm1 = 123456;
const arr2 = String(nm1).split('');

console.log(arr2);

// Дано некоторое число:
// 12345
// Переверните его:

const num = 12345;

const reversedNum = Number(String(num).split('').reverse().join(''));

console.log(reversedNum);

// Дано некоторое число:
// 12345
// Найдите сумму цифр этого числа.
const srtingNum = String(num);
let sumNm = 0;
for (let i = 0; i < String(num).length; i++) {
  sumNm += Number(srtingNum[i]);
}
console.log(sumNm);

// Заполните массив целыми числами от 1 до 10.

arrNull = [];
for (let i = 1; i <= 10; i++) {
  arrNull.push(i);
}
console.log(arrNull);

// Заполните массив четными числами из промежутка от 1 до 100.

arrNull = [];
for (let i = 2; i <= 100; i += 2) {
  arrNull.push(i);
}
console.log(arrNull);

// Дан массив с дробями:
// [1.456, 2.125, 3.32, 4.1, 5.34]
// Округлите эти дроби до одного знака в дробной части.

// Дан массив со строками. Оставьте в этом массиве только те строки, которые начинаются на http://.

// Дан массив со строками. Оставьте в этом массиве только те строки, которые заканчиваются на .html.

// Дан массив с числами. Увеличьте каждое число из массива на 10 процентов.

console.log();
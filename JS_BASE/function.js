function printText() {
  console.log('Hello!');
}

printText();

function colorizer(item, color, colorCode) {
  // console.log(item.color);
  const colorizedItem = `Эта ${item} ${color}. Код цвета: ${colorCode}`;
  // console.log(colorizedItem);
  return colorizedItem;
}

const messageFromColorizer = colorizer('desk', 'red', 99);
console.log(messageFromColorizer);

//Declarations and Expression

function getAge1(birthYear, yearNow) {
  //const age = yearNow - birthYear;
  return yearNow - birthYear;
}

const myAge1 = getAge1(2005, 2025);
console.log(myAge1);

//Expression

const getAge2 = function (birthYear, yearNow) {
  return yearNow - birthYear;
};

const myAge2 = getAge2(2005, 2025);
console.log(myAge2);

//стрелочные функции

const getAge3 = (birthYear, yearNow) => yearNow - birthYear;
const myAge3 = getAge3(2005, 2025);
console.log(myAge3);

const canBuyAlcohol = (birthYear, yearNow) => {
  const age = yearNow - birthYear;
  const isPersonOlderThan21 = age >= 21 ? true : false;return isPersonOlderThan21;
};

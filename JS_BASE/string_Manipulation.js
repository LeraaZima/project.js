let result;
const firstName = 'Jack';
const lastName = 'Brown';
const space = '';
const age = 20;
const greeting =  'Hi';

//Concatanation
result = firstName + space +  lastName;

result = greeting + space + 'My name is' + space + firstName + space + lastName 

//Escaping

result = 'I\'m 20 years old';//если не "", то \


// Properties and methods

result = 'Hi'.length; //длина

result = firstName.concat(space, lastName); //склеивание

result = result.toLocaleUpperCase(); //все заглавные 
result = result.toLocaleLowerCase(); //все маленькие

result = firstName[0];

result = 'Hi'.indexOf('i')// найти индекс символа 






console.log(result);
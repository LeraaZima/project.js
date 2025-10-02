// AND, OR, NOT

//AND
console.log(true && true); //true 
console.log(true && false); //false
console.log(false && false); //false

//OR 
console.log(true || true); //true 
console.log(true || false); //true
console.log(false || false); //false

//NOT
console.log(!true); //false
console.log(!false); //true

const hasMoney = true;
const isAdult = true;

if(hasMoney && isAdult) {
    console.log('Ты можешь купить алкоголь');
} else {
    console.log('Ты не можешь купить алкоголь');
}
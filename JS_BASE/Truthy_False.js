// JavaScript falsy values:
//0, '', undefiend, null, NaN - все остальное будет сконвентировано в True

console.log(Boolean(0))//false
console.log(Boolean(''))//false
console.log(Boolean(undefined))//false
console.log(Boolean(null))//false
console.log(Boolean(Nan))//false

console.log(Boolean(32))//true
console.log(Boolean('Hello'))//true
console.log(Boolean([]))//true
console.log(Boolean({}))//true
console.log(Boolean(3.5))//true

//На практике никогда не преобразуют в булиан явно, это просто для примера.

const age = 0;//false - потому что 0 = false

if(age) {
    console.log('Этот человек родился');
} else {
    console.log('Еще не родился)');
}

let weight;

if (weight) {
    console.log('Вес определен');
} else {
    console.log('Вес не определен');
}
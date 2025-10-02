const money = 100;
const cost = 50;
money >= cost
  ? console.log('Ты можешь купить это')
  : console.log('Ты не можешь купить это');

// const canYouBuyIt =
//   money >= cost ? 'Ты можешь купить это' : 'Ты не можешь купить это';
// console.log(canYouBuyIt);

// let canYouBuyIt;
// if(money >= cost) {
//     canYouBuyIt = 'Ты можешь купить это';
// } else {
//     canYouBuyIt = 'Ты не можешь купить это';
// }

console.log(`Ты ${money >= cost ? 'можешь' : 'не можешь'} купить это.`);

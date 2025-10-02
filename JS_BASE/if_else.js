// const age = 20;
// const isAdult = age >= 18;

// if(isAdult) {
//     console.log('Ты можешь смотреть это видео')
// }

const age = 16;

if (age >= 18) {
  console.log('Ты можешь смотреть это видео');
} else {
    // console.log('Тебе пока нельзя смотреть это видео)')
    const yearsLeft = 18 - age;
    console.log('Маленький) Ты сможешь посмотреть это видео через ' + yearsLeft + ' года');
}
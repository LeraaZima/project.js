const color = 'green';

switch(color) {
    case 'green':
        console.log('Go!');
        break;
    case 'yellow': 
        console.log('Get ready!');
        break
    case 'red':
        console.log('Stop!');
        break;
    default:
        console.log('Color undefiend!')
    
}


const weekday = 'Monday';

switch (weekday) {
  case 'Monday':
    console.log('Представь, что это пятница');
    break;
  case 'Tuesday':
    console.log('Представь, что это пятница');
    break;
  case 'Wednesday':
    console.log('Представь, что это пятница');
    break;
  case 'Thursday':
    console.log('Представь, что это пятница');
    break;
  case 'friday':
    console.log('Это пятница!');
    break;
  case 'Saturday':
  case 'Sunday':
    console.log('Зато это не понедельник(');
    break;
  default:
    console.log('Эта че?');
    break;
}
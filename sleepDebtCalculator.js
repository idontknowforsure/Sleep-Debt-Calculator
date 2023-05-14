const getSleepHours = day => {
switch(day) {
 case 'monday':
  return 9
  break;
 case 'tuesday':
  return 6
  break;
 case 'wednesday':
  return 4
  break;
 case 'thursday':
  return 3
  break;
case 'friday':
 return 3
 break;
case 'saturday':
 return 4
 break;
case 'sunday':
 return 3
 break;

 default:
 return "Error"
 }
};

const getActualSleepHours = () => 
   getSleepHours('monday') +
    getSleepHours('tuesday') +
    getSleepHours('wednesday') +
    getSleepHours('thursday') +
    getSleepHours('friday') +
    getSleepHours('saturday') +
    getSleepHours('sunday');

console.log(getSleepHours('monday'));
console.log(getActualSleepHours());

const getIdealSleepHours = () => {
  let idealHours = 8;
  return idealHours * 7;
};
const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();

  if(actualSleepHours === idealSleepHours) {
    console.log("You have got the perfect amount of sleep finally");
  }

  else if(actualSleepHours > idealSleepHours) {
    console.log("You have got " + (idealSleepHours - actualSleepHours) + "more hours of sleep this week");
  }

  else if(actualSleepHours < idealSleepHours) {
    console.log("You are not getting enough sleep because you slept for " + (idealSleepHours - actualSleepHours) + " hours less than you should have this week.")
  }

  else {
    console.log('Error code 1000, go fix what you have entered');
  }
};

calculateSleepDebt();
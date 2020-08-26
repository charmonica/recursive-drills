/* eslint-disable no-console */
// Counting Sheep

function countingSheep(num) {
  if (num === 0) {
    console.log('All sheep jumped over the fence');
  } else {
    console.log(`${num}: Another sheep jumps over the fence!`);
    countingSheep(num - 1);
  }
}

countingSheep(7);

//Power Calculator

function powerCalculator(base, exp) {
  if (base <= 0) {
    console.log('Num must be greater than 0');
  } else if (exp === 0) {
    return 1;
  } else {
    return base * powerCalculator(base, exp - 1);
  }
}

console.log(powerCalculator(10, -2));


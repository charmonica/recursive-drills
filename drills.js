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

//Reverse String

function reverseString(string) {
  if (string.length === 1) {
    return string[0];
  } else {
    return (string.charAt(string.length - 1) + reverseString(string.slice(0, -1)));
  }
}

//nth Triangular Number

function triangularNumber(number) {
  if (number === 1) {
    return number;
  } else {
    return number + triangularNumber(number -1);
  }
}

//String Splitter

function stringSplitter(string, divider) {
  if (string.length <= 1) {
    string [0] === divider ? string [0] : ',';
  } else {
    const splitString = stringSplitter((string.substring(1, string.length -1)), divider);
    return splitString;
  }
}
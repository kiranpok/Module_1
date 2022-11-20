'use strict';

const choice = confirm('Should I calculate the square root?');
if (choice) {
  const num = prompt('Enter a number:');
  if (num >= 0) {
    document.querySelector('#target').innerHTML = `Square root of ${num} is ${Math.sqrt(+num)}`;
  } else {
    document.querySelector('#target').innerHTML = `Square root of neg number is ${num} is non-defined`;
  }
} else {
  document.querySelector('#target').innerHTML = `The square root will not be calculated`;
}
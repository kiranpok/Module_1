const number = parseInt(prompt('Give a number: '))
let isPrime= true;

if (number ===1){
  document.querySelector('#target').innerHTML= number + 'is neither a prime number, nor a composite number. '
}else if (number > 1){
  for(let i=2; i<number; i++){ // Looping through 2 to number-1
    if (number % i === 0){
      isPrime = false;
      break;
    }
  }
}
if (isPrime){
  document.querySelector('#target').innerHTML=number+' is a prime number. '
} else{
  document.querySelector('#target').innerHTML = number+ ' is not a prime number.'
}
const room1 = 'Gryffindor';
const room2 = 'Slytherin';
const room3 = 'Hufflepuff';
const room4 = 'Ravenclaw';

const name=prompt('What\'s your name?')
let result = Math.floor(Math.random()*4)+1;
console.log(result);

if (result ===1){
  document.querySelector('#target').innerHTML = name +' you are in class '+room1+'.';}
else if (result ===2){
  document.querySelector('#target').innerHTML = name +' you are in class '+room2+'.';}
else if (result ===3){
  document.querySelector('#target').innerHTML = name +' you are in class '+room3+'.';}
else{
  document.querySelector('#target').innerHTML = name +' you are in class '+room4+'.';}

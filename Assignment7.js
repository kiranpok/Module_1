const dice = parseInt(prompt('How many dices to roll? '))

let result= 0;
for (let i=0; i<dice; i++){
  let dice_roll= Math.floor(Math.random()*6)+1;
  console.log(dice_roll);
  result += dice_roll;
}
document.querySelector("#target").innerHTML='The sum is '+result+' .'
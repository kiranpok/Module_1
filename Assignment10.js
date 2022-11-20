const dice_number= parseInt(prompt('How many dices? '))
const eye_number = parseInt(prompt('Guess the sum of eye numbers: '))
let eye_sum= 0;

for (let i=0; i <=10000;i++){
    let result=0;
    for (let dice=1; dice <= dice_number; dice++){
    result+= Math.floor(Math.random()*6)+1;
    if (result === eye_number){
      eye_sum++;
    }
  }
}

probability=( (eye_sum/10000)*100).toFixed(2)
document.querySelector('#target').innerHTML='Probability to get sum '+eye_number+' with '+dice_number+' dice is '+probability+' %.'
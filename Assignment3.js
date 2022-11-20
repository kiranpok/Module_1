const integer1= parseInt(prompt('Give a number'));
const integer2= parseInt(prompt('Give a number'));
const integer3= parseInt(prompt('Give a number'));

sum=parseInt(integer1+integer2+integer3)
product=parseInt(integer1*integer2*integer3)
average=parseInt((integer3+integer2+integer1)/3)

document.querySelector('#target').innerHTML= 'Sum is: '+sum+ '<br>'+' Product is: '+ product +'<br>'+' Average is: '+average;
starting_year= prompt('Starting year: ')
end_year = prompt('End year: ')

for(let i= starting_year; i <= end_year; i++){
  if ((i%4 ===0) && (i%100 !== 0) || (i%400===0)){
  document.querySelector('#target').innerHTML += '<ul><li>'+i+'</li></ul>';
  console.log(i);
}
}

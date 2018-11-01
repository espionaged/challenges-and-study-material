//https://www.codewars.com/kata/square-every-digit/train/javascript

function squareDigits(num) {
  const splitDigits = num.toString().split("");

  for (let i = 0; i < splitDigits.length; i++) {
    splitDigits[i] = Math.pow(splitDigits[i], 2);
  }
  return parseInt(splitDigits.join(""), 10);
}

/* 
function squareDigits(num){
  return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));
  
}

*/

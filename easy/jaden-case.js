//https://www.codewars.com/kata/5390bac347d09b7da40006f6

String.prototype.toJadenCase = function() {
  let stringArray = this.split(" ");

  for (let i = 0; i < stringArray.length; i++) {
    stringArray[i] =
      stringArray[i].toUpperCase().charAt(0) + stringArray[i].slice(1);
  }

  let finalResult = stringArray.join(" ");
  return finalResult;
};

/*

String.prototype.toJadenCase = function() {
  return this.split(' ').map(item => item[0].toUpperCase() + item.slice(1)).join(' ')
};

*/

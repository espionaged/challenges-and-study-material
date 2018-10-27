// return masked string

//https://www.codewars.com/kata/5412509bd436bd33920011bc
function maskify(cc) {
  const splitString = cc.split("");

  if (splitString.length <= 4) {
    return splitString.join("");
  }

  if (splitString.length > 4) {
    for (let i = 0; i < splitString.length - 4; i++) {
      splitString[i] = "#";
    }
    return splitString.join("");
  }
}

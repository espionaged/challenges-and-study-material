// https://www.codewars.com/kata/scramblies/train/javascript
function scramble(str1, str2) {
  const sortStr1 = str1.split("").sort();
  const sortStr2 = str2.split("").sort();

  let i = 0;

  for (let j = 0; j < sortStr1.length && i < sortStr2.length; j++) {
    if (sortStr1[j] === sortStr2[i]) {
      i++;
    }
  }

  return i === sortStr2.length;
}

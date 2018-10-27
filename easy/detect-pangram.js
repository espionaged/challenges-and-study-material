//https://www.codewars.com/kata/545cedaa9943f7fe7b000048

function isPangram(string) {
  const regex = /([a-z])(?!.*\1)/g;
  return string.toLowerCase().match(regex).length === 26;
}

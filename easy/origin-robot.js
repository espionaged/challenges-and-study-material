//https://leetcode.com/problems/robot-return-to-origin/

var judgeCircle = function(moves) {
  const splitMoves = moves.split("");
  let x = 0,
    y = 0;

  for (let i = 0; i < splitMoves.length; i++) {
    if (splitMoves[i] === "D") {
      y--;
    } else if (splitMoves[i] === "U") {
      y++;
    } else if (splitMoves[i] === "L") {
      x--;
    } else {
      x++;
    }
  }

  return x == 0 && y == 0;
};

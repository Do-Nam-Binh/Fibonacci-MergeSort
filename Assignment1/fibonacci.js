const fibs = function (num) {
  let firstNum = 0;
  let secondNum = 0;
  let temp = 0;
  const result = [];
  for (let i = 0; i < num; i++) {
    if (i == 0) {
      result.push(temp);
      temp = 1;
      secondNum = temp;
    } else {
      result.push(temp);
      temp = firstNum + secondNum;
      firstNum = secondNum;
      secondNum = temp;
    }
  }
  return result;
};

const fibsRec = function (num, seq = [0, 1]) {
  if (seq.length >= num) {
    return seq.slice(0, num);
  }
  seq.push(seq.at(-1) + seq.at(-2));
  return fibsRec(num, seq);
};

// console.log(fibs(8));
// console.log(fibs(9));
console.log(fibs(10));
console.log(fibsRec(8));

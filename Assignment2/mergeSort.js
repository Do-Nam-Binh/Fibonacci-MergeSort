const mergeSplit = function (arr) {
  if (arr.length == 0) return "Error, empty array";
  if (arr.length == 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid, arr.length);

  return merge(mergeSplit(left), mergeSplit(right));
};

const merge = function (left, right) {
  let iL = 0;
  let iR = 0;

  const arrResult = [];

  while (iL < left.length && iR < right.length) {
    if (left[iL] < right[iR]) {
      arrResult.push(left[iL]);
      iL++;
    } else {
      arrResult.push(right[iR]);
      iR++;
    }
  }

  while (iL < left.length) {
    arrResult.push(left[iL]);
    iL++;
  }
  while (iR < right.length) {
    arrResult.push(right[iR]);
    iR++;
  }

  return arrResult;
};

console.log(mergeSplit([12, 33, 11, -23, 9, 0, 221, 999]));
console.log(mergeSplit([11, 2, 32, 41, 333, 0, 11, 1, -99]));

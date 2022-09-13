function extractIncreasingSub(arr) {
  let newArr = [];
  let counter = 0;
  for (let element of arr) {
    if (counter === 0) {
      newArr.push(element);
      counter++;
      continue;
    }
    let currentBiggest = newArr[counter - 1];
    if (currentBiggest <= element) {
      newArr.push(element);
      counter++;
    } else {
      continue;
    }
  }
  return newArr;
}
console.log(extractIncreasingSub([1,
  3,
  8,
  4,
  10,
  12,
  3,
  2,
  24])); 
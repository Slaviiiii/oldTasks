function everyNElFromArray(arr, step) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += step) {
    if (i === 0) {
      newArr.push(arr[i]);
      continue;
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
console.log(everyNElFromArray(['5',
  '20',
  '31',
  '4',
  '20'],
  2)); 
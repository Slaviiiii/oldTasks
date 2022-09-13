function cookingNumbers(num, firstOp, secondOp, thirdOp, fourthOp, fifthOp) {
  let arr = [firstOp, secondOp, thirdOp, fourthOp, fifthOp];
  num = Number(num)
  for (let element of arr) {
    if (element === 'chop') {
      num /= 2;
      console.log(num);
    } else if (element === 'bake') {
      num *= 3;
      console.log(num);
    } else if (element === 'spice') {
      num += 1;
      console.log(num);
    } else if (element === 'fillet') {
      num -= (num * 0.20);
      console.log(num);
    } else if (element === 'dice') {
      let newNum = Math.sqrt(num);
      num = newNum;
      console.log(num);
    }
  }
}
cookingNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet')
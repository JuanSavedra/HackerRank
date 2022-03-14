function simpleArraySum(ar) {
  let result = 0;

  for (let i = 0; i < ar.length; i++) {
    result = ar[i] + result;
  }

  return result;
}

console.log(simpleArraySum(ar = [1, 2, 3, 4, 10, 11]));
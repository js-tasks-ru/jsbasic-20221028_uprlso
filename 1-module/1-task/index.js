function factorial(number) {
  if (isNaN(number) ||
      number < 0 ||
      number === ""
  ) {
    return null;
  }
  
  if (number === 0 || number === 1) {
    return 1;
  }
  // после 170 функция выдает бесконечность
  if (number > 170) {
    return Infinity
  }

  let factorialChain = [];
  let numberTwo;

  for(let j = number-1; j > 0; j--) {
    factorialChain.push(j);
  }

  numberTwo = factorialChain.reduce((multiplication, element) => {
    return multiplication * element;
  })

  result = number * numberTwo;

  return result;
}
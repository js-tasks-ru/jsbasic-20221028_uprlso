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
  let result;

  for(let j = 1; j <= number; j++){
    factorialChain.push(j);
  }

  result = factorialChain.reduce((multiplication, element) => {
    return multiplication * element;
  })

  return result;
}
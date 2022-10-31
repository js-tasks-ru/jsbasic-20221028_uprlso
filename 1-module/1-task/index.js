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

  if (number > 170) {
      return Infinity
  }

  let factorialChain = [];
  let result;

  for(let j = 0; j <= number; j++){
      if (j > 0) {
          factorialChain.push(j);
      }
  }

  result = factorialChain.reduce((multiplication, element) =>{
      return multiplication * element;
  })

  return result
}
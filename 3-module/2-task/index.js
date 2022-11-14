function filterRange(arr, a, b)  {
  let result = [];

  let searchNum = arr.filter(number => {
    if (number >= a
        && number < b
       )  {
        result.push(number);
      }
  })
  return result;
}
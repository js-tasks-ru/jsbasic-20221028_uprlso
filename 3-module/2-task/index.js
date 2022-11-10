function filterRange(arr, a, b) {
  let newArr = [];

  let searchNum = arr.forEach(element =>  {
    if (element >= a && element < b)  {
    newArr.push(element);
    }
  });

  return newArr;
}
function getMinMax(str) {
  let masNum = str.split(" ");
  let numNum = [];

  let findNum = masNum.filter(item  =>  {
    if (!isNaN(item))  {
      return numNum.push(parseFloat(item));
    }
  });
  
  let sortnNum = selecSort(numNum);
  let x = sortnNum[0];
  let y = sortnNum[sortnNum.length - 1];

  return {min : x, max : y};
}

function selecSort(arr)  {
  for (let i = 0 ; i < arr.length; i++ )  {
    let indexMin = i;

    for(let j = i+1; j < arr.length; j++)  {
      if (arr[indexMin] > arr[j])  {
        indexMin = j;
      }
    }
    let tmp = arr[indexMin];
    arr[indexMin] = arr[i];
    arr[i] = tmp;
  }
  return arr;
}

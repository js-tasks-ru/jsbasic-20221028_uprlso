function sumSalary(salaries)  {
  let sum2 = {...salaries};
  let sum = [];
  let result;

  for (key in sum2)  {
    let variable = sum2[key];
    
    if (isNaN(variable) ||
      variable === "" ||
      typeof variable == "boolean" ||
      !isFinite(variable)
    )  {
       continue
    }  else  {
       sum.push(variable);
    }
  }

  if (sum.length === 0)  {
    return 0;
  }  else  {
    result = sum.reduce((accum,element) => {
      return accum + element;
    })
  }

  return result;
}

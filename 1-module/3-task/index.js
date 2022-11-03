function ucFirst(str) {
  if (!str)  {
    return "";
  }

  if (str.length === 1)  {
    return str.toUpperCase();
  }

  let changeStr = [];
  let result;

  for (let i = 0; i < str.length; i++)  {
    if (i === 0)  {
      changeStr.push(str[i].toUpperCase());
    }  else  {
        changeStr.push(str[i]);
    }
  }

  result = changeStr.join("");

  return result;
}
function truncate(str, maxlength) {
  if  (str.length <= maxlength)  {
    return str;
  }

  let newStr = str.split("");
  let limitLetters = [];
  let length = newStr.length;
  let maxIndex = maxlength - 1;
    
  for (let i = 0; i < length;i++) {
    if  (i < maxIndex)  {
      limitLetters.push(newStr[i]);
    }
    if  (i === maxIndex)  {
      limitLetters.push("…");
    }
  }

  result = limitLetters.join("");

  return result; 
}

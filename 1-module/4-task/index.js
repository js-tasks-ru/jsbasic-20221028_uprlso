const checkSpam = ((str) => {
  let spamOne = "1xBet".toLocaleLowerCase();
  let spamTwo = "XXX".toLocaleLowerCase();
  let smallStr = str.toLocaleLowerCase();

  if  (smallStr.includes(spamOne) || smallStr.includes(spamTwo))  {
    return true;
  }  else  {
    return false;
  }
})
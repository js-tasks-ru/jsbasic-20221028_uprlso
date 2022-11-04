const checkSpam = ((str) => {
  let spamOne = "1xBet".toLocaleLowerCase();
  let spamTwo = "XXX".toLocaleLowerCase();
  let smallStr = str.toLocaleLowerCase();

  return(smallStr.includes(spamOne) || smallStr.includes(spamTwo));
})
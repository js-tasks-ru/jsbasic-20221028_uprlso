let calculator = {
  save : {},
  checkNum(a, b)  {
    if (isNaN(a) || isNaN(b)) {
      return console.error("wrong input");
    }
  },
  read(numOne, numTwo)  {
    let saveNum = this.save;
    this.checkNum(numOne, numTwo);
    saveNum.x = numOne;
    saveNum.y = numTwo;
    return this.save;
  },
  sum(sumObj)  {
    let newSumObj = JSON.parse(JSON.stringify(this.save));
    let result = newSumObj.x + newSumObj.y;
    return result;
  },
  mul(mulObj)  {
    let newMulObj = JSON.parse(JSON.stringify(this.save));
    let result = newMulObj.x * newMulObj.y;
    return result;   
  }
};



// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально

function showSalary(users, age) {
  let copyUser = JSON.parse(JSON.stringify(users));
  let foundedUsers = [];
  let result = [];
  copyUser.filter(item =>  {
    if (item["age"] <= age)  {
      foundedUsers.push(item);
    }
  })
  foundUsers.forEach((element) => {
    let word = element["name"];
    let balance = element["balance"];
    let contain = [word, balance];
    result.push(contain.join(", "));
  })
  return result.join(`\n`);
}
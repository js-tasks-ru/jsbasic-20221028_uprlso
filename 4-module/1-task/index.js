function makeFriendsList(friends) {
  let Name = friends.map(element => {
    return `${element["firstName"]} ${element["lastName"]}`;
  });
  let newUi = document.createElement("ul");

  for (let index = 0; index < Name.length; index++) {
    let newLi = document.createElement("li");
    newLi.innerHTML = Name[index];
    newUi.append(newLi);
  }
  
  return newUi;
}
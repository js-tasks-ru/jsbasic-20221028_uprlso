function hideSelf() {
  finButton = document.querySelector("button");

  let hidButton =  ((click) => {
    return finButton.hidden = true;
  });

  finButton.addEventListener( "click" , hidButton );
}

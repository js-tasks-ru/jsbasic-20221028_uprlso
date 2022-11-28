function toggleText() {
  class hidipButton  {
    handleEvent(event)  {
      if (event.type === "click")  {
        text.hidden = "true";

        button.removeEventListener("click", hidBut);
        button.addEventListener("click", unhidBut);
      }
    }
  }
  class unhidipButton  {
    handleEvent(event)  {
      if (event.type === "click")  {
        let findText = document.getElementById('text');

        findText.removeAttribute('hidden');

        button.removeEventListener("click", unhidBut);
        button.addEventListener("click", hidBut);
      }
    }
  }

  let button = document.querySelector("button");
  let hidBut = new hidipButton();
  let unhidBut = new unhidipButton();

  button.addEventListener("click", hidBut)
}
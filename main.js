const text = document.querySelectorAll(".tab-text");
let buttons = document.querySelectorAll("button");
buttons.forEach((button, index) => {
  button.addEventListener("click", function () {
    text.forEach((item) => {
      item.classList.add("hidden");
    });
    text[index].classList.remove("hidden");
    buttons.forEach((item) => {
      item.classList.remove("back");
    });
    buttons[index].classList.add("back");
  });
});

const text = document.querySelectorAll(".tab-text");
let buttons = document.querySelectorAll("button");
buttons.forEach((button, index) => {
  button.addEventListener("click", function () {
    text.forEach((item) => {
      item.classList.add("hidden");
    });
    text[index].classList.remove("hidden");
  });
});

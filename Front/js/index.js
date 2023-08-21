window.addEventListener("load", () => {
  let button = document.querySelectorAll(".box");

  button[2].addEventListener("click", () => {
    document.querySelector(".calculator").style.cursor = "progress";
    setTimeout(() => {
      window.location.href = "../../calculator/calculator.html";
    }, 1000);
  });
  button[3].addEventListener("click", () => {
    document.querySelector(".clock").style.cursor = "progress";
    setTimeout(() => {
      window.location.href = "../../Clock/clock.html";
    }, 1000);
  });
  button[4].addEventListener("click", () => {
    document.querySelector(".XO").style.cursor = "progress";
    setTimeout(() => {
      window.location.href = "../../XO/XO.html";
    }, 1000);
  });
  button[5].addEventListener("click", () => {
    document.querySelector(".inarow").style.cursor = "progress";
    setTimeout(() => {
      window.location.href = "../../4inARow/index.html";
    }, 1000);
  });
});

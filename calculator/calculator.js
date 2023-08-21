let cell = document.querySelectorAll(".container>button");
let display = document.querySelector(".display");

window.addEventListener("load", () => {
  for (let cells of cell) {
    cells.addEventListener("click", (e) => {
      e.preventDefault();
      if (cells == cell[15]) {
        return;
      }
      display.value += cells.value;
    });
  }

  cell[15].addEventListener("click", (e) => {
    e.preventDefault();
    let displayValue = display.value;
    let result = eval(displayValue);
    let h3 = document.createElement("h3");
    let hr = document.createElement("hr");
    let inhistory = document.querySelector(".inhistory");
    display.value = result;
    console.log(result);
    inhistory.appendChild(h3);
    h3.innerText = displayValue + "=" + result;
    inhistory.appendChild(hr);
  });
  document.querySelector(".backone").addEventListener("click", (e) => {
    e.preventDefault();
    let displayValue = display.value;
    display.value = displayValue.slice(0, -1);
  });
  document.querySelector(".clearall").addEventListener("click", (e) => {
    e.preventDefault();
    let displayValue = display.value;
    display.value = displayValue.slice(0, 0);
  });
  document.querySelector(".history").addEventListener("click", (e) => {
    e.preventDefault();
    let clearhistory = document.querySelector(".clearhistory");
    let hidden = document.querySelector(".hidden");
    if (hidden.style.height === "600px") {
      hidden.style.height = "0px";
      clearhistory.style.display = "none";
    } else {
      hidden.style.height = "600px";
      clearhistory.style.display = "block";
    }
  });
  document.querySelector(".clearhistory").addEventListener("click", (e) => {
    e.preventDefault();
    let inhistory = document.querySelector(".inhistory");
    inhistory.innerText = "";
  });
});

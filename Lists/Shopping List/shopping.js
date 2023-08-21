z window.addEventListener("load", () => {
  let input = document.querySelector(".additem input");
  let amountbox = document.querySelector(".amount");
  let itembox = document.querySelector(".item");
  let addbtn = document.querySelector(".additem button");
  addbtn.addEventListener("click", () => {
    //amount
    let box = document.querySelector(".box");
    let amountside = document.querySelector(".amountside");
    let amountdiv = document.createElement("div");
    let amountplus = document.createElement("button");
    let amountpminus = document.createElement("p");
    let amountpplus = document.createElement("p");
    let amounth3 = document.createElement("h3");
    let amountminus = document.createElement("button");
    amounth3.innerText = 0;
    //item
    let itemname = document.createElement("h2");
    let hr = document.createElement("hr");
    if (input.value) {
      itembox.appendChild(itemname);
      itemname.innerText = input.value;
      itembox.appendChild(hr);
      amountside.appendChild(amountdiv);
      amountdiv.className = "amount";
      amountdiv.appendChild(amountminus);
      amountminus.appendChild(amountpminus);
      amountpminus.innerText = "-";
      amountdiv.appendChild(amounth3);
      amountdiv.appendChild(amountplus);
      amountplus.appendChild(amountpplus);
      amountpplus.innerText = "+";
    }
    amountminus.addEventListener("click", () => {
      const currentValue = parseInt(amounth3.innerText);
      if (currentValue > 0) {
        amounth3.innerText--;
      }
    });
    amountplus.addEventListener("click", () => {
      amounth3.innerText++;
    });
    input.value = "";
  });
});

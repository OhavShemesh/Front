// Get elements
const nameInputs = document.querySelectorAll(".name");
const dateInputs = document.querySelectorAll(".date");
const nameBoxPlace = document.getElementById("nameplace");
const dateBoxPlace = document.getElementById("dateplace");
const setNameButton = document.querySelector(".setname");
const setDateButton = document.querySelector(".setdate");
const nameInputBox = document.querySelector(".placename");
const dayInput = document.querySelector(".day");
const monthInput = document.querySelector(".month");
const yearInput = document.querySelector(".year");
const nameClose = document.querySelector(".nameClose");
const dateClose = document.querySelector(".dateClose");

// Event listeners for showing name and date input boxes
nameInputs.forEach((input) => {
  input.addEventListener("click", () => {
    nameBoxPlace.style.display = "block";
    dateBoxPlace.style.display = "none";
    nameInputBox.value = input.value; // Set input value to name input box
    setNameButton.onclick = function () {
      input.value = nameInputBox.value; // Set input value to clicked name input
      nameBoxPlace.style.display = "none";
    };
  });
});

dateInputs.forEach((input) => {
  input.addEventListener("click", () => {
    dateBoxPlace.style.display = "block";
    nameBoxPlace.style.display = "none";
    setDateButton.onclick = function () {
      if (
        dayInput.value.length == 2 &&
        monthInput.value.length == 2 &&
        yearInput.value.length == 4
      ) {
        input.value = `${dayInput.value}/${monthInput.value}/${yearInput.value}`; // Set input value to clicked date input
      }
      dateBoxPlace.style.display = "none";
    };
  });
});
nameClose.addEventListener("click", () => {
  nameBoxPlace.style.display = "none";
});
dateClose.addEventListener("click", () => {
  dateBoxPlace.style.display = "none";
});

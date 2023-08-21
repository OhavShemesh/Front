let cells = document.querySelectorAll(".cell");
let player = "red";
let bluecounter = document.querySelector(".bluecounter>h1");
bluecounter.innerText = 0;
let redcounter = document.querySelector(".redcounter>h1");
redcounter.innerText = 0;
let bluecircle = document.querySelector(".bluecircle");
let redcircle = document.querySelector(".redcircle");

window.addEventListener("load", () => {
  const placeDisc = () => {
    for (let cell of cells) {
      cell.addEventListener("click", () => {
        if (cell.style.backgroundColor == "") {
          cell.style.backgroundColor = player;
        } else {
          return;
        }
        if (player == "red") {
          player = "blue";
        } else {
          player = "red";
        }
        rules();
      });
    }
  };
  const rules = () => {
    let winCombos = [
      //*rows
      [0, 1, 2, 3],
      [1, 2, 3, 4],
      [2, 3, 4, 5],
      [3, 4, 5, 6],
      [4, 5, 6, 7],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [10, 11, 12, 13],
      [11, 12, 13, 14],
      [12, 13, 14, 15],
      [13, 14, 15, 16],
      [14, 15, 16, 17],
      [18, 19, 20, 21],
      [19, 20, 21, 22],
      [20, 21, 22, 23],
      [21, 22, 23, 24],
      [22, 23, 24, 25],
      [23, 24, 25, 26],
      [27, 28, 29, 30],
      [28, 29, 30, 31],
      [29, 30, 31, 32],
      [30, 31, 32, 33],
      [31, 32, 33, 34],
      [32, 33, 34, 35],
      [36, 37, 38, 39],
      [37, 38, 39, 40],
      [38, 39, 40, 41],
      [39, 40, 41, 42],
      [40, 41, 42, 43],
      [41, 42, 43, 44],
      //*columns
      [0, 9, 18, 27],
      [9, 18, 27, 36],
      [1, 10, 19, 28],
      [10, 19, 28, 37],
      [2, 11, 20, 29],
      [11, 20, 29, 38],
      [3, 12, 21, 30],
      [12, 21, 30, 39],
      [4, 13, 22, 31],
      [13, 22, 31, 40],
      [5, 14, 23, 32],
      [14, 23, 32, 41],
      [6, 15, 24, 33],
      [15, 24, 33, 42],
      [7, 16, 25, 34],
      [16, 25, 34, 43],
      [8, 17, 26, 35],
      [17, 26, 35, 44],
      //*diagonal
      [0, 10, 20, 30],
      [10, 20, 30, 40],
      [1, 11, 21, 31],
      [11, 21, 31, 41],
      [2, 12, 22, 32],
      [12, 22, 32, 42],
      [3, 13, 23, 33],
      [13, 23, 33, 43],
      [4, 14, 24, 34],
      [14, 24, 34, 44],
      [5, 15, 25, 35],
      [8, 16, 24, 32],
      [16, 24, 32, 40],
      [7, 15, 23, 31],
      [15, 23, 31, 40],
      [6, 14, 22, 30],
      [14, 22, 30, 38],
      [5, 13, 21, 29],
      [13, 21, 29, 37],
      [4, 12, 20, 28],
      [12, 20, 28, 36],
      [3, 11, 19, 27],
      [9, 19, 29, 39],
      [17, 25, 33, 41],
    ];
    for (let combo of winCombos) {
      let [a, b, c, d] = combo;
      if (
        cells[a].style.backgroundColor != "" &&
        cells[a].style.backgroundColor == cells[b].style.backgroundColor &&
        cells[b].style.backgroundColor == cells[c].style.backgroundColor &&
        cells[c].style.backgroundColor == cells[d].style.backgroundColor
      ) {
        setTimeout(() => {
          for (let cell of cells) {
            cell.style.backgroundColor = "";
          }
          if (player == "red") {
            alert("Blue Won");
            bluecounter.innerText++;
          } else {
            alert("Red Won");
            redcounter.innerText++;
          }
          player = "red";
        }, 10);
      }
    }
  };
  const restartgame = () => {
    let restartbtn = document.querySelector(".restartbtn");
    restartbtn.addEventListener("click", (e) => {
      player = "red";
      e.preventDefault();
      for (let cell of cells) {
        cell.style.backgroundColor = "";
      }
    });
  };
  const newgame = () => {
    let newgamebtn = document.querySelector(".restartCounter");
    newgamebtn.addEventListener("click", (e) => {
      e.preventDefault();
      player = "red";
      for (let cell of cells) {
        cell.style.backgroundColor = "";
      }
      bluecounter.innerText = 0;
      redcounter.innerText = 0;
    });
  };
  const changestart = () => {
    redcircle.addEventListener("click", () => {
      player = "red";
    });
    bluecircle.addEventListener("click", () => {
      player = "blue";
    });
  };
  changestart();
  newgame();
  restartgame();
  placeDisc();
});

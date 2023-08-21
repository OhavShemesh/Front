window.addEventListener("load", () => {
  setInterval(() => {
    let am = "am";
    let pm = "pm";
    let time = new Date();
    let hr = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    let clock = document.querySelector(".clock");
    if (sec < 10) {
      sec = "0" + sec;
    }
    if (min < 10) {
      min = "0" + min;
    }
    if (hr < 10) {
      hr = "0" + hr;
    }
    if (hr <= 12) {
      clock.innerHTML = hr + ":" + min + ":" + sec + am;
    } else if (hr > 12) {
      hr = hr - 12;
      clock.innerHTML = hr + ":" + min + ":" + sec + pm;
    }
  }, 1000);
});

// set inital value to zero
let count1 = 0;
let count2 = 0;
// select value and buttons
const value1 = document.querySelector("#value1");
const value2 = document.querySelector("#value2");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const counter = e.currentTarget.dataset.counter;
    if (counter === "1") {
      if (e.currentTarget.classList.contains("decrease")) {
        count1--;
      } else if (e.currentTarget.classList.contains("increase")) {
        count1++;
      } else {
        count1 = 0;
      }

      if (count1 > 0) {
        value1.style.color = "green";
      } else if (count1 < 0) {
        value1.style.color = "red";
      } else {
        value1.style.color = "#222";
      }
      value1.textContent = count1;
    } else if (counter === "2") {
      if (e.currentTarget.classList.contains("decrease")) {
        count2--;
      } else if (e.currentTarget.classList.contains("increase")) {
        count2++;
      } else {
        count2 = 0;
      }

      if (count2 > 0) {
        value2.style.color = "green";
      } else if (count2 < 0) {
        value2.style.color = "red";
      } else {
        value2.style.color = "#222";
      }
      value2.textContent = count2;
    }
  });
});

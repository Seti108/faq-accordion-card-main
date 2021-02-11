"use strict";

const rows = document.querySelectorAll(".text-row");

const row1 = document.querySelector(".row1");
const row2 = document.querySelector(".row2");
const row3 = document.querySelector(".row3");
const row4 = document.querySelector(".row4");
const row5 = document.querySelector(".row5");

const content = document.querySelector(".right-section");

// NEW CODE
const clearActive = function () {
  rows.forEach((row) => row.classList.remove("active"));
};

rows.forEach((row) => {
  row.addEventListener("click", function () {
    if (!row.classList.contains("active")) clearActive();
    row.classList.toggle("active");
  });
});

/* const textRow = document.querySelectorAll(".text-row"); */

/* rows.addEventListener("click", function (row) {
  row.forEach((row) => {
    if (!row.target.classList.contains("active")) {
      clearActive();
    } else row.target.classList.toggle("active");
  });
});
 */
/* rows.forEach((row) => {
  row.addEventListener("click", function () {
    if (!row.classList.contains("active")) {
      clearActive();
    } else row.classList.toggle("active");
  });
}); */

// OLD CODE DON'T WORK WITH TOGGLE

/*  Make a function that toggles the answer, styles on/off as well as toggling the other answers off when the active one is on

// The first row

const row1div = document.createElement("content1");

row1div.classList.add("text-row");

row1div.innerHTML = `<p>You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.<p>`;
let active1 = true;

document.querySelector(".row1").addEventListener("click", function () {
  if (active1 === true) {
    row1.append(row1div);
    document.getElementById("p1").style.color = "hsl(238, 29%, 16%)";
    document.getElementById("p1").style.fontWeight = 700;
    document.getElementById("row1-arrow").style.transform = "rotate(180deg)";
    active1 = false;
  } else {
    row1div.remove();
    document.getElementById("p1").style.color = "hsl(240, 6%, 50%)";
    document.getElementById("p1").style.fontWeight = 400;
    document.getElementById("row1-arrow").style.transform = "rotate(0deg)";
    active1 = true;
  }
});

// The second row

const row2div = document.createElement("content2");

row2div.classList.add("text-row");

row2div.innerHTML = `<p>No more than 2GB. All files in your
account must fit your allotted storage space.<p>`;
let active2 = true;
document.querySelector(".row2").addEventListener("click", function () {
  if (active2 === true) {
    row2.append(row2div);
    document.getElementById("p2").style.color = "hsl(238, 29%, 16%)";
    document.getElementById("p2").style.fontWeight = 700;
    document.getElementById("row2-arrow").style.transform = "rotate(180deg)";
    active2 = false;
  } else {
    row2div.remove();
    document.getElementById("p2").style.color = "hsl(240, 6%, 50%)";
    document.getElementById("p2").style.fontWeight = 400;
    document.getElementById("row2-arrow").style.transform = "rotate(0deg)";
    active2 = true;
  }
});

// The third row

const row3div = document.createElement("content3");

row3div.classList.add("text-row");

row3div.innerHTML = `<p>Click “Forgot password” from the login page or “Change password” from your
profile page. A reset link will be emailed to you.<p>`;
let active3 = true;
document.querySelector(".row3").addEventListener("click", function () {
  if (active3 === true) {
    row3.append(row3div);

    document.getElementById("p3").style.color = "hsl(238, 29%, 16%)";
    document.getElementById("p3").style.fontWeight = 700;
    document.getElementById("row3-arrow").style.transform = "rotate(180deg)";
    active3 = false;
  } else {
    row3div.remove();
    document.getElementById("p3").style.color = "hsl(240, 6%, 50%)";
    document.getElementById("p3").style.fontWeight = 400;
    document.getElementById("row3-arrow").style.transform = "rotate(0deg)";
    active3 = true;
  }
});

// The fourth row

const row4div = document.createElement("content4");

row4div.classList.add("text-row");

row4div.innerHTML = `<p>Yes! Send us a message and we’ll process your request no
questions asked.<p>`;
let active4 = true;
document.querySelector(".row4").addEventListener("click", function () {
  if (active4 === true) {
    row4.append(row4div);
    document.getElementById("p4").style.color = "hsl(238, 29%, 16%)";
    document.getElementById("p4").style.fontWeight = 700;
    document.getElementById("row4-arrow").style.transform = "rotate(180deg)";
    active4 = false;
  } else {
    row4div.remove();
    document.getElementById("p4").style.color = "hsl(240, 6%, 50%)";
    document.getElementById("p4").style.fontWeight = 400;
    document.getElementById("row4-arrow").style.transform = "rotate(0deg)";
    active4 = true;
  }
});

// The fifth row

const row5div = document.createElement("content5");

row5div.classList.add("text-row");

row5div.innerHTML = `<p>Yes! Send us a message and we’ll process your request no
questions asked.<p>`;
let active5 = true;
document.querySelector(".row5").addEventListener("click", function () {
  if (active5 === true) {
    row5.append(row5div);
    document.getElementById("p5").style.color = "hsl(238, 29%, 16%)";
    document.getElementById("p5").style.fontWeight = 700;
    document.getElementById("row5-arrow").style.transform = "rotate(180deg)";
    active5 = false;
  } else {
    row5div.remove();
    document.getElementById("p5").style.color = "hsl(240, 6%, 50%)";
    document.getElementById("p5").style.fontWeight = 400;
    document.getElementById("row5-arrow").style.transform = "rotate(0deg)";
    active5 = true;
  }
});
 */

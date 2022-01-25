"use strict";
/* javascript file for lab 6 */

console.log("Hello, World!");

//alert("This is an alert exercise. Don't use it in the assignment!");

let firstParagraph = document.getElementById("paragraph");

function clickButton()
{
  alert("Button Clicked!");
}

window.onload = init;

function openBox()
{
  let box  = document.getElementById("mystery-box");
  box.src = "http://2.bp.blogspot.com/-N_PBhYXHyTA/VIgnlYA-NrI/AAAAAAAAGFU/xDWB4vAjM8w/s1600/Green-Smiley1.png";
}

function init()
{
  let goButton = document.getElementById("go-btn");
  goButton.addEventListener("click", clickButton);

  let boxBtn = document.getElementById("box-btn");
  boxBtn.addEventListener("click", openBox);
}

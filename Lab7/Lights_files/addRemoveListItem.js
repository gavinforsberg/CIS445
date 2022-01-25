"use strict";
(function() {

  window.addEventListener('load', init);

  let hasAddedItems = false;
  function init() {
    // TODO: Your code here
    qs('button').addEventListener("click", btnClick);
  }

  function btnClick() {
      if(hasAddedItems) {
          removeListItems();
          hasAddedItems = false;
      }
      else {
          addListItems();
          hasAddedItems = true;
      }
  }

  function addListItems() {
      let li = document.createElement("li");
      li.textContent = "List item #1";
      qs('ul').appendChild(li);
      let li2 = document.createElement("li");
      li2.textContent = "List item #2";
      qs('ul').appendChild(li2);
  }

  function removeListItems() {
      qs('ul li:first-child').remove();
      let li = qs('ul li:first-child');
      li.parentElement.removeChild(li);
  }


  /** ---- Helper Functions ---- */

  function id(idName) {
    return document.getElementById(idName);
  }

  function qs(selector) {
    return document.querySelector(selector);
  }

  function qsa(selector) {
    return document.querySelectorAll(selector);
  }
})();

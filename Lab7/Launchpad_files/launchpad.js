'use strict';
(function() {
    window.addEventListener('load', init);

    function init() {
        // TODO: Add btn click listener
        let myBtn = document.getElementById('launch');
        myBtn = addEventListener("click", launch);
    }

    function launch() {
      console.log("rocket launced!");
      qs("div>img").classList.toggle("invisible");
    }

    /** ---- Helper Functions  ---- */

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

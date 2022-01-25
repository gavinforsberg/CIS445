'use strict';
(function() {
    window.addEventListener('load', init);

    function init() {
        let myBtn = qs('button');
        myBtn.addEventListener('click', toggleLight);
    }

    function toggleLight() {
        qs('#bulb > div').classList.toggle('hidden');
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

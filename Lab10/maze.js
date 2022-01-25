'use strict';                                               

(function() { 

    var lost = false;
	window.addEventListener('load', init);
	
    function init() 
    {   
        id("start").onclick = startGame;
        var boundaries = document.querySelectorAll("div.boundary");
        for(var i = 0; i < boundaries.length; i++)
        {
            boundaries[i].onmouseover = outOfBounds;
        }
        id("end").onmouseover = endGame;
    }

    function outOfBounds()
    {
        lost = true;
        var boundaries = document.querySelectorAll("div.boundary");
        for(let i = 0; i < boundaries.length; i++)
        {
            boundaries[i].classList.add("youlose");   
        }
        id("status").innerHTML = "You lost.";
    }

    function startGame() 
    {
        id("status").innerHTML = "Move your mouse over the 'S' to begin.";
        var mazeObj = id("maze");
        mazeObj.addEventListener('mouseleave', outOfBounds);        
        lost = false;
        var boundaries = document.querySelectorAll("div.boundary");
        for(let i = 0; i < boundaries.length; i++)
        {
            boundaries[i].classList.remove("youlose");
        }
    }

    function endGame()
    {
        if(lost == true)
        {
            id("status").innerHTML = "You lost."
        }
        else
        {
            id("status").innerHTML = "You won!"
        }
    }

    /* ----------Helper Functions---------- */ 
    function gen(tagName) {
        return document.createElement(tagName)
    }

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

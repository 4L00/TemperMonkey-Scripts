// ==UserScript==
// @name         Stream TMDB
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the streaming world!
// @author       You
// @match        https://www.themoviedb.org/movie/*
// @grant        none
// ==/UserScript==

var $ = window.jQuery;
	function insertBefore(el, referenceNode) {
    referenceNode.parentNode.insertBefore(el, referenceNode);
}

(function() {

    var tmdbid = window.location.href.split("/")[4].split("-")[0];

    var btn2 = document.createElement("button");
    btn2.id ='gdriveplayer';
    btn2.innerHTML = '<img src="https://i.ibb.co/JKvYrxr/play-arrow.png" />Watch  Now';
    btn2.style.margin = '170px 103px'
    btn2.style.background = 'transparent'
    btn2.style.color = '#3DB9D8'
    btn2.style.border = 'none'


    var y = document.getElementsByClassName('no_click')[9];
    insertBefore(btn2, y);


           document.getElementById("gdriveplayer").addEventListener("click", function(){
  window.open("https://database.gdriveplayer.us/player.php?tmdb=" + tmdbid);
});

})();
// ==UserScript==
// @name         Stream IMDB
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  try to take over the Streaming world!
// @author       4L00
// @match        https://www.imdb.com/title/*
// @grant        none
// ==/UserScript==
	function insertBefore(el, referenceNode) {
    referenceNode.parentNode.insertBefore(el, referenceNode);
}
(function() {

    var loc = window.location.href;
    var lst = loc.split("/");
    var tt = lst[4];

    var btn1 = document.createElement("BUTTON");
    btn1.id ='vidsrcme';
    btn1.innerHTML = "▶️ Stream Online #1";
    btn1.style.border = '#f5c518';
    btn1.style.margin = '0px 20px 25px';
    btn1.style.background = '#f5c518';
    btn1.style.color = '#000000';
    btn1.style.padding = '10px';
    btn1.style.borderRadius = '5px';

    var btn2 = document.createElement("BUTTON");
    btn2.id ='gdriveplayer';
    btn2.innerHTML = "▶️ Stream Online #2";
    btn2.style.border = '#f5c518';
    btn2.style.background = '#f5c518';
    btn2.style.color = '#000000'
    btn2.style.padding = '10px';
    btn2.style.borderRadius = '5px';
    btn2.style.margin = '0px 0px 25px';

    var x = document.getElementsByClassName('pro_title_link_with_separator')[0];
    insertBefore(btn1, x);

    var y = document.getElementsByClassName('pro_title_link_with_separator')[0];
    insertBefore(btn2, y);

    document.getElementById("vidsrcme").addEventListener("click", function(){
  window.open("https://vidsrc.me/embed/" + tt + "/");
});

   document.getElementById("gdriveplayer").addEventListener("click", function(){
  window.open("https://database.gdriveplayer.us/player.php?imdb=" + tt);
});
})();

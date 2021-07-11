// When the user scrolls the page, execute myFunction
const scrollable = document.getElementsByClassName("wrapper")[0];
scrollable.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = scrollable.scrollTop;
  var height = scrollable.scrollHeight - scrollable.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}
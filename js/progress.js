// When the user scrolls the page, execute myFunction
const scrollable = document.getElementsByClassName("wrapper")[0];
scrollable.onscroll = function() {myFunction()};

function myFunction() {
  const winScroll = scrollable.scrollTop;
  const height = scrollable.scrollHeight - scrollable.clientHeight;
  const scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style['mask-size'] = scrolled + "% 100%";
  document.getElementById("myBar").style['-webkit-mask-size'] = scrolled + "% 100%";

}
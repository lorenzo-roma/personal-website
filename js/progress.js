// When the user scrolls the page, execute myFunction
const scrollable = document.getElementsByClassName("wrapper")[0];
const progressBar =  document.getElementById("myBar");
const emptyProgressBar = document.getElementById("empty-bar");
scrollable.onscroll = function() {myFunction()};

function myFunction() {
  let winScroll = scrollable.scrollTop;
  let height = scrollable.scrollHeight - scrollable.clientHeight;
  let scrolled = (winScroll / height) * 100;
  let hasToBeVisible = (scrolled > 10) ? 1 : 0;
  progressBar.style.opacity = hasToBeVisible;
  emptyProgressBar.style.opacity = hasToBeVisible;
  progressBar.style['mask-size'] = scrolled + "% 100%";
  progressBar.style['-webkit-mask-size'] = scrolled + "% 100%";

}
//scrol up and down
var backToTopButton = document.getElementById("back-to-top");
window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
};

backToTopButton.onclick = function () {
  document.documentElement.scrollTop = 0;
};

//cart counter
var cartarr = JSON.parse(window.localStorage.getItem("cart")) || [];
document.getElementById("count").innerHTML = cartarr.length;

//slideshow

var curImg = document.getElementById("curImg");
var btn = document.getElementById("btn");
var i = 1;
function viewPictures() {
  curImg.setAttribute("src", "./images/slideshow/" + ++i + ".jpeg");
  if (i === 6) {
    i = 1;
    curImg.setAttribute("src", "./images/slideshow/1.jpeg");
  }
}

var myInterval = window.setInterval(viewPictures, 1500);

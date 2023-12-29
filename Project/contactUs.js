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

//form validation

//selectors
var nameInput = document.getElementById("name");
var emailInput = document.getElementById("email");
var phoneInput = document.getElementById("phone");
var passwordInput = document.getElementById("password");
var contactBtn = document.getElementById("contact-btn");
var spanList = document.getElementsByClassName("validation-span");
var nameRegex = /^[a-zA-Z\- ]{2,}$/;
var phoneRegex = /^(011|012|010|015)\d{8}$/;
var emailRegex = /^[a-zA-Z][a-zA-Z0-9]+@+[a-z]+\.com$/;
var passwordRegex = /^(?=.*[A-Z]).{8,}$/;
contactBtn.onclick = function (event) {
  event.preventDefault();

  if (nameRegex.test(nameInput.value)) {
    console.log(nameInput.value);
    spanList[0].classList.add("hidden");
  } else {
    spanList[0].classList.remove("hidden");
  }
  if (emailRegex.test(emailInput.value)) {
    console.log(emailInput.value);
    spanList[1].classList.add("hidden");
  } else {
    spanList[1].classList.remove("hidden");
  }
  if (phoneRegex.test(phoneInput.value)) {
    console.log(phoneInput.value);
    spanList[2].classList.add("hidden");
  } else {
    spanList[2].classList.remove("hidden");
  }
  if (passwordRegex.test(passwordInput.value)) {
    console.log(passwordInput.value);
    spanList[3].classList.add("hidden");
  } else {
    spanList[3].classList.remove("hidden");
  }
};

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

var i = 1;
var showNext = function () {
  i++;
  if (i === 10) {
    i = 1;
  }
  var image = document.getElementsByTagName("img")[0];
  var newImage = "./images/products/phones/" + i + ".jpg";
  var newAlt = "image" + i;
  image.setAttribute("src", newImage);
  image.setAttribute("alt", newAlt);
};

var showPre = function () {
  i--;
  if (i === 0) {
    i = 9;
  }
  var image = document.getElementsByTagName("img")[0];
  var newImage = "./images/products/phones/" + i + ".jpg";
  var newAlt = "image" + i;
  image.setAttribute("src", newImage);
  image.setAttribute("alt", newAlt);
};

var myInterval;
var play = (function () {
  myInterval = setInterval(function () {
    showNext();
  }, 2250);
})();

//slider with a transition but without next and pre button

// const slider = document.querySelector(".slider");
// var counter = 1;

// setInterval(function () {
//   slider.style.transition = "transform 0.5s ease-in-out";
//   slider.style.transform = `translateX(${-counter * 100}%)`;
//   counter++;

//   if (counter === 4) {
//     setTimeout(function () {
//       slider.style.transition = "none";
//       slider.style.transform = "translateX(0)";
//       counter = 1;
//     }, 500);
//   }
// }, 3000);

products = [
  {
    id: 0,
    title: "Iphone 15 Pro",
    price: "30000",
    category: "phones",
    description: "this is a description about iphone 15 pro",
    image: "home2/iphone-15.webp",
  },
  {
    id: 1,
    title: "Samsung S21",
    price: "22000",
    category: "phones",
    description: "this is a description about samsung s21",
    image: "home2/samsung-s21.jpg",
  },
  {
    id: 2,
    title: "BMW",
    price: "3000000",
    category: "cars",
    description: "this is a description about BMW",
    image: "home2/bmw.jpg",
  },
  {
    id: 3,
    title: "Dodge",
    price: "5000000",
    category: "cars",
    description: "this is a description about Dodge",
    image: "home2/dodge.webp",
  },
  {
    id: 4,
    title: "Aqua De Gio",
    price: "3000",
    category: "perfumes",
    description: "this is a description about aqua de gio",
    image: "home2/aqua-de-gio.jpg",
  },
  {
    id: 5,
    title: "Alure Homme",
    price: "5000",
    category: "perfumes",
    description: "this is a description about Alure Homme",
    image: "home2/alure.jpg",
  },
  {
    id: 6,
    title: "One Plus 7",
    price: "25000",
    category: "phones",
    description: "this is a description about One Plus 7",
    image: "home2/one-plus.jpg",
  },
  {
    id: 7,
    title: "Pegout 508",
    price: "1500000",
    category: "cars",
    description: "this is a description about Pegout 508",
    image: "home2/pegout-508.jpg",
  },
  {
    id: 8,
    title: "Stronger with you",
    price: "1500",
    category: "perfumes",
    description: "this is a description about Stronger with you",
    image: "home2/stronger-with-u.jpg",
  },
];

var AllBtn = document.getElementById("all-btn");
var phonesBtn = document.getElementById("phones-btn");
var perfumesBtn = document.getElementById("perfumes-btn");
var carsBtn = document.getElementById("cars-btn");
var allList = document.querySelectorAll("[data-category]");

var i = 0;
//creating product on page
var cardsContainer = document.getElementById("card-container");

cardsContainer.innerHTML = products
  .map(function (item) {
    var image = item.image;
    var title = item.title;
    var description = item.description;
    var price = item.price;
    var category = item.category;
    return `<div class="card" data-type="all" data-category="${category}">
  <img src="${image}" alt="Card Image 1" />
  <div class="card-content">
  <h3>${title}</h3>
  <p>${description}</p>
  <p>$${price}</p>
  <button onclick="addToCart('${i++}')" class="add-to-cart">
  Add to Cart
  </button>
  </div>
  </div>`;
  })
  .join("");

//add  products to cart
var cartarr = JSON.parse(window.localStorage.getItem("cart")) || [];
document.getElementById("count").innerHTML = cartarr.length;
function addToCart(curItem) {
  cartarr.push(products[curItem]);
  window.localStorage.setItem("cart", JSON.stringify(cartarr));
  document.getElementById("count").innerHTML = cartarr.length;
  displaycart();
}
//delete products from cart
function delElement(curItem) {
  cartarr.splice(curItem, 1);
  window.localStorage.setItem("cart", JSON.stringify(cartarr));
  displaycart();
}

// var cartarr2 = JSON.parse(window.localStorage.getItem("cart"));
// var cardItems = document.getElementById("cartItem");
// // console.log(cardItems.innerHTML.length);
// // if (cartarr2.length) {
// // cartarr2 = JSON.parse(window.localStorage.getItem("cart"));
// cartarr2.forEach((element) => {
//   var divcard = document.createElement("div");
//   divcard.className = "card";
//   divcard.setAttribute("data-type", "all");
//   divcard.setAttribute("data-category", element.category);
//   var divimg = document.createElement("img");
//   divimg.setAttribute("src", element.image);
//   console.log(element.image);
//   var divcontent = document.createElement("div");
//   var divh = document.createElement("h3");
//   divh.innerHTML = element.title;

//   var divp = document.createElement("p");
//   divp.innerHTML = element.description;
//   var divbtn = document.createElement("button");
//   divbtn.className = "add-to-cart";
//   divbtn.innerHTML = "delete";

//   divbtn.addEventListener("click", function (e) {
//     // console.log(divbtn.parentElement.parentElement);
//     var cur = e.target.parentElement.parentElement;
//     cur.remove();
//     // console.log(cur);
//     // if (divbtn.parentElement.parentElement)
//     //   divbtn.parentElement.parentElement.remove();
//   });

//   var divcontent = document.createElement("div");
//   divcontent.append(divh, divp, divbtn);

//   divcard.append(divimg, divcontent);

//   cardItems.append(divcard);
// });
// } else {
// cardItems.innerHTML = "this is empty";
// }

// cartarr2.forEach((element) => {
//   var divcard = document.createElement("div");
//   divcard.className = "card";
//   divcard.setAttribute("data-type", "all");
//   divcard.setAttribute("data-category", element.category);
//   var divimg = document.createElement("img");
//   divimg.setAttribute("src", element.image);
//   console.log(element.image);
//   var divcontent = document.createElement("div");
//   var divh = document.createElement("h3");
//   divh.innerHTML = element.title;

//   var divp = document.createElement("p");
//   divp.innerHTML = element.description;
//   var divbtn = document.createElement("button");
//   divbtn.className = "add-to-cart";
//   divbtn.innerHTML = "delete";
//   var divcontent = document.createElement("div");
//   divcontent.append(divh, divp, divbtn);

//   divcard.append(divimg, divcontent);

//   cardItems.append(divcard);
// });

// return `<div class="card" data-type="all" data-category="${category}">
//       <img src="${image}" alt="Card Image 1" />
//       <div class="card-content">
//       <h3>${title}</h3>
//       <p>${description}</p>
//       <button onclick="delElement('${j++}')" class="add-to-cart">
//       Delete
//       </button>
//       </div>
//       </div>`;

// cartarr2.forEach((items) => {
//   var image = items.image;
//   var title = items.title;
//   var description = items.description;
//   var price = items.price;
//   var category = items.category;
//   total = total + Number(price);
//   document.getElementById("total").innerHTML = "$ " + total + "";
//   document.getElementById(
//     "cartItem"
//   ).innerHTML += `<div class="card" data-type="all" data-category="${category}">
// <img src="${image}" alt="Card Image 1" />
// <div class="card-content">
// <h3>${title}</h3>
// <p>${description}</p>
// <button onclick="delElement('${j++}')" class="add-to-cart">
// Delete
// </button>
// </div>
// </div>`;
// });
//   (function (items) {
//     var image = items.image;
//     var title = items.title;
//     var description = items.description;
//     var price = items.price;
//     var category = items.category;
//     total = total + Number(price);
//     document.getElementById("total").innerHTML = "$ " + total + "";
//     return `<div class="card" data-type="all" data-category="${category}">
// <img src="${image}" alt="Card Image 1" />
// <div class="card-content">
// <h3>${title}</h3>
// <p>${description}</p>
// <button onclick="delElement('${j++}')" class="add-to-cart">
// Delete
// </button>
// </div>
// </div>`;
//   })
//   .join("");

//display elemnts in cart

// function displaycart() {
//   var cartarr2 = JSON.parse(window.localStorage.getItem("cart"));
//   var j = 0;
//   var total = 0;
//   document.getElementById("count").innerHTML = cartarr2.length;
//   if (cartarr2.length === 0) {
//     document.getElementById("cartItem").innerHTML = "Your cart is empty";
//     document.getElementById("total").innerHTML = "$ " + 0 + ".00";
//   } else {
//     document.getElementById("cartItem").innerHTML = cartarr2
//       .map(function (items) {
//         var image = items.image;
//         var title = items.title;
//         var description = items.description;
//         var price = items.price;
//         var category = items.category;
//         total = total + Number(price);
//         document.getElementById("total").innerHTML = "$ " + total + "";
//         return `<div class="card" data-type="all" data-category="${category}">
//       <img src="${image}" alt="Card Image 1" />
//       <div class="card-content">
//       <h3>${title}</h3>
//       <p>${description}</p>
//       <button onclick="delElement('${j++}')" class="add-to-cart">
//       Delete
//       </button>
//       </div>
//       </div>`;
//       })
//       .join("");
//   }
// }
// displaycart();

//visibility function for category filter
var children = cardsContainer.children;

function changeVisibility(dataCategory) {
  for (var i = 0; i < children.length; i++) {
    var allDataAtribute = children[i].getAttribute("data-type");
    var customAttributeValue = children[i].getAttribute("data-category");
    console.log(customAttributeValue);

    if (allDataAtribute === dataCategory) {
      children[i].style.display = "block";
    } else if (customAttributeValue === dataCategory) {
      children[i].style.display = "block";
    } else {
      children[i].style.display = "none";
    }
  }
}

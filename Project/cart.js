//back to top
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

var cartarr = JSON.parse(window.localStorage.getItem("cart")) || [];

//delete products from cart
console.log(cartarr);
function delElement(curItem) {
  cartarr.splice(curItem, 1);
  window.localStorage.setItem("cart", JSON.stringify(cartarr));
  document.getElementById("count").innerHTML = cartarr.length;
  displaycart();
}

//display elemnts in cart

function displaycart() {
  cartarr = JSON.parse(window.localStorage.getItem("cart"));
  var j = 0;
  var total = 0;
  document.getElementById("count").innerHTML = cartarr.length;
  if (cartarr.length === 0) {
    document.getElementById("cartItem").innerHTML = "Your cart is empty";
    document.getElementById("total").innerHTML = "$ " + 0 + ".00";
  } else {
    document.getElementById("cartItem").innerHTML = cartarr
      .map(function (items) {
        var image = items.image;
        var title = items.title;
        var description = items.description;
        var price = items.price;
        var category = items.category;
        total = total + Number(price);
        document.getElementById("total").innerHTML = "$ " + total + "";
        return `<div class="card" data-type="all" data-category="${category}">
      <img src="${image}" alt="Card Image 1" />
      <div class="card-content">
      <h3>${title}</h3>
      <p>${description}</p>
      <button onclick="delElement('${j++}')" class="del-from-cart">
      Delete
      </button>
      </div>
      </div>`;
      })
      .join("");
  }
}
displaycart();

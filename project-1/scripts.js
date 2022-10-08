// kitten pictures
var images = [
  "images/black.jpeg",
  "images/creamy.jpeg",
  "images/greynblack.jpeg",
  "images/grompy.jpeg",
];
var i = 0;
function slideShow() {
  document.getElementById("image").src = images[i];

  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }
  setTimeout("slideShow()", 2000);
}
window.onload = slideShow;
// welcome message
var user = "Mr Hunsicker";
var salutation = "Hello, ";
var greeting =
  salutation + user + "! Here are some of the kittens we have for sale today.";
var greetingEl = document.getElementById("greeting");

greetingEl.textContent = greeting;

//product price
var price = 50,
  blackCatDiscount = 0.5,
  blackCatPrice;
(blackCatPrice = price - price * blackCatDiscount),
  (priceEl = document.getElementById("price")),
  (blackCatPriceEl = document.getElementById("blackcat-price"));

priceEl.textContent = price.toFixed(2);
blackCatPriceEl.textContent = blackCatPrice.toFixed(2);

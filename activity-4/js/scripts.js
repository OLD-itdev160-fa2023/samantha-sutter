// welcome message
var user = "Sami";
var salutation = "Hello, ";
var greeting =
  salutation + user + "! Here are some of the latest Lime reviews.";
var greetingEl = document.getElementById("greeting");

greetingEl.textContent = greeting;

//product price
var price = 20,
  studentDiscount = 0.25,
  studentPrice;
(studentPrice = price - price * studentDiscount),
  (priceEl = document.getElementById("price")),
  (studentPriceEl = document.getElementById("student-price"));

priceEl.textContent = price.toFixed(2);
studentPriceEl.textContent = studentPrice.toFixed(2);

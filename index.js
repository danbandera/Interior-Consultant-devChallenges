var menuMobile = document.getElementsByClassName("material-symbols-outlined");
var menu = document.getElementsByClassName("menuContainer");

menuMobile[0].addEventListener("click", function () {
  menu[0].classList.toggle("menu-open");
});
menuMobile[1].addEventListener("click", function () {
  menu[0].classList.toggle("menu-open");
});

// var menuMobileClose = document.getElementsByClassName("menuContainer");
// menuMobileClose[0].addEventListener("click", function () {
//   var menu = document.getElementsByClassName("menuContainer");
//   menu[0].classList.toggle("menu-open");
// });

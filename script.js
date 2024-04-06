const menuActive = document.querySelector(".menu");
const burger = document.querySelector(".list_menu");

function toggleMenu() {
  menuActive.classList.toggle("hidden");
}

burger.addEventListener("click", toggleMenu);

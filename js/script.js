const elHamburgerBtn = document.querySelector(".header__btn-hamburger")

const elHeader = document.querySelector("header")

elHamburgerBtn.addEventListener("click", () => {
  elHeader.classList.toggle("header--open")
})
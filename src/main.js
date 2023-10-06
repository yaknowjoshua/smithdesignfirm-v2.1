function navToggler() {
  let menuButton = document.querySelector(".header__hamburger")
  let navContent = document.querySelector(".header__content")
  let token = 0;

  menuButton.addEventListener("click", () => {
    if (token === 0) {
      navContent.classList.add("expanded");
      token = 1;
    } else if (token === 1) {
      navContent.classList.remove("expanded");
      token = 0;
    }
  })
}

navToggler()
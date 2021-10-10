  const menuOpen = document.querySelector(".header__toggle");
  const menu = document.querySelector(".header__mobile-menu");
  const menuClose = document.querySelector(".header__row-close");

  menuOpen.addEventListener("click", () => {
    menu.style.display = "flex";
    //menuOpen.style.display = "none";
    menuClose.style.display = "block";
  });

  menuClose.addEventListener("click", () => {
    menu.style.display = "none";
    //menuOpen.style.display = "block";
  });


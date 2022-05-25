document.addEventListener("click", (e) => {
  // console.log(e.target.matches("[data-dropdown-btn]"));
  // console.log(e.target.matches('[data-ham-btn]'));
  const isHamBtn = e.target.matches("[data-ham-btn]");
  const isDropdownBtn = e.target.matches("[data-dropdown-btn]");
  if (!isDropdownBtn && e.target.closest("[data-dropdown]") != null) return;

  let currentDropdown;
  if (isDropdownBtn) {
    // console.log(e.target.closest("[data-dropdown]"));
    currentDropdown = e.target.closest("[data-dropdown]");
    currentDropdown.classList.toggle("active");
  }

  document.querySelectorAll("[data-dropdown]").forEach((dropdown) => {
    if (dropdown == currentDropdown) return;
    dropdown.classList.remove("active");
  });

  if (isHamBtn) {
    let navList = document.querySelector(".nav__list");
    let menuImg = document.querySelector(".nav__burger");
    navList.classList.toggle("active");
    navList.classList.contains("active")
      ? (menuImg.src = "./images/icon-close-menu.svg")
      : (menuImg.src = "./images/icon-menu.svg");
  }
});

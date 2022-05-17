document.addEventListener("click", (e) => {
    console.log(e.target.matches('[data-dropdown-btn-mobile]'));
    console.log(document.querySelector('[data-dropdown-mobile]'));

  if (e.target.matches('[data-dropdown-btn-mobile]')) {
      document.querySelector('[data-dropdown-mobile]').classList.toggle('active')
  }
/* 
  let currentDropdown;
  if (isDropdownBtn) {
    currentDropdown = e.target.closest("[data-dropdown]");
    currentDropdown.classList.toggle("active");
  }

  document.querySelectorAll("[data-dropdown]").forEach((dropdown) => {
    if (dropdown == currentDropdown) return;
    dropdown.classList.remove("active");
  }); */
});

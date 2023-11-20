const dropdownSelected = document.querySelector(".dropdown__value");
const dropdownList = document.querySelector(".dropdown__list");
const dropdownItems = document.querySelectorAll(".dropdown__item");

dropdownSelected.addEventListener("click", () => {
  dropdownList.classList.toggle("dropdown__list_active");
});

[...dropdownItems].forEach(item => item.onclick = () => {
  dropdownSelected.textContent = item.textContent;
  dropdownList.classList.remove("dropdown__list_active");
  return false;
})
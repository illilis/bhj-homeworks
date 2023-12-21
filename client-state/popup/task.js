const modal = document.getElementById("subscribe-modal");
const modalClose = document.querySelector(".modal__close");

window.onload = () => {
  if (!getCookie("closed")) {
    modal.classList.add("modal_active");
  }
}

modalClose.addEventListener("click", () => {
  document.cookie = "closed=true; path=/; expires=";
  modal.classList.remove("modal_active");
});

function getCookie(cookieName) {
  const cookiesPairs = document.cookie.split("; ");
  const cookie = cookiesPairs.find(e => e.startsWith(cookieName + "="));

  if (cookie) {
    return cookie.slice(cookieName.length + 1);
  }
}
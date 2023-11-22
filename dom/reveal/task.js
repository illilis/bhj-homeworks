const reveal = document.querySelectorAll(".reveal");

document.addEventListener("scroll", function () {
  [...reveal].forEach(item => {
    const itemTop = item.getBoundingClientRect().top;
    const itemBottom = item.getBoundingClientRect().bottom;
    if (itemTop < window.innerHeight || itemBottom > 0) {
      item.classList.add("reveal_active");
    } if(itemTop > window.innerHeight || itemBottom < 0) {
      item.classList.remove("reveal_active");
    }
  });
})
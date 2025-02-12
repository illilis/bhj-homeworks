const hasTooltip = document.querySelectorAll(".has-tooltip"); 

hasTooltip.forEach(element => {
  const tooltip = document.createElement("div");
  tooltip.textContent = element.title;
  tooltip.classList.add("tooltip");

  element.addEventListener("click", (event) => {
    event.preventDefault();
  
    element.insertAdjacentElement("afterEnd", tooltip);

    const left = element.getBoundingClientRect().left;
    const bottom = element.getBoundingClientRect().bottom;

    tooltip.style.left = `${left}px`;
    tooltip.style.top = `${bottom}px`;

    tooltip.classList.toggle("tooltip_active");
  });
});
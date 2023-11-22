const rotatorCases = document.querySelectorAll(".rotator__case");
let currentCase = 0;
let speedCases = 1000;

function changeCases(cases) {
  clearInterval(interval);
    
  cases.forEach(item => {
    item.classList.remove("rotator__case_active");
  });
  
  currentCase++;

  if (currentCase === cases.length - 1) {
    currentCase = 0;
  }

  cases[currentCase].classList.add("rotator__case_active");
  cases[currentCase].style.color = cases[currentCase].dataset.color;
  speedCases = cases[currentCase].dataset.speed;
  interval = setInterval(changeCases, speedCases, rotatorCases);
}

let interval = setInterval(changeCases, speedCases, rotatorCases);
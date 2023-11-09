const timerStatus = document.getElementById("timer");
let seconds = +timerStatus.textContent;

addCountdown = function() {
  if (timerStatus.textContent < 1) {
    clearInterval(timerInterval);
    alert("Вы победили в конкурсе!");

    const link = document.createElement("a");
    link.href = "https://i.imgur.com/KiIRkzF.jpg";
    link.download = "";
    link.target = "_blank";
    link.click();

  } else {
    timerStatus.textContent--;
  }
}

const timerInterval = setInterval(addCountdown, 1000);
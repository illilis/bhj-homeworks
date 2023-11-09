const deadMole = document.getElementById("dead");
const lostMole = document.getElementById("lost");

let getHole = index => document.getElementById(`hole${index}`);

function reloadMole() {
  deadMole.textContent = 0;
  lostMole.textContent = 0;
}

for(let i = 1; i < 10; i++) {
  let hole = getHole(i);

  hole.onclick = function() {
    if (hole.classList.contains("hole_has-mole")) {
      deadMole.textContent++;
    } else {
      lostMole.textContent++;
    }

    if(deadMole.textContent >= 10) {
      alert("Победа!")
      reloadMole(); 
    } else if (lostMole.textContent >= 5) {
      alert("Вы проиграли!");
      reloadMole(); 
    }
  }
}

const clickerCounter = document.getElementById("clicker__counter");
const cookie = document.getElementById("cookie");

let clickCount = 0;

function cookieCount() {
  clickCount++;
  clickerCounter.textContent = clickCount;

  if (cookie.width === 200) {
    cookie.width = "250";
  } else {
    cookie.width = "200";
  }
}

cookie.onclick = cookieCount;
const signin = document.getElementById("signin");
const signinForm = document.getElementById("signin__form");
const welcome = document.getElementById("welcome");
const userId = document.getElementById("user_id");
const logoutButton = document.getElementById("logout__btn");

function showWelcome() {
  signin.classList.remove("signin_active");
  welcome.classList.add("welcome_active");
}

window.addEventListener("load", ()=> {
  if (localStorage.loginId) {
    showWelcome();
      userId.textContent = localStorage.loginId;
  }
});

signinForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let userDate = new FormData(signinForm);
  let xhr = new XMLHttpRequest();

  xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/auth");
  xhr.responseType = "json";
  xhr.send(userDate);
  xhr.addEventListener("load", () => {
    let data = xhr.response;
      if (data.success) {
        showWelcome();
        userId.textContent = data.user_id;
        localStorage.loginId = data.user_id;
        console/console.log(localStorage.loginId);
      } else {
        alert("Неверный логин/пароль");
        signinForm.reset();
      }
  });
});

logoutButton.addEventListener('click', ()=> {
  localStorage.removeItem('loginId');
  welcome.classList.remove('welcome_active');
  signin.classList.add('signin_active');
  signinForm.reset();
});
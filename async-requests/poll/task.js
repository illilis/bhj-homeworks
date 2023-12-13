const pollTitle = document.getElementById("poll__title");
const pollAnswers = document.getElementById("poll__answers");

pollAnswers.textContent = "";

const xhr = new XMLHttpRequest();
xhr.open("GET", "https://students.netoservices.ru/nestjs-backend/poll");
xhr.send();


xhr.addEventListener("readystatechange", () => {
  if (xhr.readyState === xhr.DONE) {
    let response = JSON.parse(xhr.response);

    pollTitle.textContent = response.data.title;

    response.data.answers.forEach(element => {
      pollAnswers.insertAdjacentHTML("beforeend", `
      <button class="poll__answer">
        ${element}
      </button>
      `);
    });

    const answerButton = document.querySelectorAll(".poll__answer");
    console.log(answerButton);
    
    answerButton.forEach(element => {
      element.addEventListener("click", () => {
        alert("Спасибо, ваш голос засчитан!");
      })
    })
  }
});
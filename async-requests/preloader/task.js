const loader = document.getElementById("loader");
const items = document.getElementById("items");

const xhr = new XMLHttpRequest();
xhr.open("GET", "https://students.netoservices.ru/nestjs-backend/slow-get-courses");
xhr.send();

xhr.addEventListener("readystatechange", () => {
  if (xhr.readyState === xhr.DONE) {
    loader.classList.remove("loader_active");

    const response = JSON.parse(xhr.response);
    const responseValutes = response["response"]["Valute"];

    for (let key in responseValutes) {
      items.innerHTML += `
      <div class="item">
        <div class="item__code">
          ${responseValutes[key].CharCode}
        </div>
        <div class="item__value">
          ${responseValutes[key].Value}
        </div>
        <div class="item__currency">
          руб.
        </div>
      </div>
      `;
    }
  }
});
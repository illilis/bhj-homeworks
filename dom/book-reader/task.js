const book = document.getElementById("book");

const fontSize = document.querySelectorAll(".font-size");
const fontColor = document.querySelectorAll(".book__control_color .color");
const backgroundColor = document.querySelectorAll(".book__control_background .color");

fontSize.forEach(item => {
  item.addEventListener("click", (event) => {
    event.preventDefault();

    book.classList.remove("book_fs-small");
    book.classList.remove("book_fs-big");

    fontSize.forEach(item => {
      item.classList.remove("font-size_active");
    });

    item.classList.add("font-size_active");

    if (item.classList.contains("font-size_small")) {
      book.classList.add("book_fs-small")
    } else if (item.classList.contains("font-size_big")) {
      book.classList.add("book_fs-big")
    } else {
      book.classList.replace("book");
    }
  });
});

fontColor.forEach(item => {
  item.addEventListener("click", (event) => {
    event.preventDefault();

    book.classList.remove("book_color-gray");
    book.classList.remove("book_color-whitesmoke");
    book.classList.remove("book_color-black");
    
    fontColor.forEach(item => {
        item.classList.remove("color_active");
      });

    item.classList.add("color_active");

    if (item.classList.contains("text_color_black")) {
        book.classList.add("book_color-black")
      } else if (item.classList.contains("text_color_gray")) {
        book.classList.add("book_color-gray")
      } else {
        book.classList.add("book_color-whitesmoke");
      }
  });
});

backgroundColor.forEach(item => {
    item.addEventListener("click", (event) => {
      event.preventDefault();
  
      book.classList.remove("book_bg-gray");
      book.classList.remove("book_bg-black");
      book.classList.remove("book_bg-white");
      
      backgroundColor.forEach(item => {
          item.classList.remove("color_active");
        });
  
      item.classList.add("color_active");
  
      if (item.classList.contains("bg_color_black")) {
          book.classList.add("book_bg-black")
        } else if (item.classList.contains("bg_color_gray")) {
          book.classList.add("book_bg-gray")
        } else {
          book.classList.add("book_bg-white");
        }
    });
  });
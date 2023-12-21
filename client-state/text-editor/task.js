const editorText = document.getElementById("editor");
const clearButton = document.getElementById("clear");

editorText.value = localStorage.getItem("text");

editorText.addEventListener("input", () => {
  localStorage.setItem("text", editorText.value);
});

clearButton.addEventListener("click", () => {
  editorText.value = "";
  localStorage.removeItem("text");
})
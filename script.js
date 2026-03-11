let btn = document.querySelector(".btn");
let notesContainer = document.querySelector(".notes-container");
let notes = document.querySelectorAll(".input-box");

function getNotes() {
  notesContainer.innerHTML = localStorage.getItem("notes");
}
getNotes();
btn.addEventListener("click", () => {
  let inputBox = document.createElement("p");
  let img = document.createElement("img");
  inputBox.className = "input-box";
  inputBox.setAttribute("contenteditable", "true");
  img.src = "images/delete.png";
  notesContainer.appendChild(inputBox).appendChild(img);
});

notesContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    storeNote();
  } else if (e.target.tagName === "P") {
    notes = document.querySelectorAll(".input-box");
    notes.forEach((nt) => {
      nt.onkeyup = function () {
        storeNote();
      };
    });
  }
});

function storeNote() {
  localStorage.setItem("notes", notesContainer.innerHTML);
}
document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    document.execCommand("insertLineBreak");
    event.preventDefault();
  }
});


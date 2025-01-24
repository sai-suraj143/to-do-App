let input = document.getElementById("task");
let listcontainer = document.getElementById("list-container");

function addtask() {
  if (input.value === "") {
    alert("Enter any task");
  } else {
    let Li = document.createElement("li");
    Li.innerHTML = input.value;
    listcontainer.appendChild(Li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    Li.appendChild(span);
  }
  input.value = "";
  savedata();
  getdata();
}
listcontainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      savedata();
    }
  },
  false
);
getdata();

function savedata() {
  localStorage.setItem("data", listcontainer.innerHTML);
}
function getdata() {
  listcontainer.innerHTML = localStorage.getItem("data");
}

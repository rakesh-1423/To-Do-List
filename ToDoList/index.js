let inputList = document.getElementById("input-list");
let inputBtn = document.getElementsByTagName("input-btn");
let todoList = document.getElementById("todo-list");

function addToDo() {
  if (inputList.value == "") {
    alert("Enter value in To-Do Box");
  } else {
    let li = document.createElement("li");
    li.classList.add("todo-item");
    li.innerHTML = `
    <input type="checkbox" id="cbox">
    <span>${inputList.value}</span>
    <button class="input-btn input-listbtn" onclick="removeToDo(event)">Remove</button>`;
    todoList.appendChild(li);
    inputList.value = "";
  }
}

function removeToDo(event){
  event.target.parentNode.remove();
}
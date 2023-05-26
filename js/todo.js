const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");


const toDos = [];

function saveTodos(){
  localStorage.setItem("todos",JSON.stringify(toDos))
}

function deleteToDo (event) {
  const li = event.target.parentElement;
  li.remove()
}

function paintToDo(newToDo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");
  span.innerText = newToDo;
  button.innerText = "❌";
  li.appendChild(span);
  li.appendChild(button);
  button.addEventListener("click",deleteToDo);
  toDoList.appendChild(li);
}

function handleToDoSubmit(e) {
  e.preventDefault();
  let newToDo = toDoInput.value;
  toDoInput.value = "";
  paintToDo(newToDo);
  toDos.push(newToDo)
  saveTodos()
}

toDoForm.addEventListener("submit", handleToDoSubmit);

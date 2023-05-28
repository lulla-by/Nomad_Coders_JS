const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];
function saveTodos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter(item=> item.id !== parseInt(li.id))
  saveTodos()
}

function checkToDo(event){
  const li = event.target.parentElement
  li.style.textDecoration = "line-through"

}

function paintToDo(newToDo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");
  // const check = document.createElement("input");
  // check.setAttribute("type", "checkbox");
    li.id = newToDo.id;
    span.innerText = newToDo.value;
    button.innerText = "❌";
    // li.appendChild(check);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
    // check.addEventListener("click",checkToDo)
    button.addEventListener("click", deleteToDo);
}

function handleToDoSubmit(e) {
  e.preventDefault();
  let newToDo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    value: newToDo,
    id: Date.now(),
  };
  paintToDo(newTodoObj);
  toDos.push(newTodoObj);
  saveTodos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

function sayHello() {
  console.log("hello");
}

const savedTodos = localStorage.getItem(TODOS_KEY);

if (savedTodos) {
  const parsedTodos = JSON.parse(savedTodos);
  toDos = parsedTodos;
  parsedTodos.forEach((item) => paintToDo(item));
}

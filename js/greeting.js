const loginForm = document.querySelector("#loginForm");
const loginInput = document.querySelector("#loginForm input");
const greeting = document.querySelector("#greeting");
const inner = document.querySelector(".inner-container:first-child");
const inner2 = document.querySelector(".inner-container:last-child");
const outer = document.querySelector(".out-container");
const logoutBtn = document.querySelector(".inner-container button")

const HIDDEN_CLASSNAME = "hidden"
const USERNAME = "username"

const onSubmit = (e) => {
  e.preventDefault();
  const userName = loginInput.value.toUpperCase();
  localStorage.setItem(USERNAME,userName)
  loginForm.classList.add(HIDDEN_CLASSNAME)
  paintGreetings(userName)
};

const savedUsername = localStorage.getItem(USERNAME)

const paintGreetings = (username)=>{
  greeting.innerText = `HI ${username}`
  greeting.classList.remove(HIDDEN_CLASSNAME);
  inner.classList.remove(HIDDEN_CLASSNAME);
  inner2.classList.remove(HIDDEN_CLASSNAME);
  outer.classList.add(HIDDEN_CLASSNAME);
}

if(savedUsername === null){
loginForm.classList.remove(HIDDEN_CLASSNAME)
loginForm.addEventListener("submit", onSubmit);
}else{
  paintGreetings(savedUsername)
}
function onLogOut(){
 localStorage.removeItem("username")
 localStorage.removeItem("todos")
 window.location.reload()
}
logoutBtn.addEventListener("click",onLogOut)

 


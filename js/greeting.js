const loginForm = document.querySelector("#loginForm");
const loginInput = document.querySelector("#loginForm input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"
const USERNAME = "username"

const onSubmit = (e) => {
  e.preventDefault();
  const userName = loginInput.value;
  localStorage.setItem(USERNAME,userName)
  loginForm.classList.add(HIDDEN_CLASSNAME)
  paintGreetings(userName)
};

const savedUsername = localStorage.getItem(USERNAME)

const paintGreetings = (username)=>{
  greeting.innerText = `Hello ${username}`
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

if(savedUsername === null){
loginForm.classList.remove(HIDDEN_CLASSNAME)
loginForm.addEventListener("submit", onSubmit);
}else{
  paintGreetings(savedUsername)
}


 


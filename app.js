const loginForm = document.querySelector("#loginForm");
const loginInput = document.querySelector("#loginForm input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"

const onSubmit = (e) => {
  e.preventDefault();
  const userName = loginInput.value;
  loginForm.classList.add(HIDDEN_CLASSNAME)
  greeting.classList.remove(HIDDEN_CLASSNAME)
  greeting.innerText = `Hello ${userName}`
};



loginForm.addEventListener("submit", onSubmit);
 


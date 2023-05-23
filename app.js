const loginInput = loginForm.querySelector("#loginForm input");
const loginButton = loginForm.querySelector("#loginForm button");

const onLogin = () =>{
  console.log(loginInput.value)
}

loginButton.addEventListener("click",onLogin)


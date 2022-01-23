const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const btn = document.querySelector("#changeBtn");

const HIDDEN_CLASSNAME = "hidden";
const AGAIN = "again"
const USERNAME_KEY = "username"

function handleLoginsubmit(evnet) {
  evnet.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  localStorage.setItem(USERNAME_KEY, loginInput.value);
  paintGreetings(username);
}

function paintGreetings(username) {
  const savedUsername = localStorage.getItem(USERNAME_KEY);
  greeting.innerText = `Hello ${savedUsername}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}


if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", handleLoginsubmit);
} else {
  paintGreetings(savedUsername);
}

function changUsername() {
  greeting.classList.remove(HIDDEN_CLASSNAME);
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  btn.classList.add(AGAIN);
  localStorage.removeItem(USERNAME_KEY);
  loginInput.value = "";
}

btn.addEventListener("click", changUsername);
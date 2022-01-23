
// let msg1 = document.getElementById("message1")
// let msg2 = document.getElementById("message2")

// const x = document.queryCommandValue("#between-number").value;
// let random_number = Math.floor((Math.random()*10)+1);
// let user_select = document.getElementById("select-number").Value;

// function play(){
//     if(user_select == random_number)
//     {    
//         msg1.textContent="You chose: " + user_select + " the machine chose: " + random_number;
//         msg2.textContent="You win";
//     }
//    else {
//         msg1.textContent="You chose: " + user_select + " the machine chose: " + random_number;
//         msg2.textContent="You lose";
//     }
// }

// const colors = [
//     "#ef5777",
//     "#575fcf",
//     "#4bcffa",
//     "#34e7e4",
//     "#0be881",
//     "#f53b57",
//     "#3c40c6",
//     "#0fbcf9",
//     "#00d8d6",
//     "#05c46b",
//     "#ffc048",
//     "#ffdd59",
//     "#ff5e57",
//     "#d2dae2",
//     "#485460",
//     "#ffa801",
//     "#ffd32a",
//     "#ff3f34"
//   ];
  
//   const button = document.querySelector("button");
//   const body = document.querySelector("body");
  
//   button.addEventListener("click",onclick);
  
//   function onclick() {
//     let color1 = colors[Math.floor(Math.random()*colors.length)];
//     let color2 = colors[Math.floor(Math.random()*colors.length)];
  
//     if(color1 == color2){
//       while(color1 != color2){
//         color2 = colors[Math.floor(Math.random()*colors.length)];
//       }
//       return color1, color2;
//     }
//     // body.style.background = "linear-gradient(to right, #e66465, #9198e5)";
//     body.style.background = 'linear-gradient(${color1}, ${color2})';
//     // console.log(color1, color2)
//   }

// const loginForm = document.querySelector("#login-form");
// const loginInput = document.querySelector("#login-form input");
// const greeting = document.querySelector("#greeting");

// const HIDDEN_CLASSNAME = "hidden";
// const USERNAME_KEY = "username"

// function handleLoginsubmit(evnet) {
//   evnet.preventDefault();
//   loginForm.classList.add(HIDDEN_CLASSNAME);
//   const username = loginInput.value;
//   localStorage.setItem(USERNAME_KEY, loginInput.value);
//   paintGreetings(username);
// }

// function paintGreetings(username) {
//   greeting.innerText = `hello $[username]`;
//   greeting.classList.remove(HIDDEN_CLASSNAME);
// }

// const savedUsername = localStorage.getItem(USERNAME_KEY);

// if (savedUsername === null) {
//   loginForm.classList.remove(HIDDEN_CLASSNAME);
//   loginForm.addEventListener("submit", handleLoginsubmit);
// } else {
//   paintGreetings(savedUsername);
// }

// const clock = document.querySelector("h2#clock");

// function getClock() {
//   const date = new Date();
//   const hours = String(date.getHours()).padStart(2, "0");
//   const minutes = String(date.getMinutes()).padStart(2, "0");
//   const seconds = String(date.getSeconds()).padStart(2, "0");
//   clock.innerText = `${hours}:${minutes}:${seconds}`;
// }

// getClock();
// setInterval(getClock, 1000);

// const toDoForm = document.getElementById("todo-form");
// const toDoInput = document.querySelector("#todo-form input");
// const toDoList = document.getElementById("todo-list");

// const TODOS_KEY = "todos";

// let toDos = [];

// function saveToDos() {
//   localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
// }

// function deleteToDo(event) {
//   const li = event.target.parentElement;
//   li.remove();
//   toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
//   saveToDos();
// }

// function paintToDo(newTodo) {
//   const li = document.createElement("li");
//   li.id = newTodo.id;
//   const span = document.createElement("span");
//   span.innerText = newTodo.text;
//   const button = document.createElement("button");
//   button.innerText = "❌";
//   button.addEventListener("click", deleteToDo);
//   li.appendChild(span);
//   li.appendChild(button);
//   toDoList.appendChild(li);
// }

// function handleToDoSubmit(event) {
//   event.preventDefault();
//   const newTodo = toDoInput.value;
//   toDoInput.value = "";
//   const newTodoObj = {
//     text: newTodo,
//     id: Date.now(),
//   };
//   toDos.push(newTodoObj);
//   paintToDo(newTodoObj);
//   saveToDos();
// }

// toDoForm.addEventListener("submit", handleToDoSubmit);

// const savedToDos = localStorage.getItem(TODOS_KEY);

// if (savedToDos !== null) {
//   const parsedToDos = JSON.parse(savedToDos);
//   toDos = parsedToDos;
//   parsedToDos.forEach(paintToDo);
// }

let add = document.querySelector('#add');
function Todo(theTodo, priority, time, colour) {
  this.theTodo = theTodo;
  this.priority = priority;
  this.time = time;
  this.colour = colour;
};
add.addEventListener('click', e => {
  let theTodo = prompt("Make ToDo")
  let priority = confirm("High priority? (Ok for priority, cancel for no priority)")
  let time = prompt("How long is this? (Give a number in minutes)", "5")
  let colour = prompt("Insert colour as rgb value", "rgb(255,0,30)")
  let makeTodo = new Todo(theTodo, priority, time, colour)
  console.log(makeTodo);
  const showTodo = document.querySelector('#showTodo');
  let divTag = document.createElement('div');
  divTag.classList.add('col-lg-6', 'margintop');
  divTag.setAttribute('style', `height: 50px; background-color: ${makeTodo.colour}; padding-left: 10px; border-radius: 50px;`);
  let divTag2 = document.createElement('div');
  divTag2.classList.add('col-lg-1', 'col-lg-offset-2', 'margintop');
  let divTag3 = document.createElement('div');
  divTag3.classList.add('col-lg-1', 'margintop');
  let pTag = document.createElement('p');
  pTag.setAttribute('class', 'the-todo-text');
  pTag.innerText = `${makeTodo.theTodo} [${makeTodo.time} mins]`;
  let deleteBtn = document.createElement('button');
  deleteBtn.classList.add('deleteBtn');
  deleteBtn.innerText = "DELETE";
  deleteBtn.setAttribute('id', 'deleteButton');
  let editBtn = document.createElement('button');
  editBtn.classList.add('deleteBtn');
  editBtn.innerText = "EDIT";
  editBtn.setAttribute('id', 'editButton');
  showTodo.appendChild(divTag2);
  divTag2.appendChild(deleteBtn);
  divTag2.appendChild(editBtn);
  divTag.appendChild(pTag);
  showTodo.appendChild(divTag);
  deleteBtn.addEventListener('click', e => {
    divTag.setAttribute('hidden', '');
    divTag2.setAttribute('hidden', '');
    divTag3.setAttribute('hidden', '');
  })
  editBtn.addEventListener('click', e => {
    alert("You will have to change all your Stats. If you want it to be the same, Enter the same info");
    let changeName = prompt("Change name");
    let changeTime = prompt("Change time");
    let changeColor = prompt("Change color");
    makeTodo
  })
});


let signIn = document.querySelector('#signin');
// let signInForm = document.querySelector('#signinform');
// let signInFormAppear = document.signInForm.removeAttribute('hidden')
// console.log(signInFormAppear);

function User(username, password) {
  this.username = username;
  this.password = password;
};

let signInForm = document.querySelector('#signinform');
let closeSignin = document.querySelector('#closeSignin');
let submit = document.querySelector('#submit');
let users = [];

signIn.addEventListener('click', e => {
  signInForm.removeAttribute('hidden')
});
closeSignin.addEventListener('click', e => {
  signInForm.setAttribute('hidden', '')
});
submit.addEventListener('click', e => {
  let un = document.querySelector('#username');
  let usernameValue = document.form.signInForm.usernameInput.value;
  let pw = document.querySelector('#password');
  let user = new User(un, pw)
  users.push(user)
  console.log(users);
  signIn.innerText = `Hello, ${usernameValue}`;
});

let darkmode = document.querySelector("#darkmode");
let body = document.querySelector("body");
darkmode.addEventListener('click', e => {
  body.classList.add('darkmode')
  darkmode.innerText = "Lightmode"
  darkmode.addEventListener('click', e => {
    body.classList.remove('darkmode')
    darkmode.innerText = "Darkmode"
  })
})

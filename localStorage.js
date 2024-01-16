const form = document.getElementById("myForm");
const inputName = document.getElementById("userName");
const insertButton = document.getElementById("insert");
const deleteButton = document.getElementById("delete");

const names = localStorage.getItem("listNames");
let userNameS = JSON.parse(names) || [];

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const content = inputName.value;
  userNameS.push(content);
  localStorage.setItem("listNames", JSON.stringify(userNameS));
});
deleteButton.addEventListener("click", function (e) {
  userNameS.pop();
  localStorage.setItem("listNames", JSON.stringify(userNameS));
  if (userNameS.length > 0) {
    inputName.value = userNameS[userNameS.length - 1];
  } else {
    inputName.value = "";
  }
});
if (userNameS.length > 0) {
  inputName.value = userNameS[userNameS.length - 1];
}

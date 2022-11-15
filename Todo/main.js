/**
 * @type {HTMLElement}
 */

function completeToDo() {
  var listUi = document.querySelector(".todo-list");
  listUi = listUi.querySelectorAll("li");
  var removeElement = listUi[listUi.length - 1];
  var changeColor = listUi[listUi.length - 1].querySelector("button");
  changeColor.onclick = (event) => {
    if (event.target.style.backgroundColor != "red") {
      event.target.style.backgroundColor = "red";
    } else {
      event.target.style.backgroundColor = "green";
    }
  };
  var removeLi = listUi[listUi.length - 1].querySelector(".remove");
  removeLi.onclick = (event) => {
    removeElement.remove();
  };
}

function addElementByForm(todoList) {
  var formElement = document.querySelector("form");
  formElement.onsubmit = (event) => {
    event.preventDefault();
    var data1 = formElement.querySelector(".form-control").value;
    addElementLi(data1);
    todoList.push({ id: Math.random(), name: `${data1}` });
    completeToDo();
  };
}
function addElementLi(element) {
  var addElements = document.querySelector(".todo-list");
  var cloneLiElement = document.querySelector("#todoTemplate");
  var tempLi = cloneLiElement.content.querySelector("li").cloneNode(true);
  tempLi.querySelector(".todo__title_mb-0").innerText = element;
  addElements.appendChild(tempLi);
}
function renderTodoList(todoList) {
  if (!Array.isArray(todoList) || todoList.length < 0) return;
  // logic here
  for (var index in todoList) {
    addElementLi(todoList[index].name);
    completeToDo();
  }
  addElementByForm(todoList);
}

// Shouldn't use global variable
function main() {
  const todoList = [
    {
      id: 1,
      name: "Learn JavaScript",
      isFinish: false,
    },
    {
      id: 2,
      name: "Learn React.js",
      isFinish: false,
    },
    {
      id: 3,
      name: "Learn Node.js",
      isFinish: false,
    },
  ];
  renderTodoList(todoList);
}

main();

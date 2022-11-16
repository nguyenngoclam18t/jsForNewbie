/**
 * @type {HTMLElement}
 */
function completeToDoList() {
  var listUi = document.querySelector(".todo-list");
  listUi = listUi.querySelectorAll("li");
  var elementchange = listUi[listUi.length - 1];
  var changeColor = elementchange.querySelector("button");
  changeColor.onclick = (event) => {
    if (event.target.style.backgroundColor != "red") {
      event.target.style.backgroundColor = "red";
      alert("bạn đã hoàn thành việc này");
    } else {
      event.target.style.backgroundColor = "green";
      alert("bạn chưa hoàn thành việc này");
    }
  };
}
function removeToDoList() {
  var listUi = document.querySelector(".todo-list");
  listUi = listUi.querySelectorAll("li");
  var elementchange = listUi[listUi.length - 1];
  var removeLi = elementchange.querySelector(".remove");
  removeLi.onclick = (event) => {
    elementchange.remove();
  };
}
function editToDoList(todoList) {
  var clickCounter = 0;
  var listUi = document.querySelector(".todo-list");
  listUi = listUi.querySelectorAll("li");
  var elementchange = listUi[listUi.length - 1];
  var editLi = elementchange.querySelector(".btn.btn-warning");
  editLi.onclick = (event) => {
    clickCounter++;
    console.log(clickCounter);
    if (clickCounter % 2 != 0) {
      //lấy ra đoạn text để lên form
      var textChange = elementchange.querySelector(".todo__title_mb-0");
      //lấy form
      var formElement = document.querySelector("form");
      //thay đổi text ở form
      formElement.querySelector(".form-control").value = textChange.textContent;
      formElement.onsubmit = (event) => {
        event.preventDefault();
        //lấy data
        var data1 = formElement.querySelector(".form-control").value;
        //gán data
        if (!data1) return;
        elementchange.querySelector(".todo__title_mb-0").textContent = data1;
        formElement.querySelector(".form-control").value = "";
      };
    } else {
      addElementByForm(todoList);
    }
  };
}

function addElementByForm(todoList) {
  var formElement = document.querySelector("form");
  formElement.onsubmit = (event) => {
    event.preventDefault();
    var data1 = formElement.querySelector(".form-control").value;
    if (!data1) return;
    addElementLi(data1);
    todoList.push({ id: Math.random(), name: `${data1}` });
    completeToDoList();
    removeToDoList();
    editToDoList(todoList);
    formElement.querySelector(".form-control").value = "";
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
    completeToDoList();
    removeToDoList();
    editToDoList(todoList);
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

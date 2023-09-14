const taskInput = document.querySelector(".input-task");
const taskLists = document.querySelector(".lists-task");
const formInput = document.querySelector(".form-input");


formInput.addEventListener("submit", addTask)

function addTask(e) {
  e.preventDefault();
  const taskText = taskInput.value;
  const listItem = document.createElement("li");
  listItem.classList.add("list-item");
  listItem.innerHTML = taskText;
  taskLists.append(listItem);
  taskInput.value = "";
  // const listItems = document.querySelectorAll(".list-item");
  // handleListItems(listItems);
}


function handleListItems(listItems) {
  for (const listItem of Array.from(listItems)) {
    listItem.addEventListener("click", onListItemClick)

    function onListItemClick() {
      listItem.classList.toggle("check");
    }
  }
}
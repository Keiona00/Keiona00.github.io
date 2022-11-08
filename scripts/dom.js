const addCompleted = (event) => {
event.target.classList.toggle("completed");
};

const onAddToDo = (event) => {
    const text = event.target.parentNode.querySelector("input");
    let inputField = text.value;
    const newListItem = document.createElement("li");
    newListItem.addEventListener("click", addCompleted);
    const liText = document.createTextNode(inputField);

    newListItem.appendChild(liText);
    document.querySelector("#todo-list").appendChild(newListItem);
    text.value = "";
};

let listItems = document.getElementById("todo-list")

for (const li of listItems.children) {
    li.addEventListener("click", addCompleted);
  }

document.querySelector("button").addEventListener("click", onAddToDo);
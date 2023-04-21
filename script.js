const text_input_field = document.querySelector("#text_input_field");

const addBtn = document.querySelector("#add_button");
const todosContainer = document.querySelector("#todos_container");
// console.log(text_input_field);
// console.log(addBtn);
// console.log(todosContainer);

addBtn.addEventListener("click", function () {
  if (text_input_field.value.trim().length == "")
    return alert("Plase Enter a task");

  //   create todo list appendchild
  const todoItemContainer = document.createElement("div");
  todosContainer.classList.add("todo_item_container");
  todosContainer.appendChild(todoItemContainer);

  //   create p teg
  const todoText = document.createElement("p");
  todoText.id = "todo_text";
  todoText.innerHTML = text_input_field.value;
  todoItemContainer.appendChild(todoText);

  todoText.addEventListener("dblclick", function () {
    todoText.classList.add("line_through");
    editButton.setAttribute("disabled", "disabled");
  });

  // create edit button
  const editButton = document.createElement("button");
  editButton.id = "edit_button";
  const editImg = document.createElement("p");
  editImg.innerHTML = "✅";
  editButton.appendChild(editImg);
  todoItemContainer.appendChild(editButton);

  editButton.addEventListener("click", function () {
    text_input_field.value = todoText.innerHTML;
    const parent = editButton.parentElement;
    parent.parentElement.removeChild(parent);
  });

  //   create delete button
  const deleteButton = document.createElement("button");
  deleteButton.id = "delete_button";

  const deleteImg = document.createElement("p");
  deleteImg.innerHTML = "❎";
  deleteButton.appendChild(deleteImg);
  todoItemContainer.appendChild(deleteButton);

  deleteButton.addEventListener("click", function () {
    const parent = deleteButton.parentElement;
    parent.parentElement.removeChild(parent);
  });

  text_input_field.value = "";
});

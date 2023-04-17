// Captura de elementos
export const newTask = document.getElementById("add-new");
export const addConatainer = document.getElementById("add-container");
export const closeModal = document.getElementById("close-modal");
export const form = document.getElementById("form");
export const input = document.getElementById("task-input");
export const todosWrapper = document.getElementById("todos-wrapper");
export const completedTodosWrapper = document.getElementById(
  "completed-todos-wrapper"
);

export const saveTodo = (text) => {
  const existingTodos = JSON.parse(localStorage.getItem("todos")) || [];

  const newTodo = {
    id: Date.now(),
    text,
    completed: false,
  };

  // Adiciona o novo todo ao array de todos existentes
  existingTodos.push(newTodo);

  // Salva o array de todos atualizado no localStorage
  localStorage.setItem("todos", JSON.stringify(existingTodos));

  // Cria todo
  const todo = document.createElement("article");
  todo.classList.add("todo");

  const div = document.createElement("div");
  const checkIcon = document.createElement("i");
  checkIcon.classList.add("bx", "bx-circle");
  checkIcon.id = "radio-check";
  div.appendChild(checkIcon);

  const content = document.createElement("p");
  content.classList.add("task-content");
  content.innerText = text;
  div.appendChild(content);
  todo.appendChild(div);

  const trashIcon = document.createElement("i");
  trashIcon.classList.add("bx", "bx-trash", "trash");
  todo.appendChild(trashIcon);

  todosWrapper.appendChild(todo);

  input.value = "";
  console.log(todo);
};

// Remover Todo Local Storage
export const removeTodoLocalStorage = (todoTitle) => {
  const existingTodos = JSON.parse(localStorage.getItem("todos")) || [];

  const filteredTodos = existingTodos.filter((todo) => todo.text != todoTitle);

  localStorage.setItem("todos", JSON.stringify(filteredTodos));
};

// Atualizar todo para feito
export const updateStatusTodo = (todoTitle) => {
  const existingTodos = JSON.parse(localStorage.getItem("todos")) || [];

  existingTodos.map((todo) => {
    todo.text === todoTitle ? (todo.completed = !todo.completed) : true;
  });

  localStorage.setItem("todos", JSON.stringify(existingTodos));
};

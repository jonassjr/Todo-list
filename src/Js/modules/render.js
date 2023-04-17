const todosWrapper = document.getElementById("todos-wrapper");
const completedTodosWrapper = document.getElementById(
  "completed-todos-wrapper"
);

const renderTodo = (text, completed, id) => {
  // Cria o elemento DOM para o todo
  if (completed === false) {
    const todoElement = document.createElement("article");
    todoElement.classList.add("todo");

    const div = document.createElement("div");
    const checkIcon = document.createElement("i");
    checkIcon.classList.add("bx", "bx-circle");
    checkIcon.id = "radio-check";
    div.appendChild(checkIcon);

    const content = document.createElement("p");
    content.classList.add("task-content");
    content.innerText = text;
    div.appendChild(content);
    todoElement.appendChild(div);

    const trashIcon = document.createElement("i");
    trashIcon.classList.add("bx", "bx-trash", "trash");
    trashIcon.dataset.todoId = id;
    todoElement.appendChild(trashIcon);

    // Adiciona o elemento do todo à seção de todos
    todosWrapper.appendChild(todoElement);
  } else if (completed === true) {
    const todoElement = document.createElement("article");
    todoElement.classList.add("todo");

    const div = document.createElement("div");
    const checkIcon = document.createElement("i");
    checkIcon.classList.add("bx", "bx-check-circle");
    checkIcon.id = "radio-check";
    div.appendChild(checkIcon);

    const content = document.createElement("p");
    content.classList.add("task-content", "completed");
    content.innerText = text;
    div.appendChild(content);
    todoElement.appendChild(div);

    const trashIcon = document.createElement("i");
    trashIcon.classList.add("bx", "bx-trash", "trash");
    trashIcon.dataset.todoId = id;
    todoElement.appendChild(trashIcon);

    // Adiciona o elemento do todo à seção de todos
    completedTodosWrapper.appendChild(todoElement);
  }
};

// Renderizar Todos
export const renderTodos = () => {
  // verifica se já existe alguma lista de tarefas salva no localStorage
  if (!localStorage.getItem("todos")) {
    // se não existe, então salva a lista padrão
    const defaultTodos = [
      { text: "Tarefa 1", completed: false },
      { text: "Tarefa 2", completed: true },
      { text: "Tarefa 3", completed: false },
    ];

    localStorage.setItem("todos", JSON.stringify(defaultTodos));
  }

  const existingTodos = JSON.parse(localStorage.getItem("todos")) || [];

  existingTodos.forEach((todo) => {
    renderTodo(todo.text, todo.completed, todo.id);
  });
};

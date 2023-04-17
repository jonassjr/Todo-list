// Pesquisar Todo
const searchInput = document.getElementById("search-input");
const navMenu = document.querySelector(".nav-menu");

// Adicionar Estilo ao elemento pesquisado
const addSearchedStyle = (element) => {
  element.classList.add("searched-todo");

  setTimeout(() => {
    element.classList.remove("searched-todo");
  }, 3000);
};

export const searchTodos = () => {
  const searchValue = searchInput.value.toLowerCase();
  const todos = document.querySelectorAll(".todo");

  todos.forEach((todo) => {
    const todoText = todo
      .querySelector(".task-content")
      .innerText.toLowerCase();

    if (todoText === searchValue) {
      addSearchedStyle(todo);
    } else {
      todo.classList.remove("searched-todo");
    }

    searchInput.value = "";

    navMenu.classList.remove("show-menu");
  });
};

export const searchButton = document.querySelector("#search-button");
searchButton.addEventListener("click", searchTodos);

searchInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    searchTodos();
  }
});

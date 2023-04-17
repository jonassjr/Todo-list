import '../css/style.css'

/*=============== MENU ===============*/

import { navMenu, navToggle, navClose } from "./modules/menu.js";

// Adiciona listener de evento para exibir o menu
// caso o elemento de toggle seja clicado
navToggle &&
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });

// Adiciona listener de evento para remover o menu
// caso o elemento de fechamento seja clicado
navClose &&
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });

/*=============== TASKS ===============*/

import {
  newTask,
  addConatainer,
  closeModal,
  form,
  input,
  todosWrapper,
  completedTodosWrapper,
  saveTodo,
  removeTodoLocalStorage,
  updateStatusTodo,
} from "./modules/tasks.js";

/*=============== SEARCHS ===============*/

import { searchButton, searchTodos } from "./modules/search.js";

/*=============== RENDER ===============*/

import { renderTodos } from "./modules/render.js";

/*=============== EVENTOS ===============*/

closeModal.addEventListener("click", () => {
  addConatainer.classList.remove("show-modal");
});

document.addEventListener("click", (ev) => {
  const targetEl = ev.target;
  const parentEl = targetEl.closest("article");
  let todoTitle;

  if (parentEl && parentEl.querySelectorAll(".task-content")) {
    todoTitle = parentEl.querySelector(".task-content").innerText || "";
  }

  if (targetEl.classList.contains("bx-circle")) {
    targetEl.classList.add("bx-check-circle");
    targetEl.classList.remove("bx-circle");

    const task = parentEl.querySelector(".task-content");
    task.classList.add("completed");

    updateStatusTodo(todoTitle);
    completedTodosWrapper.appendChild(parentEl);
  } else if (targetEl.classList.contains("trash")) {
    removeTodoLocalStorage(todoTitle);
    parentEl.remove();
  } else if (targetEl.classList.contains("bx-check-circle")) {
    targetEl.classList.remove("bx-check-circle");
    targetEl.classList.add("bx-circle");

    const task = parentEl.querySelector(".task-content");
    task.classList.remove("completed");

    updateStatusTodo(todoTitle);

    todosWrapper.appendChild(parentEl);
  }
});

newTask.addEventListener("click", () => {
  addConatainer.classList.add("show-modal");
});

form.addEventListener("submit", (ev) => {
  ev.preventDefault();

  const inputValue = input.value;

  if (inputValue) {
    // Salvando todo

    saveTodo(inputValue);
    addConatainer.classList.remove("show-modal");
  }
});

/*=============== DARK LIGHT THEME ===============*/
import { toggleTheme, getCurrentTheme } from "./modules/theme.js";

renderTodos();

/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById("theme-button");
const lightTheme = "light-theme";
const iconTheme = "bx-toggle-right";

// Tópicos selecionados anteriormente
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// Obtendo o thema atual
export const getCurrentTheme = () =>
  document.body.classList.contains(lightTheme) ? "light" : "dark";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme)
    ? "bx-toggle-right"
    : "bx-toggle-left";

// Validando o tema caso escolhido anteriormente
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === "light" ? "add" : "remove"](
    lightTheme
  );
  themeButton.classList[selectedIcon === "bx-toggle-left" ? "remove" : "add"](
    iconTheme
  );
}

export const toggleTheme = () => {
  // Adiciona ou remove dark / icon theme
  document.body.classList.toggle(lightTheme);
  themeButton.classList.toggle(iconTheme);
  // Salva o tema e o icone atual que o usuario escolheu
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
};

// Ativa / desativa o tema manualmente com o botão
themeButton.addEventListener("click", toggleTheme);

const root = document.documentElement;
const toggle = document.querySelector(".theme-toggle");
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
  root.dataset.theme = "light";
}

function updateToggleLabel() {
  if (!toggle) return;
  toggle.textContent = root.dataset.theme === "light" ? "dark" : "light";
}

toggle?.addEventListener("click", () => {
  if (root.dataset.theme === "light") {
    delete root.dataset.theme;
    localStorage.setItem("theme", "dark");
  } else {
    root.dataset.theme = "light";
    localStorage.setItem("theme", "light");
  }
  updateToggleLabel();
});

updateToggleLabel();

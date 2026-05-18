const root = document.documentElement;
const toggle = document.querySelector(".theme-toggle");
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
  root.dataset.theme = "light";
}

function updateToggleLabel() {
  if (!toggle) return;
  const isLight = root.dataset.theme === "light";
  toggle.textContent = isLight ? "\u263e" : "\u2600";
  toggle.setAttribute(
    "aria-label",
    isLight ? "Switch to dark mode" : "Switch to light mode",
  );
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

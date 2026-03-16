document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("themeToggle");
  if (!toggleBtn) return;

  function applyTheme(theme) {
    document.body.classList.remove("darkmode", "lightmode");
    document.body.classList.add(theme);
    localStorage.setItem("theme", theme);
  }

  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "lightmode" || savedTheme === "darkmode") {
    applyTheme(savedTheme);
  } else {
    applyTheme("darkmode");
  }

  toggleBtn.addEventListener("click", () => {
    const isDark = document.body.classList.contains("darkmode");
    applyTheme(isDark ? "lightmode" : "darkmode");
  });
});
const menuButton = document.querySelector("#menu");
const navMenu = document.querySelector("#nav-menu");

menuButton.addEventListener("click", () => {
  navMenu.classList.toggle("open");
  menuButton.textContent = navMenu.classList.contains("open") ? "✖" : "☰";
});

document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;

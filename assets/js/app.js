// Dark Mode Enables Buttons
const darkModeToggle = document.querySelector("#darkModeToggle");

// Function to toggle dark mode
function toggleDarkMode() {
  const isDarkMode = document.documentElement.classList.contains("dark");
  if (isDarkMode) {
    document.documentElement.classList.remove("dark");
    localStorage.theme = "light";
  } else {
    document.documentElement.classList.add("dark");
    localStorage.theme = "dark";
  }
}

// Set initial mode based on localStorage or system preference
if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
}

// Toggle mode when button is clicked
darkModeToggle.addEventListener("click", toggleDarkMode);


// Navigation Menu
const humIcon = document.querySelector("#humIcon");
const navMenu = document.querySelector("#navMenu");

humIcon.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

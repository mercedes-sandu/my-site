const themeToggle = document.getElementById("theme-mode-icon");
const lightThemeClass = 'light-theme';

const toggleTheme = () => {
  setTheme(document.body.classList.contains(lightThemeClass));
}

const setTheme = (theme) => {
  localStorage.setItem('theme', theme ? ':root' : 'light');
  themeToggle.src =  `./js/${theme ? 'sun.svg' : 'moon.webp'}`;
  document.body.classList.toggle(lightThemeClass, !theme);
}

themeToggle.addEventListener('click', toggleTheme);

(() => localStorage.getItem('theme') === 'light' && setTheme(false))();
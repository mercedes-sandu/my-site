const themeToggle = document.getElementById("theme-mode-icon");
const darkThemeClass = 'dark-theme';

const toggleTheme = () => {
  setTheme(document.body.classList.contains(darkThemeClass));
}

const setTheme = (theme) => {
  localStorage.setItem('theme', theme ? ':root' : 'dark');
  themeToggle.src =  `./js/${theme ? 'sun.svg' : 'moon.webp'}`;
  document.body.classList.toggle(darkThemeClass, !theme);
}

themeToggle.addEventListener('click', toggleTheme);

(() => localStorage.getItem('theme') === 'dark' && setTheme(false))();
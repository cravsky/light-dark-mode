const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

function toggleMode(theme) {
    nav.style.backgroundColor = theme === 'dark' ? 'rgb(0 0 0 / 50%)' : 'rgb(255 255 255 / 50%)';
    textBox.style.backgroundColor = theme === 'dark' ? 'rgb(255 255 255 / 50%)' : 'rgb(0 0 0 / 50%)';
    toggleIcon.children[0].textContent = theme === 'dark' ? 'Dark Mode' : 'Light Mode';
    toggleIcon.children[1].classList.remove(theme === 'dark' ? 'fa-sun' : 'fa-moon');
    toggleIcon.children[1].classList.add(theme === 'dark' ? 'fa-moon' : 'fa-sun');
    image1.src = "img/undraw_proud_coder_" + theme + ".svg";
    image2.src = "img/undraw_feeling_proud_" + theme + ".svg";
    image3.src = "img/undraw_conceptual_idea_" + theme + ".svg";
}

function switchTheme(event) {
    let theme = event.target.checked ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
    toggleMode(theme);
}

// Event Listener
toggleSwitch.addEventListener('change', switchTheme);
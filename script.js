const toggleSwitch = document.querySelector('input[type="checkbox"]');

function switchTheme(event) {
    console.log(event.target.checked)

    let theme = event.target.checked ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
}

// Event Listener
toggleSwitch.addEventListener('change', switchTheme);
class Events {
    toggleTheme() {
        const body = document.body;
        const themeButton = document.querySelector('.theme-button');

        themeButton.addEventListener('click', () => {
            body.classList.toggle('dark');
        })
    }

    toggleNavList() {
        const body = document.body;
        const navToggleButton = document.querySelector('.nav-toggle-button');
        const navigationBar = document.querySelector('.navigation-bar');

        navToggleButton.addEventListener('click', () => {
            navigationBar.classList.toggle('invis-when-small');
        })
    }
}

module.exports = Events;
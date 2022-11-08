const toggleMenuElement = document.getElementById('toggle-menu');
const menuElement = document.getElement = document.getElementById('menu');

toggleMenuElement.addEventListener('click', () => {
    menuElement.classList.toggle('menu--show');
});

window.addEventListener('resize', () => {
    if (menuElement.classList.contains('menu--show') && window.matchMedia("(min-with: 768px)").matches) {
        menuElement.classList.remove('menu--show')
    }
})
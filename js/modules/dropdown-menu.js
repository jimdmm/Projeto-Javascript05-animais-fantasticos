export default function initDropdownMenu() {


}

const dropdownMenus = document.querySelectorAll('[data-dropdown]');

dropdownMenus.forEach(menu => {
    ['touchstart', 'click'].forEach(userEvent => {
        menu.addEventListener(userEvent, handleClick);
    })
})

function handleClick(e) {
    e.preventDefault();
    this.classList.toggle('active');
    outsideClick();
}

function outsideClick(callback) {
    const html = document.documentElement;
    html.addEventListener('click', handleOutsideClick);
    function handleOutsideClick(e) {
        
    }
}
//mobile menu
const burgerIcon = document.querySelector('#onclick');
const navbarMenu = document.querySelector('#listmenu');
burgerIcon.addEventListener('click', () => {
    navbarMenu.classList.toggle('is-active');
})
const Menu = document.getElementById('burger');
const closeMenu = document.querySelector('.close-icon');
const openMenu = document.querySelector('#navbar1');

const showNavbar = () => {
  Menu.style.display = 'block';
  Menu.classList.toggele('#navbar1');
};

const hideNavbar = () => {
  Menu.style.display = 'none';
};

closeMenu.addEventListener('click', hideNavbar);
openMenu.addEventListener('click', showNavbar);
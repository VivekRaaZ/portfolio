const Menu = document.getElementById('burger');
const closeMenu = document.querySelector('.close-icon');
const openMenu = document.querySelector('#navbar1');
const listbtn1 = document.querySelector('#list33');
const listbtn2 = document.querySelector('#list34');
const listbtn3 = document.querySelector('#list35');

const showNavbar = () => {
  Menu.style.display = 'block';
};

const hideNavbar = () => {
  Menu.style.display = 'none';
};

closeMenu.addEventListener('click', hideNavbar);
openMenu.addEventListener('click', showNavbar);
listbtn1.addEventListener('click', hideNavbar);
listbtn2.addEventListener('click', hideNavbar);
listbtn3.addEventListener('click', hideNavbar);
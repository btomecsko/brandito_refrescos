//HTML ids to variables

const menu = () => document.getElementById('menu');
const checkout = () => document.getElementById('checkout');

//DOM Render functions

//Initial Render



//Event handlers

const renderMenu = (e) => {
    e.preventDefault();

    alert ('hi');
}

//Event listeners

const menuEvent = () => {
    menu().addEventListener('click', renderMenu)
}

document.addEventListener('DOMContentLoaded', () => {
    menuEvent();
})
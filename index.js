//HTML ids to variables

const menu = () => document.getElementById('menu');
const checkout = () => document.getElementById('checkout');

//DOM Render functions
function renderMenuItem(menuItem){
    //build menu item card
    let card = document.createElement("li")
    card.className = 'card'
    card.innerHTML = `
        <img src="${menuItem.imageURL}">
        <div class="content">
          <h3>${menuItem.name}</h3>
          <p>${menuItem.description}</p>
        </div>
    `
    document.querySelector('#menu_items').appendChild(card)
}


//Initial Render
function initialize(){
    menuData.filter(menuItem => renderMenuItem(menuItem))
}

initialize()

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
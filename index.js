//HTML ids to variables

const mainBody = () => document.getElementById('main_body')
const menu = () => document.getElementById('menu');
const checkout = () => document.getElementById('checkout');

//DOM Render functions variable

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
        <div>
        <button>Order: ${menuItem.cost}</button>
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

    //removing the main body or about when menu is clicked
    resetMainBody();

    //adding render function to populate the menu items
    
    
}

//Event listeners

const menuEvent = () => {
    menu().addEventListener('click', renderMenu)
}

const resetMainBody = () => {
    mainBody().innerHTML = "";
}

document.addEventListener('DOMContentLoaded', () => {
    menuEvent();
})
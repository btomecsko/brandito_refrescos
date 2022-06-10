//HTML ids to variables

const mainBody = () => document.getElementById('main_body')
const menu = () => document.getElementById('menu');
const checkout = () => document.getElementById('checkout');

//DOM Render functions variable

function renderMenuItem(menuItem){
    //build menu item card
    let menuCard = document.createElement("li")
    menuCard.className = 'menuCard'
    menuCard.innerHTML = `
        <img src="${menuItem.imageURL}">
        <div class="content">
          <h3>${menuItem.name}</h3>
          <p>${menuItem.description}</p>
        </div>
        <div>
        <button>Order: ${menuItem.cost}</button>
        </div>
    `
    document.querySelector('#menu_items').appendChild(menuCard)
}


//Initial Render

function initialize(){
    menuData.filter(menuItem => renderMenuItem(menuItem))
}


//Event handlers

const renderMenu = (e) => {
    e.preventDefault();

    //removing the main body or about when menu is clicked
    resetMainBody();

    //New main body content when menu is clicked
    const h2 = document.createElement('h2');
    h2.innerHTML = "Refresco's Menu"
    mainBody().appendChild(h2);

    //initialize menu data when menu is clicked
    initialize();
    
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
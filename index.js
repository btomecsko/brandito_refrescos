//HTML ids to variables

const mainBody = () => document.getElementById('main_body')
const menu = () => document.getElementById('menu');
const checkout = () => document.getElementById('checkout');
const order = () => document.getElementById('order');
const menuBody = () => document.getElementById('menu_body')

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
        <button id="order">Order: ${menuItem.cost}</button>
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

const renderCheckout = (e) => {
    e.preventDefault();

    resetMainBody();
    resetMenu();

    alert('hi, do I work')
}

//Event listeners

const menuEvent = () => {
    menu().addEventListener('click', renderMenu)
}

const orderEvent = () => {
    order().addEventListener('click', renderMenu)
}

const checkoutEvent = () => {
    checkout().addEventListener('click', renderCheckout)
}

const resetMainBody = () => {
    mainBody().innerHTML = "";
}

const resetMenu = () => {
    menuBody().innerHTML ="";
}

document.addEventListener('DOMContentLoaded', () => {
    menuEvent();
    checkoutEvent();
})
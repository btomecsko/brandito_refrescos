//HTML ids to variables

const mainBody = () => document.getElementById('main_body')
const menu = () => document.getElementById('menu');
const checkout = () => document.getElementById('checkout');
const menuBody = () => document.getElementById('menu_body')
const menuItem = () => document.getElementById('menu_items');

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

    //add event listener for submitting function
    menuCard.querySelector('#order').addEventListener('click', () => {
        alert('hi, do I work')
    })

    //add menu card to menu body
    document.querySelector('#menu_items').appendChild(menuCard)
}

//Fetch makes a request to get all the menu items information from the server

function getMenuItems(){
    fetch('http://localhost:3000/menuData')
    .then(res => res.json())
    .then(menuData => menuData.forEach(menuItem => renderMenuItem(menuItem)))
}

//Event handlers

const renderMenu = (e) => {
    e.preventDefault();

    //removing the main body or about when menu is clicked
    resetMainBody();

    //New main body content when menu is clicked
    const h2 = document.createElement('h2');
    h2.textContent = "Refresco's Menu"
    mainBody().appendChild(h2);

    //initialize menu data when menu is clicked
    getMenuItems();
    
}

const renderCheckout = (e) => {
    e.preventDefault();
    //debugger;
    resetMainBody();
    resetMenu();
    //debugger;
    alert('hi, do I work')
}


//Event listeners

const menuEvent = () => {
    menu().addEventListener('click', renderMenu)
}

//const orderEvent = () => {
  //  order().addEventListener('click', submitOrder)
//}

const checkoutEvent = () => {
    checkout().addEventListener('click', renderCheckout)
}

//Reset variables that allow the main and menu body to be changed to an empty object when a specific item is clicked
const resetMainBody = () => {
    mainBody().textContent = "";
}

const resetMenu = () => {
    menuItem().textContent ="";
}

document.addEventListener('DOMContentLoaded', () => {
    menuEvent();
    checkoutEvent();
    
})
//Variables for Node IDs
const mainBody = () => document.getElementById('main_body')
const menu = () => document.getElementById('menu');
const checkout = () => document.getElementById('checkout');
const menuBody = () => document.getElementById('menu_body');
const formBody = () => document.getElementById('form_body')
const cartBody = () => document.getElementById('cart_body');


//Event listeners
//Menu event listener
const menuEvent = () => {
    menu().addEventListener('click', renderMenu)
}

//checkout event listener
const checkoutEvent = () => {
    checkout().addEventListener('click', renderCheckout)
}

const formSubmit = () => {
    formBody().addEventListener('submit', (e) => {
        e.preventDefault();
        console.log(e.target.inputEmail4.value)
    })
}

//Reset variables that allow the main and menu body to be changed to an empty object when a specific item is clicked
const resetMainBody = () => {
    mainBody().textContent = "";
}

const resetMenu = () => {
    menuBody().textContent ="";
}

const resetCart = () => {
    cartBody().textContent = "";
}


//DOM Content Loaded
document.addEventListener('DOMContentLoaded', () => {
    menuEvent();
    checkoutEvent();
    formSubmit();
    
})

//Event handlers
//Menu event handler

const renderMenu = (e) => {
    e.preventDefault();

    //removing the main body or about when menu is clicked
    resetMainBody();
    resetCart();

    //New main body content when menu is clicked
    const menuTitle = document.createElement('h2');
    menuTitle.textContent = "Refresco's Menu"
    mainBody().appendChild(menuTitle);

    //initialize menu data when menu is clicked
    getMenuItems();
    
}
//Checkout event handler
const renderCheckout = (e) => {
    e.preventDefault();
    //debugger;
    resetMainBody();
    resetMenu();
    //debugger;

    //Cart Main Body Content
    const cartTitle = document.createElement('h2');
    cartTitle.textContent = "Cart";
    mainBody().appendChild(cartTitle);
    alert('hi, do I work')
}


//DOM Render functions variable
//Menu DOM Render Function
function renderMenuItem(menuItems){
    //build menu item card
    const menuCard = document.createElement("div")
    menuCard.className = 'card'
    menuCard.innerHTML = `
        <img src="${menuItems.imageURL}" class="card-img-top" alt="${menuItems.altText}">
        <div class="card-body">
          <h5 class="card-title">${menuItems.name}</h5>
          <p class="card-text">${menuItems.description}</p>
          <a href="#" class="btn btn-primary" id="order">Add To Cart: ${menuItems.cost}</a>
        </div>
    `

    //add event listener for submitting order function
    menuCard.querySelector('#order').addEventListener('click', (e) => {
        e.preventDefault
        let orderCard = [];
        orderCard.push(menuCard);
        alert('hi, do I work')
        console.log(orderCard)
    })

    //add menu card to menu body
    document.querySelector('#menu_body').appendChild(menuCard)
}

//Fetch makes a request to get all the menu items information from the server

function getMenuItems(){
    fetch('http://localhost:3000/menuData')
    .then(res => res.json())
    .then(menuData => menuData.forEach(menuItems => renderMenuItem(menuItems)))
}

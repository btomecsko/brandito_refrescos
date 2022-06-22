//Variables for Node IDs
const mainBody = () => document.getElementById('main_body')
const menu = () => document.getElementById('menu');
const checkout = () => document.getElementById('checkout');
const menuBody = () => document.getElementById('menu_body');
const form = () => document.getElementById('form_body')
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
    form().addEventListener('submit', renderForm)
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
    menuCard.addEventListener('mouseenter', (e) => {
        e.target.style.border = "thick red";
        //reset
        setTimeout(() => {e.target.style.border = "";           
       }, 500);
    }, false); 

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

//Form javascript functionality

//Show a demo message with input

function formMessage(input, message, type) {

    //create a variable for the small element in the form
    const formMsg = input.parentNode.querySelector("small");
    formMsg.innerText = message;
    // update the class dependent on the input
    input.className = type ? "success" : "error";
    return type;
}

function formError(input, message) {
    return formMessage(input, message, false);
}

function formSuccess(input) {
    return formMessage(input, "", true);
}

function hasValue(input, message) {
    if (input.value.trim() === "") {
        return formError(input, message);
    }
    return formSuccess(input);
}

// show a message with a type of the input
function showMessage(input, message, type) {
	// get the small element and set the message
	const msg = input.parentNode.querySelector("small");
	msg.innerText = message;
	// update the class for the input
	input.className = type ? "success" : "error";
	return type;
}

function showError(input, message) {
	return showMessage(input, message, false);
}

function showSuccess(input) {
	return showMessage(input, "", true);
}

function hasValue(input, message) {
	if (input.value.trim() === "") {
		return showError(input, message);
	}
	return showSuccess(input);
}

function validateEmail(input, requiredMsg, invalidMsg) {
	// check if the value is not empty
	if (!hasValue(input, requiredMsg)) {
		return false;
	}
	// validate email format
	const emailRegex =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	const email = input.value.trim();
	if (!emailRegex.test(email)) {
		return showError(input, invalidMsg);
	}
	return true;
}

//Form variables
const NAME_REQUIRED = "Please enter your name";
const EMAIL_REQUIRED = "Please enter your email";
const EMAIL_INVALID = "Please enter a correct email address format";

//Form event handler
const renderForm = (e) => {
    e.preventDefault();

    //validate form
    let nameValid = hasValue(document.getElementById('full_name'), NAME_REQUIRED)
    let emailValid = validateEmail(document.getElementById('inputEmail4'), EMAIL_REQUIRED, EMAIL_INVALID);
    //if valid, submit form
    if (nameValid && emailValid) {
        alert("Demo! No Form was posted");
    }

}

//Fetch makes a request to get all the menu items information from the server

function getMenuItems(){
    fetch('http://localhost:3000/menuData')
    .then(res => res.json())
    .then(menuData => menuData.forEach(menuItems => renderMenuItem(menuItems)))
}

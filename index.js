//Variables for Node IDs
const home = () => document.getElementById('main_menu');
const recipes = () => document.getElementById('recipes');
const subscribe = () => document.getElementById('subscribe');
const form = () => document.getElementById('form_body');


//Event listeners
//Home evemt listener
const homeEvent = () => {
    home().addEventListener('click', renderHome)
}

//Recipe event listener
const recipeEvent = () => {
    recipes().addEventListener('click', renderRecipes)
}

//Subscribe event listener
const subscribeEvent = () => {
    subscribe().addEventListener('click', renderSubscribe)
}
//form event listener
const formSubmit = () => {
    form().addEventListener('submit', renderForm);
}


//DOM Content Loaded
document.addEventListener('DOMContentLoaded', () => {
    homeEvent();
    recipeEvent();
    subscribeEvent();
    formSubmit();
    
})

//Event handlers
//Home event handler

const renderHome = (e) => {
    e.preventDefault();
    document.getElementById('main_body').hidden = false;
    document.getElementById('subscribe_body').hidden = true;
    document.getElementById('recipe_row').hidden = true;
}

//Recipe event handler

const renderRecipes = (e) => {
    e.preventDefault();

    //removing the main body or about when recipe is clicked
    document.getElementById('main_body').hidden = true;
    document.getElementById('subscribe_body').hidden = true;
    document.getElementById('recipe_row').hidden = false;

    //initialize recipe data when recipe is clicked
    getRecipeItems();
    
}
//subscribe event handler
const renderSubscribe = (e) => {
    e.preventDefault();
    
    document.getElementById('main_body').hidden = true;
    document.getElementById('recipe_row').hidden = true;
    document.getElementById('subscribe_body').hidden = false;
    
}


//DOM Render functions variable
//Recipe DOM Render Function
function renderRecipeItem(recipeItems){
    //build recipe item card
    const recipeCard = document.createElement("div")
    recipeCard.className = 'card'
    recipeCard.innerHTML = `
        <img src="${recipeItems.imageURL}" class="card-img-top" alt="${recipeItems.altText}">
        <div class="card-body text-white ">
          <h5 class="card-title">${recipeItems.name}</h5>
          <p class="card-text">${recipeItems.description}</p>
        </div>
    `

    recipeCard.addEventListener('mouseover', (e) => {
        e.preventDefault();
        e.target.style.backgroundColor = "black";
        //reset
        setTimeout(() => {
            e.target.style.backgroundColor = "";
        }, 1000);
    })

    //add recipe card to recipe body
    document.querySelector('#recipe_body').appendChild(recipeCard)
}

//Form javascript functionality

//Show a demo message with input

function formMessage(input, message, type) {

    //create a variable for the small element in the form
    const formMsg = input.parentNode.querySelector("small");
    formMsg.innerText = message;
    // update the class dependent on the input
    input.className = type ? "success form-control" : "error form-control";
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
		return formError(input, invalidMsg);
	}
	return true;
}

//Form variables
const NAME_REQUIRED = "Please enter your name";
const EMAIL_REQUIRED = "Please enter your email";


//Form event handler
const renderForm = (e) => {
    e.preventDefault();

    //validate form
    let nameValid = hasValue(document.getElementById('full_name'), NAME_REQUIRED)
    let emailValid = validateEmail(document.getElementById('inputEmail4'), EMAIL_REQUIRED);
    //if valid, submit form
    if (nameValid && emailValid) {

        form().textContent="";

        const formResponse = document.createElement('div')
        formResponse.className = 'card text-center';
        formResponse.innerHTML = `
        <div class="card-header">
            Brandito's Refresco's
        </div>
        <div class="card-body">
            <h5 class="card-title">Muchas Gracias!</h5>
            <p class="card-text">Thank you for Subscribing to my blog! Stay tuned for future updates and new recipes.</p>
        </div>
        <div class="card-footer text-muted"></div>
        `

        document.querySelector('#thankYou').appendChild(formResponse)
    }

}

//Fetch makes a request to get all the recipe items information from the server

function getRecipeItems(){
    fetch('http://localhost:3000/recipeData')
    .then(res => res.json())
    .then(recipeData => recipeData.forEach(recipeItems => renderRecipeItem(recipeItems)))
}

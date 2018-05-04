// Create an HTML page that contains a text area and a button labeled Create.

// references the input area
const userInputRef = document.querySelector("#userInput")
// ref for create button
const createButtonRef = document.querySelector("#createButton")
// ref for output
const articleOutput = document.querySelector("#cardOutput")

// generic button maker
const buttonFactory = (classList, textContent, eventListener) => {
// button Factory
    const button = document.createElement("button")
    button.classList = classList
    button.textContent = textContent
    button.addEventListener("click", eventListener)
    return button
}

// creates a card based on userInput
function cardMaker (userInput) {
    // that creates a new DOM component that has a border, and includes it's own delete button.
    const cardSection = document.createElement("div")
    cardSection.textContent = userInput
    cardSection.classList = "card"
    const deleteButton = buttonFactory("button__delete", "Delete", function(){
        cardSection.remove(cardSection) 
    })
    cardSection.appendChild(deleteButton)
    articleOutput.appendChild(cardSection)
}
// gets user input
// Event listener on button which creates the card
createButtonRef.addEventListener("click", function(){
    const userTextInput = userInputRef.value
    cardMaker(`${userTextInput}`)
})

// When the user enters in text into the text area 
// and then clicks the create button, use a factory function 

// Insert that new component into the DOM.
// When the user clicks the Delete button, the containing card, and no other cards, should then be removed from the DOM.
//  Not just made invisible, actually removed from the DOM.

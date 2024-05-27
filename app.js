// First we will access the boxes for the Tic Tac Toe game using the class
// Here query Selector all will be used because we want to access all the boxes in the same class

let boxes = document.querySelectorAll(".box");

// Access the reset button at the bottom of the page

let resetbutton = document.querySelector(".resetButton");

// Since we have a created a new game button we will access that button
let newGameButton = document.querySelector("#NewGameButton")
let messageContainer  = document.querySelector(".message-container")
let message = document.querySelector("#message")


// Here we will define whoes turn it is and also the turn will remain alternate

let turnO = true; // PlayerX and PlayerO

// Winning Pattern of the game will be stored in the form a 2D array

const winningPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

// We will create a reset button
const resetGame = () => {
    turnO = true;
    enableBoxes();
    messageContainer.classList.add("hidden")

}

// Here will create the priting condition, as to what happens when the button is click

boxes.forEach(box => {
    box.addEventListener("click",() => {
        console.log("The box was clicked")  // This for the console to note that the box was clicked
        if (turnO === true) { // When the turn if for playerO
            box.innerText = "O" // we will print O and move the turn to playerX
            turnO = false;
        } else {
            box.innerText = "X" // If it is player X turn, it will print X and move the turn to O
            turnO = true;
        }
        // Here is catch where if the button is clicked more than once it is changing it's value
        // So what we can do is we can change the button to if button is clicked then it can be disabled

        box.disabled = true;

        // Now we also need to check after each and every click that has the player won or not
        checkWinner();
    });
});
// We also need to make sure that once a winner is declared all the rest of the boxes are disabled
const disableButton = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}
// We also need to make a 'enable' boxes functions as we need to re-enable the boxes
const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = ""
    }
}
const showWinner = (winner) => {
    message.innerText = `Congratulations, Winner is ${winner}`;
    // As and when the winner is declared we will remove the class 'hide' from the message container classlist so that name appears
    messageContainer.classList.remove("hidden") // Hidden is our class name whoes display is set to none in the CSS File
    disableButton(); // Once a winner is printed all the rest of the boxes are disabled
}


const checkWinner = () => {
    for (let pattern of winningPattern) {
        let position1Val = boxes[pattern[0]].innerText;
        let position2Val = boxes[pattern[1]].innerText;
        let position3Val = boxes[pattern[2]].innerText;

        if (position1Val != "" && position2Val != "" && position3Val != "") {
            if (position1Val === position2Val && position2Val === position3Val) {
                console.log("Winner",position1Val);
                //Now we will insert a fucntion here that will help us print the winner name
                showWinner(position1Val)
            }
        }
    }
}

// The reset gamebutton would be enable when 
newGameButton.addEventListener("click",resetGame);
resetbutton.addEventListener("click",resetGame);
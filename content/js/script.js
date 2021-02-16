const squares = document.querySelectorAll(".square");
const colorDisplay = document.getElementById("colorDisplay");
const message = document.getElementById("message");
let colors = generateColors(6);
const h1 = document.querySelector("h1");
const reset = document.querySelector("#reset");
const easyBtn = document.querySelector("#easyBtn");
const hardBtn = document.querySelector("#hardBtn");

let pickedColor = pickColor();
let numOfSquares = 6;

colorDisplay.textContent = pickedColor;

// Function for changing mod to "Easy"

easyBtn.addEventListener("click", function(){
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    numOfSquares = 3;
    colors = generateColors(3); // Change number of generated squares from 6 to 3
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    h1.style.backgroundColor = ("steelblue");
    message.textContent = "";
    reset.textContent = "New colors";
    for(let i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
})

// Function for changing mod to "Hard"

hardBtn.addEventListener("click", function(){
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numOfSquares = 6;
    colors = generateColors(6); // Change number of generated squares from 3 to 6
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    h1.style.backgroundColor = ("steelblue");
    message.textContent = "";
    reset.textContent = "New colors";
    for(let i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
    }
})

// Function to reset a game

reset.addEventListener("click", function(){
    colors = generateColors(numOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    message.textContent = "";
    reset.textContent = "New colors";
    h1.style.backgroundColor = ("steelblue");
    for(let i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }
})

// Function to check right color and clicked color

for (let i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i];

    squares[i].addEventListener("click", function(){
        let clickedColor = this.style.backgroundColor;
        if (clickedColor === pickedColor){
            message.textContent = "You win ;D";
            reset.textContent = "Play again?";
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
        } else {
            message.textContent = "Try again :(";
            this.style.backgroundColor = "#232323";
        }
    })
}

// Functions to change and pick colors

function changeColors(color){
    for(let i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = pickedColor;
    }
}

function pickColor(){
    let random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateColors(num){
    let array = [];
    for (let i = 0; i < num; i++){
        array.push(randomColor());
    }
    return array;
}

function randomColor(){
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
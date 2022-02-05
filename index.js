// People Counter App @Jovic#8370 Desing & Functions

//document.getElementById("counter-element").innerText = 

let count = 0
let counte
let displayCount = document.getElementById("counter-element")
let saveCount = document.getElementById("save-counter")


function signin() {
    console.log('Sign in button was clicked');
    count = count + 1
    displayCount.innerText = count
    counte = count
}

function saving() {
    console.log('Save button was clicked, last save: ' + counte)
    saveCount.innerText = counte
    count = 0
    displayCount.innerText = count
}

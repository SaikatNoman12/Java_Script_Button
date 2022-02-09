
// button on click type - 1


// button on click type - 2 colour "blue"

function buttonBlue(){
    const blue = document.body.style.background = "blue";
};


// button on click type - 3 colour "green"

const green = document.getElementById("make-button-green");
green.onclick = greenButton; 

function greenButton(){
    document.body.style.background = "green"
};


// button onclick type - 4  colour "yellow"

const yellow = document.getElementById("make-button-yellow");

yellow.onclick = function (){
	document.body.style.background = "yellow";
};


// button onclick use addEventListener type - 5 colour "gray"

const gray = document.getElementById("make-button-gray");
gray.addEventListener('click', buttuonGray);

function buttuonGray(){
	document.body.style.background = "gray";
};


// button onclick use addEventListener type - 6 "brown"

const brown = document.getElementById("make-button-brown");

brown.addEventListener('click', function (){
    document.body.style.background = "brown";
});

// button onclick use addEventListener type - 7 "pink"

document.getElementById("make-button-pink").addEventListener('click', function (){
    document.body.style.background = "pink";
});



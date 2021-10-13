let display = document.getElementById("calcDisplay").innerHTML

function writeToDisplay (x) {
    display = document.getElementById("calcDisplay").innerHTML += x;
}


function result () {
    let sums = eval(display);
    document.getElementById("calcDisplay").innerHTML = sums;
}

// function result () {
//     display = document.getElementById("calcDisplay").innerHTML.split(' ');
//     firstNumber = parseInt(display[0]);
//     secondNumber = parseInt(display[2]);
//     operator = display[1];
//     if (operator == "+") {
//         document.getElementById("calcDisplay").innerHTML = firstNumber + secondNumber;
//     }
//     else if (operator == "-"){
//         document.getElementById("calcDisplay").innerHTML = firstNumber - secondNumber;
//     }
//     else if (operator == "*") {
//         document.getElementById("calcDisplay").innerHTML = firstNumber * secondNumber;
//     }
//     else {
//         document.getElementById("calcDisplay").innerHTML = firstNumber / secondNumber;
//     }
// }

function reset() {
    document.getElementById("calcDisplay").innerHTML = "";
}




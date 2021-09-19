function writeToDisplayNumber (x) {
    var num = document.getElementById("calcDisplay").innerHTML += x
}

function writeToDisplayOperator(a) {
    var operand = document.getElementById("calcDisplay").innerHTML += a
}


function result () {
    let stringSum = document.getElementById("calcDisplay").innerHTML;
    let sums = eval(stringSum)
    document.getElementById("calcDisplay").innerHTML = sums;
}






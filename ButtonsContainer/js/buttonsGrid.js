var btn5 = document.getElementById("btn5");
btn5.onclick = function() {
    SetNewValueButton("btn1");
    SetNewValueButton("btn2");
    SetNewValueButton("btn3");
    SetNewValueButton("btn6");
    SetNewValueButton("btn9");
    SetNewValueButton("btn8");
    SetNewValueButton("btn7");
    SetNewValueButton("btn4");
};

function SetNewValueButton(id) {
    var dict = {"1":"4", "2":"1", "3":"2", "6":"3", "9":"6", "8":"9", "7":"8", "4":"7"};
    var currentVal = document.getElementById(id).innerHTML;
    document.getElementById(id).innerHTML = dict[currentVal];
}
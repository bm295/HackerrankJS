function processData(input) {
    //Enter your code here
    var inputs = input.split(/\r?\n/g);
    var n = parseInt(inputs[0]);
    var dict = {};
    for (var i = 0; i < n; i++) {
        var temp = inputs[1 + i];
        var tempArr = temp.split(" ");
        dict[tempArr[0]] = tempArr[1];
    }
    for (j = 1 + n; j < inputs.length; j++) {
        var temp = inputs[j];
        if (dict[temp]) {
            console.log(temp + "=" + dict[temp]);
        }
        else {
            console.log("Not found");
        }
    }
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});

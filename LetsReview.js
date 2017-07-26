function processData(input) {
    //Enter your code here
    var inputs = input.split(/\r?\n/g);
    for(var i = 1; i < inputs.length; i++) {
        var temp = inputs[i];
        var even = '';
        var odd = '';
        for(var j = 0; j < temp.length; j++) {
            if (j % 2 == 0) {
                even += temp.charAt(j);
            }
            else {
                odd += temp.charAt(j);
            }
        }
        console.log(even + " " + odd);
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

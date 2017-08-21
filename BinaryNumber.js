process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var n = parseInt(readLine());
    var binN = n.toString(2);
    var count = 0;
    var max = 0;
    for(var i = 0; i < binN.length; i++) {
        if (binN.charAt(i) == '1') {
            count++;
            if (count > max) {
                max = count;
            }
        }
        else {
            count = 0;
        }        
    }
    console.log(max);
}

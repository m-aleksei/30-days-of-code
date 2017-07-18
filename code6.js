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

function main() {
    var n = readLine();
    var s = "";
    var x = new Array();
    var y = new Array();
    for (var i = 1; i <= n; i++) {
        s = readLine(); 
        for (var j = 0; j < s.length; j = j + 2) {
            process.stdout.write("" + s[j]);            
        }
        process.stdout.write(" "); 
        for (var j = 1; j < s.length; j = j + 2) {
            process.stdout.write("" + s[j]);            
        }
        process.stdout.write("" + "\n");
    }
    
    
    
}

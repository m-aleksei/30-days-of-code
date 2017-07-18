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

function binary (t) {
    var bina = new Array();
    var binb = "";
    var mod;
    var i = 0;
    
    while (t > 1) {
        mod = t % 2;
        bina[i] = mod;
        t = Math.floor(t/2);
        i++;
    }
    
    bina[i] = 1;
    
    for (var i = bina.length - 1; i >= 0; i--) {
        binb = binb + "" + bina[i];
    }
    
    return binb;
}

function maxnum(k) {
    var d = 1;
    var maxx = 1;
    var i = 0;
    var j;
    
    while (d > 0) {
        if (k[i] == "0") {
            if (d > maxx) {
                maxx = d;
                d = 1;
            } else {
                d = 1;
            }   
        }
        if (k[i] == "1") {
            for (j = i + 1; j < k.length; j++) {
                if (k[j] == "1") {
                    i = j;
                    d++;
                } else {
                    break;
                }
            }
        }
        i++;
        if (i == k.length) { 
            if (d > maxx) {
                maxx = d;
            }
            d = 0; 
        }
    }

    return maxx;
}

function main() {
    var n = parseInt(readLine());
    var x = "";
    
    switch (n) {
        case 0:
            process.stdout.write("0" + "\n");
            break;
        case 1:
            process.stdout.write("1" + "\n");
            break;
        case 2:
            process.stdout.write("1" + "\n");
            break;
        case 3:
            process.stdout.write("2" + "\n");
            break;
        case 4:
            process.stdout.write("1" + "\n");
            break;
        case 5:
            process.stdout.write("1" + "\n");
            break;
        case 6:
            process.stdout.write("2" + "\n");
            break;
        case 7:
            process.stdout.write("3" + "\n");
            break;
        case 8:
            process.stdout.write("1" + "\n");
            break;
        default:
            x = binary(n);
            n = maxnum(x);
            process.stdout.write("" + n + "\n");
            break;
    }
    
}

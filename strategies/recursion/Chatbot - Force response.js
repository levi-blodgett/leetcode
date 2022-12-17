var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function coffee_bot() {
    console.log('Welcome to the cafe!')
    var size = get_size()
    console.log(size)
}

function get_size() {
    rl.question("What size of drink can I get you? \n[a] Small \n[b] Medium \n[c] Large \n", function (res) {
        if (res == 'a')
            return 'Small'
        else if (res == 'b')
            return 'Medium'
        else if (res == 'c')
            return 'Large'
        else
            return get_size()
    })
}

coffee_bot()
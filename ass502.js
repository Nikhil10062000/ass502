// program to print prime numbers between the two numbers

const n = parseInt(prompt('Enter higher number: '));

console.log('The prime numbers upto ' + n + ' are:');

for (var i = 1; i <= n; i++) {
    var prime = false;

    
    for (var j = 2; j < i; j++) {
        if (i % j == 0) {
            prime = true;
            break;
        }
    }

    // if number greater than 1 and not divisible by other numbers
    if (i > 1 && prime == 0) {
        console.log(i);
    }
}
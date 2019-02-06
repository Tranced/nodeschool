//Solution for Baby steps
let sum = 0;

//Iterate through args array starting at first argument
for (let number of process.argv.splice(2)) {
    sum += parseInt(number);
}

console.log(sum);
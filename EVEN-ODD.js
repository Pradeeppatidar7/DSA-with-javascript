// program to check if the number is even or odd
const prompt=require('prompt-sync')()
number = prompt("Enter a number: ");
if(number % 2 == 0) {
    console.log("The number is even.");
}

// if the number is odd
else {
    console.log("The number is odd.");
}
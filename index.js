//For loop.....................................//................................
const n = 5;
for (let i = 1; i < n; i++){
    console.log('I am a Web Developer.');
}

//For-in loop.................................//.....................................
const student = {
    Name : "Anshuman",
    Age : 20,
    class : 12,
}
for (let key in student){
    console.log(`${key} = ${student[key]}`);
}

//Example3: Write a program which takes a number from user and print the table.
//input: ...

let number = 13; // Taking input from the user

console.log(`Multiplication Table of ${number}:`);
for(i = 1; i <= 10; i++){
console.log(`${number} * ${i} = ${number*i}`); 
}

//While loop.........................................//.............................
let i = 0;
while(i <= 10){
    console.log ("The Number is " + i);
    i++;
}

//do while loop .......................................//...............................

let num = 1;
do {
   console.log("Value is", num);
   num++;
} while(num <= 10);



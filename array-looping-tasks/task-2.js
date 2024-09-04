//Write a JavaScript code to get the even numbers from an array using any looping technique.

let numbers = [12, 98, 5, 41, 23, 78, 46];


// 1st way : (using for__of loop)
let evenNumber1 = []
let oddNumber1 = []
for(number of numbers){
    if(number % 2 === 0){
        evenNumber1.push(number)
    } else {
        oddNumber1.push(number)
    }
}
console.log(evenNumber1)
console.log(oddNumber1)


// 2nd way : (usig by for__loop)
let evenNumber2 = [];
let oddNumber2 = [];
for(let i = 0; i < numbers.length; i++) {
    let number = numbers[i];
    if(number % 2 === 0){
        evenNumber2.push(number)
    } else {
        oddNumber2.push(number)
    }
}
console.log(evenNumber2);
console.log(oddNumber2)



// 3rd way : (useing for__loop reverse way)
let evenNumber3 = [];
let oddNumber3 = [];
for(let i = numbers.length-1; i >= 0; i--){
    let number = numbers[i]
    if(number % 2 === 1){
        oddNumber3.unshift(number)
    } else {
        evenNumber3.unshift(number)
    }
}

console.log(evenNumber3);
console.log(oddNumber3);




// 4th way : (using while__loop)

let evenNumber4 = [];
let oddNumber4 = [];

let i = 0;
while( i < numbers.length){
    //access numbers values and add into number
    let number = numbers[i]
    
    if(number % 2 === 0){
        evenNumber4.push(number)
    } else {
        oddNumber4.push(number)
    }
    
    i++
}

console.log(evenNumber4);
console.log(oddNumber4)


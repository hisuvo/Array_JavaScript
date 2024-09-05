// Use a for...of loop to concatenate all the elements of an array into a single string.

const names = ["tom", "tim", "tin", 'tik'];

//Array join() method
let result = names.join("")
console.log(result)

//Array toString() method
let result_s = names.toString().replace(/,/g, "");
console.log(result_s)

//1st way:
let result1 = "";
for(let name of names){
    result1 += name; // result1 = result1 + name;
}
console.log(result1)


// 2nd way:
let result2 = "";
for(let i = 0; i < names.length; i++) {
    result2 = result2 + names[i] // result2 += names[i]
}
console.log(result2);


// 3rd way:
let result3 = names.reduce((acc, cur) => {
    return acc + cur;
    // return acc + " " + cur;
    // return acc + "," + cur;
    // return acc + "-" + cur;
    // return acc + "*" + cur;
})
console.log(result3)

// note:
// let x = "";
// let y = "suvo";
// let z = "datta";
// console.log(x,y,z)
// console.log(y+x+z)






















//--------------------------
//reduce() method analysices
//--------------------------

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
//use reduse() method
// numbers.reduce(function(perivous, current, index, array) {
//     console.log("perivous value is ", perivous);
//     console.log("current value is ", current);
//     console.log("index number is ", index);
//     console.log("mainn arra is", array)

// }, 0);
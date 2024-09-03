
//###1 Solution:

// 5 elements containing fruits
const fruits = ["apple", "orange", "mango", "banana", "jackfruit"];

// 3rd index element
let thirdElement = fruits[2];
// console.log(thirdElement);

//Second index element add jumbura
fruits[1] = "Jambura";

// final array
// console.log(fruits);




// ###2 solution:


// three tourist destination

let touristPlace = ["Cox's Bazar", "Sentmorthin", "Koaktha"];
// console.log(touristPlace);

// add one tourist destination

touristPlace.push("Sundor Bone");
// console.log(touristPlace);

// Again add two tourist destination

touristPlace.push("Silate", "Rangamati");
// console.log(touristPlace);

// remove last turist place;

let lastTouristPlace = touristPlace.pop(touristPlace[touristPlace.length-1]);
// console.log(lastTouristPlace);





// ###3 solution:

// let book = ["Java", "Python", "JavaScript", "Golang", "Rust", "Php"]

// if(book.includes("mango")){
// 	console.log("JavaScript Book is present in the array");
// } else {
// 	console.log("JavaScript Book isn't present in the array");
// }



// By using Function:

function bookChecking(book){

	let books = ["Java", "Python", "JavaScript", "Golang", "Rust", "Php"]

	if(books.includes(book)){
		console.log(` ${book} Book is present in the array`);

	} else {
		console.log(`${book} Book isn't present in the array`);

	}
}

// bookChecking("Java");






// ### 4. Checking if it's an Array

// Solution:


let checkArrayOne = ["Bangla", "English", "Mathematice", "Science", "ICT"];

let checkArrayTwo = "Helle World!";

function arrayCheckingFunc(parameter){

	if(Array.isArray(parameter)){
		console.log(`${parameter} is Array`);

	} else {
		console.log(`${parameter} is not Array`);

	}
}

// arrayCheckingFunc(checkArrayOne)
// arrayCheckingFunc(checkArrayTwo)






// ### 5. Concat in Array;

// Solution:

let num1 = [2, 4, 5, 6, 7, 8];
let num2 = [12, 23, 21, 56, 47, 90];
let letter = ["A", "B", "C", "D", "E"];

let concat1 = num1.concat(letter);
// console.log(concat1);

let concat2 = letter.concat(num1, num2);
// console.log(concat2);




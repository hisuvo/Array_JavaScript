//array.sort() method
let person = ["anik", "tnik", "pnik", "canik"];
// console.log(person)

let desnding = person.sort();
// console.log(desnding)


// let numbers = [6, 3, 27, 1, 23, 12, 5, 9];
// console.log(numbers);
// let num = numbers.sort()
// console.log(num) // same output
// console.log(numbers) //  same output



// here main arry change for useing sort method()

// let numbers = [6, 3, 27, 1, 23, 12, 5, 9];
// let num = numbers.sort((a, b) => {
//     return a - b;
// })
// console.log(num) // same output
// console.log(numbers) //  same output









// here main arry change for useing sort method().how to fixed it.
//Ans: array varianle ka sort() korar aga spread operator use korta hoba (exam: here numbers is variable so spread use korla hoba [...numbers] abar [...numbers] ar shata sort() method use korla main array change hoba na)

let numbers = [6, 3, 27, 1, 23, 12, 5, 9];
let num = [...numbers].sort((a, b) => {
    return a - b;
})
console.log("sort array is:", num) // sperate output
console.log("main array is", numbers) //  sperate output
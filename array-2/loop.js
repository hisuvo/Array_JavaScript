/**
 * 
 * Loop Tecnique
 * 
 * for loop
 * while loop
 * do--while loop ===> here don't use (then learn it)
 * for--of loop ===> it use in Array
 * for---in loop ===> it use in Object
 * 
 */


let massMate = ["Jhony", "Indro", "Avijit", "Partho", "Hridro"]


for (let i = 0; i < massMate.length; i++){
    // console.log(i, massMate[i])
}






// reverse loop
let x = [];
for (let i = massMate.length - 1; i >= 0; i--){
    // console.log(i, massMate[i])
    x.push(massMate[i]);
}
console.log(x)







let i = 0;
for(let person of massMate) {
    // console.log(person);
    i++ // it use to know of Array length by loop
}

// console.log(i)









// While loop:
//------------

let indx = 0;
while( indx < massMate.length) {
    // console.log(indx)
    let person = massMate[indx]
    // console.log(person)
    indx++
}


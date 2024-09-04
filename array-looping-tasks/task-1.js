// Task-1 Solution:
//-----------------

const colors = ["red", "blue", "green", "yellow", "orange"]
console.log(colors)


// 1st way:
let reverseColor1 = [...colors].reverse();
console.log(reverseColor1)

// Note: colors ka sprade operator use na korla main array ka change kora fali


//2nd way: (using for__of loop)
let reverseColor2 = [];
for(let color of colors){
    reverseColor2.unshift(color)
}
console.log(reverseColor2)


//3rd way: (using for loop)
let reverseColor3 = [];
for(let i = 0; i < colors.length; i++){
    let color = colors[i]
    reverseColor3.unshift(color);
}
console.log(reverseColor3);



// 4rh way:(using for loop but not use unshift() method)
let reverseColor4 = [];
for (let i = colors.length-1; i >= 0; i--){
    let color = colors[i]
    reverseColor4.push(color)
}
console.log(reverseColor4)


### How to create new Array from Array in JavaScript?

Solution: In JavaScript, I can create arrays from existing arrays in various way. Depending on What I want to achieve.
here are some common method:

1.  slice() method :

    Create Copy Array by useing slice() array method

        const orginalArray = ["Tik", "ToK", "LoK", "Dok"];
        const newArray = orginalArray.slice(); //don't chane original array

    And create subarray by specify start and end point

        const subArray = orginalArray.slice(1, 3);
        console.log(subArray);

2.  Contcat() method :

    Create copy Array using contcat() method

        const originalArray = ["apple", "orange", "banana", "mango"];
        const copyArray = [].concat(originalArray) //don't chane original array

3.  Using Spread Operator :

    Create copy Array by Spread operator

        const originalArray = ["mobile", "watch", "laptop"];
        const newArray = [...originalArray] //don't chane original array
        newArray.push("headphone")

    We can use add multiple array by spread operator

        let array1 = ["tim", "tom"];
        let array2 = ["tik", "tok"];
        let newArray = [...array1, ...array2];  // Combines both arrays
        console.log(newArray);

4.  Using map() method:

    we can create new array base on conditions or transformation using map() method

        const  originalArray = [2, 3, 4, 5, 6, 7]
        const newArray = originalArray.map(x => x*1)
        newArray.pop() // don't change originalArray

5.  using filter() method:

        const originalArray = [12, 13, 14, 15, 21, 32, 43, 56];
        const newArray = originalArray.filter(x => x % 2 === 0)
        console.log(newArray)

6.  using form() method

        let originalArray = ["tim", "tom", "tik"];
        let newArray = Array.from(originalArray);  // Creates a copy
        console.log(newArray);

7.  using loop :

        let originalArray = ["tim", "tom", "tik"];
        let newArray = [];

        for (let i = 0; i < originalArray.length; i++) {
        newArray.push(originalArray[i]);
        }

        console.log(newArray);  // ["tim", "tom", "tik"]

// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.

const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]

// b) Create the function that makes the test pass.

// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// describe("", () => {
//     it("", () => {
//         expect(()).toEqual("")
//     })
// })

// const greeter = () => {
//     return ""
// }

// a) Create a test with expect statements for each of the variables provided.

// describe('divThree', () => {
//     it("takes a object as an argument and decides if the number inside it is evenly divisible by three", () => {
//         expect(divThree(object1)).toEqual("15 is divisible by three")
//         // error accessing object1
//         expect(divThree(object2)).toEqual("0 is divisible by three")
//         expect(divThree(object3)).toEqual("-7 is not divisible by three")
//         const object1 = { number: 15 }
//         // Expected output: "15 is divisible by three"
//        const object2 = { number: 0 }
//         // Expected output: "0 is divisible by three"
//         const object3 = { number: -7 }
//         // Expected output: "-7 is not divisible by three"
//     })
// })

// ReferenceError: divThree is not defined


// b) Create the function that makes the test pass.

// Create a function "divThree" 
// create a conditional statement using modulo 3 
// utilize if() and else if()  as well as string interpolation to determine divisiblity
// if condition is met, the number will either be divisible or not

// const divThree = (object) => {
//     console.log(object)
//     if (object.number % 3 === 0) {
//         return `${object.number} is divisible by three`
//     } else if (object % 3 !== 0) {
//         return `${object.number} is not divisible by three`
// }
// }

// divThree tested

//  1 passed! Green!


// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

// describe('capIt', () => {
//     it("Takes in an array of words and returns an array with all the words capitalized", () => {
//         const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
//         // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
//         const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
//         // Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]
//         expect(capIt(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
//         expect(capIt(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango"])
//     })
// })


// ReferenceError: capIt is not defined

// b) Create the function that makes the test pass.

// Create a function named capIt that takes in the array and capitalize each strings first character.
// This function will utilize methods such as .map(), .toUpperCase, and  newly found .substring (used so that the rest of the element does not get capitalized)
// Return will bring back a new array with the index 0 capitalized only.

// const capIt = (array) => {
//     return array.map((value) => {
//         return value[0].toUpperCase() + value.substring(1)
//     })
// }

// Test Suites: 1 passed, 1 total


// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.



describe('firstVowel', () => {
    it('Takes in a string and logs the index of the first vowel', () => {
        expect(firstVowel(vowelTester1)).toEqual(1)
        expect(firstVowel(vowelTester2)).toEqual(0)
        expect(firstVowel(vowelTester3)).toEqual(2)
        const vowelTester1 = "learn"
        // Expected output: 1
        const vowelTester2 = "academy"
        // Expected output: 0
        const vowelTester3 = "challenges"
        // Expected output: 2
    })
})

// ReferenceError: firstVowelIndex is not defined

// b) Create the function that makes the test pass.

// create a function named firstVowel
// The purpose of the function will be to take in strings and return it with the first vowel capitalized 
// utilize .split and .length on the array 
// Iterate through using for loops to determine what are vowels
// conditional statments utilizing && to chain, 
// return using .index
// if condtions are met the array will return  with a capitalized vowel


const firstVowel = (str) => {
    let strArr = str.split("")
    for(i = 0; i < strArr.length; i++){
        if(strArr[i] === "a" && strArr[i] === "e" && strArr[i] === "i" && strArr[i] === "o" || strArr[i] === "u"){
                    return strArr.indexOf(strArr[i])
        }

    }
}

// Test Suites: 1 passed, 1 total


// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

// const cohort = "Foxtrot 2022"
//  console.log(cohort.split(""))

// a) Your answer: I believe the output would be each individual character including the space wrapped in "" due to the .split method. The split method is used tp split a string and return it in an array.
// b) Verify and explain: my answer was correct, due to the .split, the output was changed into an array of single characters wrapped indiviually in ''.

// --------------------2) What will this log?

const greeter = (name) => {
  return `Hello, ${name}!`
}
//console.log(greeter("LEARN Student"))

// a) Your answer: the syntax is incomplete. Theres no return statement set so i dont not belive this will work. It may come as an error or undefined.
// b) Verify and explain: undeifined, due to the lack of having a return, 'Hello, "sting interoplation" was not logged. I added a return to fix the syntax.

// --------------------3) What will this log?

const multipliedByTwo = [4, 5, 6, 7, 8].map((number) => number * 2)
 //console.log(multipliedByTwo)

// a) Your answer: the array of multipliedByTwo will return in a new array due to .map with each index * 2 [8, 10, 14, 16]
// b) Verify and explain:correct, a new array was created by the .map with each number doubled in value

// --------------------4) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
//console.log(onlyOdds)

// a) Your answer: the array will return with only the odd numbers within it. Using .filter, only the numbers that meet the parameters will make it to the new array
// b) Verify and explain: new array of odd numbers wasw returned. [11 13, 15]. the parameter was set using the modulo, .filter created a new array.

// --------------------5) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
 //console.log(myCodingSkills.languages[0])

// a) Your answer: After scratching my head a bit, Javascript will return. console.log is calling for the object and the key languages. [0] indentifies the first string in the array which is Javascript
// b) Verify and explain: correct. due to the the specific key languages being called for and the specific index, javascript was returnes

// --------------------STRETCH: What will this log?

class Learn {
  constructor(name) {
    this.student = name,
    this.cohort = "Foxtrot",
    this.year = 2022
  }
}
const learnStudent = new Learn("George")
//  console.log(learnStudent)

// a) Your answer: the constructor is containing (name) in it, if im correct, it will add the new value of the string "george" to this.student. I believe that the return will be "George", "foxtrot", 2022
// b) Verify and explain: I was partially correct. The whole class was presented with each key defined. 

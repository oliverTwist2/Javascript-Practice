// ARRAYS
// let user = new Array() //class method

// let users = [20, 10, 15, "Oliver"]; //prefferd method

// console.log(users.length)

// ITERATING OVER AN ARRAY

// let animals = ["Lion", "Tiger", "Cheetah"]

// // for..of
// for (let animal of animals) {
//     console.log(`This animal is ${animal}`)
// }

// for..in

// for (let index in animals) {
//     console.log(`The index is ${index} and the value is ${animals[index]}`)
// }

// for..each
// function displayEachAnimal(animal) {
//     console.log(`This animal is ${animal}`)
// }

// animals.forEach(displayEachAnimal)

// animals.forEach((animal)=>{
//     console.log(`This animal is ${animal}`)
// })           // Using arrow function

//Itterate with map
// let usernames = ["oliver", "ruth", "shedrack", "seyi"]
// let usernameInUpperCase = usernames.map((username) =>{
//     const transformedUsername = username.toUpperCase()
//     return transformedUsername
// })

// console.log(usernameInUpperCase)

//Iterate with filter
// let populations = [200, 100, 50, 30, 4, 5, 10]
// console.log(`Default population is ${populations}`)

// let populationGreaterThan30 = populations.filter((population) => {
//     if (population > 30){
//         return population
//     }
// })

// console.log(populationGreaterThan30)


// //2D Arrays
// let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

// console.log(matrix[2][1])


// SET

let setOfUsers = new Set()

let mary = { name: "Mary", age: 20 }
let John = { name: "John", age: 25 }

setOfUsers.add(mary)

console.log(setOfUsers)

//Check Mozilla docs for more methods




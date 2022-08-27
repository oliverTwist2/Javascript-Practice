// alert ("Hello World")

// // Strings
// let text = "Oliver Rocks";
// let x = text.length;
// console.log(x);

// let x = Math.round(4.7);

// console.log(x)

// let x = Math.pow(2, 3)

// console.log(x)

// const cars = ["Toyota", "BMW"];
// console.log(cars[0]);



// // FUNCTIONS
// function sum(){
//     let result = 20 + 30
//     console.log(`The result is ${result}`)
// }

// sum()

// let count = 0 //function variable

// function addToCount() { //function without parameters
//     let localCount = 1

//     count = count + 1
//     localCount = localCount + 2

//     console.log("Count is:", count)
//     console.log("Local Count is:", localCount)
// }

// addToCount()
// addToCount()
// addToCount()


// //functions with parameters
// function displayName(firstName, lastName) {
//     alert(firstName +" "+ lastName)
// }

// displayName("Ikegah", "Oliver")
// displayName("Ruth", "Ikegah")

// //Function with return
// function getFullName(firstName = "", lastName = "") {
//     const fullName = firstName + " " + lastName
//     return fullName
// }

// let fullname = getFullName("Oliver", "Ikegah")

// alert(fullname)

// function performMathOperation(number1, number2, operationType) {
//     if (operationType == "add") {
//         const result = number1 + number2
//         return result
//     } else if (operationType == "sub"){
//         const result = number1 - number2
//         return result
//     } else{
//         alert("Operation not supported")
//     }
// }

// const sumResult = performMathOperation(20, 30, "add")
// console.log(sumResult)

// const diffResult = performMathOperation(20, 30, "sub")
// console.log(diffResult)

//Function expression
// const sayHello = function(){
//     alert("Hello World")
// }

// sayHello()

// //Call back function
// function displayUser(displayType, showFullName, showUserName) {
//     if (displayType == "full"){
//         showFullName()
//     } else {
//         showUserName()
//     }
// }

// function showFullName(){
//     alert("Oliver Ikegah")
// }

// function showUserName(){
//     alert("oliverkrane8")
// }

// displayUser("full", showFullName, showUserName) 

// // Arrow Functions
// let sum = (a, b) => a + b


// LOOPS


// // while loop
// let i = 0;
// while (i < 10) {
//     console.log(i);
//     i++; //increment operator
// }

// // do while loop
// let j = 7;

// do {
//     console.log(j);
//     j++;
// } while (j < 5)


// // For Loop
// for (let i = 0; i < 10; i++) {
//     console.log("i is now:", i)
// }

// //For In
// const user = {
//     name: "Oliver",
//     age: "24",
//     city: "Port-Harcourt"
// };
// for (const key in user) {
//     console.log(`The key is: ${key} and the value is: ${user[key]}`)
// }

// For of Loop
const iterable = [10, 20, 30]

for (const value of iterable) {
    console.log(value)
}







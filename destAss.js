// DESTRUCTURING ASSIGNMENT

// Destructuring an array

// let names = ["Oliver", "Ruth", "Casey"]
// let [firstname, name2, name3] = names

// console.log(firstname);
// console.log(name2);
// console.log(name3)

// let [ , , name3] = names
// console.log(name3)     //Geting a single value

// Using rest operator to get rest of the names
// let [name1, ...restOfNames] = names
// console.log(name1);
// console.log(restOfNames)


// Destructuring Objects
// let settings = { theme: "dark", fontSize: 20, fullscreen: true }

// let { theme, fontSize, fullscreen} = settings

// console.log(theme);
// console.log(fontSize);
// console.log(fullscreen)

//You can also use the rest of settings operator for Objects

//Destructuring a Funcion
function getUserInfo({name, age}) {
    console.log(name)
    console.log(age)
}

const user = {
    name: "Oliver",
    age: 24
}

getUserInfo(user)
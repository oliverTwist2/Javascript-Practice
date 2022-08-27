
const userDetails = {
    "oliver21" : {
        firstName: "Oliver",
        lastName: "Ikegah",
        email: "oliverikegah@gmail.com",
        accountActivated: true,
        password: "12345678"
    },
    "ruth21" : {
        firstName: "Ruth",
        lastName: "Ikegah",
        email: "ruthikegah@gmail.com",
        accountActivated: false,
        password: "12345678"
    },
    "kevin21" : {
        firstName: "Kevin",
        lastName: "Ikegah",
        email: "kevinikegah@gmail.com",
        accountActivated: true,
        password: "12345678"
    }

}

function displayUserDetails(){
    //Enter Username
        let username = prompt("Enter a username")
    while (validateUserName(username) == false) {
        username = prompt("User not found. Enter valid Username")
    }

    if (username == null) {
        return
    }

    //Enter Password
       let password = prompt("Enter your Password")
    while (validatePassword(password) == false) {
        password = prompt("Password Incorrect. Try again")
    }

    if (password == null) {
        return
    }

    //Confirm Password
       let passwordConfirm = prompt("Confirm Password")

    while (passwordConfirm !== password){
        passwordConfirm = prompt("Incorrect Password. Confirm Password again!")
    }

    if (passwordConfirm == null) {
        return
    }


    //Check user in the database
    const user = userDetails[username]


    if (user == undefined){
        alert("User not found")
        return
    }


    alert(`
      User found with the following details:
      First Name: ${user.firstName}
      Last Name: ${user.lastName}
      Email: ${user.email}
      Account Activated: ${user.accountActivated}
    `)

}


displayUserDetails()  // Takes us back
alert("The end. Have a nice day")




function validateUserName(username) {
    if (username == null){
        return true
    }

    if (username.length > 10) {
        return false
    } else {
        return true
    }
}


function validatePassword(password) {
    if (password == null){
        return true
    }

    if (password.length < 6) {
        return false
    } else {
        return true
    }
}


/* 
The users and todos variables have all the data for you to work with
Check your console to see the result of the following console.logs, 
and inspect the data
*/



// Create an alert that lists all users, with their ids, names and what city they're from

let message = ""
for ( const user of users) {
    message += 
    `Hello, ${user.name} with ${user.id} from ${user.address.city} !\n`
}
alert(message)

// Prompt the user for a user id
let id = Number(prompt("Add your user ID"));

// Display an alert with the username and all the todos titles that belong to that user 







// console.log("users:  ", window.users);

// console.log("todos: ", window.todos);
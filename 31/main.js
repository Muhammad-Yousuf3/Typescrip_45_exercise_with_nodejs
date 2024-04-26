"use strict";
var usernames = ['Ali', 'Ayan', 'Umer', 'Admin', 'Ahmed'];
usernames = [];
if (usernames.length === 0) {
    console.log("WE need to find some users!");
}
else {
    usernames.forEach(each_user => {
        if (each_user === "Admin") {
            console.log("Hello Admin, Would you like to see status report!");
        }
        else {
            console.log(`Hello ${each_user},Thank you for logging in again!`);
        }
    });
}

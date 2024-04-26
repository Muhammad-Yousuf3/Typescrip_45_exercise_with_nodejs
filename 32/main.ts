var current_Users = ['ali','Ahmed','Ayan','Umer','Saad'];
var new_Users= ['Ali','Bilal','Ahmed','Usman','Noor'];

new_Users.forEach(new_each_user =>{
    var our_Condition = current_Users.some (current_each_user => current_each_user.toLowerCase() === new_each_user.toLowerCase())
    if (our_Condition) {
        console.log(`Sorry ${new_each_user} is already taken`);
    }else {
        console.log(`The ${new_each_user} is available`);
    }
    }
)
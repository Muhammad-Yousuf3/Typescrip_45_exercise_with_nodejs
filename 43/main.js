"use strict";
function show_magicians(magicians) {
    magicians.forEach(magicians_name => console.log(magicians_name));
}
function make_great(magicians) {
    return magicians.map(name => `Great ${name}`);
}
let my_magicians = ['Harry Potter', 'Ainak wala jin', 'mera parosi'];
let copy_magicians = my_magicians.slice();
let copy_Greatmagicains = make_great(copy_magicians);
//original
show_magicians(my_magicians);
//copy
show_magicians(copy_Greatmagicains);

"use strict";
function show_magicians(magicians) {
    magicians.forEach(magicians_name => console.log(magicians_name));
}
function make_great(magicians) {
    return magicians.map(name => `Great ${name}`);
}
let my_magicians = ['Harry Potter', 'Ainak wala jin', 'mera parosi'];
let Great_magicians = make_great(my_magicians);
console.log(Great_magicians);

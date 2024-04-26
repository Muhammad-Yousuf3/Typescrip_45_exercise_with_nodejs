function show_magicians(magicians:string[]){
    magicians.forEach(magicians_name => console.log(magicians_name));
}

function make_great(magicians:string[]){
   return magicians.map(name => `Great ${name}`);
}


let my_magicians=['Harry Potter','Ainak wala jin','mera parosi'];

let copy_magicians=my_magicians.slice();

let copy_Greatmagicains=make_great(copy_magicians);
//original
show_magicians(my_magicians);
//copy
show_magicians(copy_Greatmagicains);
function myCar(manufacturer: string,model: string,...options: string[]){
    let car=
    {
        manufacturer:manufacturer,
        model:model,
    };
    options.forEach( option => {
        let [key, value]= option.split(":");
    });
    return car;

}

let supercar= myCar("Toyota","Supra","color:Red","year:2023","Rims:design");
console.log(supercar);
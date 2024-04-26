"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function myCar(manufacturer, model, ...options) {
    let car = {
        manufacturer: manufacturer,
        model: model,
    };
    options.forEach(option => {
        let [key, value] = option.split(":");
    });
    return car;
}
let supercar = myCar("Toyota", "Supra", "color:Red", "year:2023", "Rims:design");
console.log(supercar);

"use strict";
var potato = "potato";
var UpperCase_POTATO = "POTATO";
var ten = 10;
var one = 1;
var vegetables = ['potato', 'tomato', 'ladyfinger', 'brinjals'];
//Equality or UnEquality Test
console.log("Is potato === potato,True");
console.log(potato === "potato");
console.log("Is potato != 'potato', False");
console.log(potato != "potato");
//UPPERCASE,lowercase Test
console.log("Is POTATO == potato after converting to lowercase, True");
console.log(UpperCase_POTATO.toLowerCase() == "potato");
console.log("Is POTATO != potato after converting to lowercase, False");
console.log(UpperCase_POTATO.toLowerCase() != "potato");
//Numerical Tests
console.log("Is ten > one, True");
console.log(ten > one);
console.log("Is ten < one, False");
console.log(ten < one);
console.log("Is ten >= one, True");
console.log(ten >= one);
console.log("Is ten <= one, False");
console.log(ten <= one);
console.log("Is ten == one , False");
console.log(ten == one);
console.log("Is ten != one, True");
console.log(ten != one);
//AND && , OR||  Operators
// &&
console.log("Is ten > 1 && ten < 20 , True");
console.log(ten > one && ten < 20);
console.log("Is ten > 1 && ten >= 20 , False");
console.log(ten > one && ten >= 20);
// ||
console.log("Is ten > 1 || one > 5 True");
console.log(ten > one || one > 5);
console.log("Is ten < 1 || one > 5 True");
console.log(ten < one || one > 5);
//Checking item is included in array or not
console.log("Is tomato included in array , True");
console.log(vegetables.includes("tomato"));
console.log("Is tomato not included in array, False");
console.log(!vegetables.includes("tomato"));

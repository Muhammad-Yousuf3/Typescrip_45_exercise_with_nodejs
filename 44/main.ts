function makeSandwich(...ingridients:string[]){
    console.log("\nMaking a sandwich with these ingridients\n")
ingridients.forEach(eachIngridients => console.log(eachIngridients));
console.log("\nEnjoy Tasty Sandwich");
}
makeSandwich("Bread","Chicken","Cheese","Ketchup","Mayonise");
makeSandwich("Bread","Butter");
makeSandwich("Bread","Egg","Onion");
let numbers=[1,2,3,4,5,6,7,8,9];
for (let each_Number of numbers) {
    let ordinal_number: string;
    if (each_Number === 1) {
         ordinal_number="st"
    }
    else if (each_Number === 2) {
        ordinal_number="nd"
    } 
    else if(each_Number === 3){
        ordinal_number="rd"
    }
    else {
        ordinal_number="th"
    }
    console.log(`${each_Number}${ordinal_number}`);
}
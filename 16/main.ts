//guestlist for dinner
var guestList=['Ali','Zahab','Umer','Ayan'];
//guest 0 is not coming
var notComing=guestList[0];
//printing a message
console.log(notComing,"is busy so he could not join us.");
//adding a one more guest 
guestList.splice(0,1,"Bilal");
//printing a message 
console.log("Good news! We have found a bigger table for dinner Boys");
//Adding a guest on starting of an array
guestList.unshift("Usman");
//Adding a guest on ending of an array
guestList.push("Kashan");
//getting a middle index for an guest to add in array
var middleindex:number=Math.floor(guestList.length/2);
//Adding a guest in middle of an array
guestList.splice(middleindex,0,"Zain");
//Printing a message for each guest in array to Join on dinner.
guestList.forEach(guest => console.log("AssalamuAlaikum",`${guest}`,",BeReady ingame friends on dinner."));

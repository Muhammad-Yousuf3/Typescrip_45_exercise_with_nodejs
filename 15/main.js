"use strict";
var guestList = ['Ali', 'Zahab', 'Umer', 'Ayan'];
var notComing = guestList[0];
console.log(notComing, "is busy so he could not join us.");
guestList.splice(0, 1, "Bilal");
guestList.forEach(guest => console.log("AssalamuAlaikum", `${guest}`, ",BeReady for reunion on dinner Boys."));

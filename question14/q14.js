/*Guest List: If you could invite anyone, living or deceased, to dinner, who would you
invite? Make a list that includes at least three people you’d like to invite to dinner.
Then use your list to print a message to each person, inviting them to dinner. */
//making a list that store the element
var GuestList = ["Basir", "Zunair", "Hammid"];
//message for inviting each guest
var InviteMessage = "We'd be honored by your presence at dinner! Join us for a memorable celebration.";
for (var _i = 0, GuestList_1 = GuestList; _i < GuestList_1.length; _i++) {
    GuestLists = GuestList_1[_i];
    console.log("\nDear ".concat(GuestLists, " , ").concat(InviteMessage));
}
//print the name of the element present at the list by add the invite message
// console.log(`\nDear ${GuestList[0]} , ${InviteMessage}`)
// console.log(`\nDear ${GuestList[1]} , ${InviteMessage}`)
// console.log(`\nDear ${GuestList[2]} , ${InviteMessage}`)

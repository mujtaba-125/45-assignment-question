/*Shrinking Guest List: You just found out that your new dinner table won’t arrive in
time for the dinner, and you have space for only two guests.

a) Start with your program from Exercise 16. Add a new line that prints a message saying
that you can invite only two people for dinner.

b) Remove guests from your list one at a time until only two names remain in your list.Each
 time you pop a name from your list, print a message to that person letting them know you’re
 sorry you can’t invite them to dinner.

c) Print a message to each of the two people still on your list, letting them know they’re
 still invited.

d) Remove the last two names from your list, so you have an empty list. Print your list to
make sure you actually have an empty list at the end of your program*/
//making a list that store the element
var GuestList = ["Basir", "Zunair", "Hammid"];
//message for inviting each guest
var InviteMessage = "We'd be honored by your presence at dinner! Join us for a memorable celebration.";
//print the name of the element present at the list by add the invite message
console.log("Dear ".concat(GuestList[0], " , ").concat(InviteMessage));
console.log("Dear ".concat(GuestList[1], " , ").concat(InviteMessage));
console.log("Dear ".concat(GuestList[2], " , ").concat(InviteMessage));
/*statement at the end of the question14 program stating the name of the guest who
can’t make it.*/
console.log("\n" + GuestList[1] + " can't make it due to his health issues.");
//adding the name of the new guest and replace from the person who can't make it 
console.log("\nIn replace of " + GuestList[1] + " the newly guest has been invited in a list");
GuestList[1] = "Rajab";
console.log(GuestList);
//Print a second set of invitation messages, one for each person who is still in your list
console.log("\nDear ".concat(GuestList[0], " , ").concat(InviteMessage));
console.log("Dear ".concat(GuestList[1], " , ").concat(InviteMessage));
console.log("Dear ".concat(GuestList[2], " , ").concat(InviteMessage));
/* a)  Add a new line that prints a message saying that you can invite only two people for
 dinner.*/
console.log("\nDue to some lack of arrangement, I just only invite two people ");
/* b) Remove guests from your list one at a time until only two names remain in your list.Each
 time you pop a name from your list, print a message to that person letting them know you’re
 sorry you can’t invite them to dinner.*/
var Remove_Guest = GuestList.pop();
console.log(Remove_Guest + " sorry, you can’t invite for dinner.");
/*c) Print a message to each of the two people still on your list, letting them know they’re
 still invited. */
//create new message the guest ehich are still invited 
var message1 = "your are stil invited";
//print the name of the person which are still invited for dinner 
console.log("\nDear ".concat(GuestList[0], " ,").concat(message1, " ").concat(InviteMessage));
console.log("Dear ".concat(GuestList[1], " ,").concat(message1, " ").concat(InviteMessage));
/*d) Remove the last two names from your list, so you have an empty list. Print your list to
make sure you actually have an empty list at the end of your program*/
var Removing_secondlast_person = GuestList.pop();
var Removing_last_person = GuestList.pop();
//print the list of the guest
console.log(GuestList);

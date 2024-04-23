/*Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great()
with a copy of the array of magicians’ names. Because the original array will be unchanged,
return the new array and store it in a separate array. Call show_magicians() with each array
to show that you have one array of the original names and one array with the Great added to
each magician’s name*/
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//create a function and passing the parameter using the foreach loop call back the function
function show_magicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
//create another function named as the greet_function
function make_great(magicians) {
    return magicians.map(function (magician) { return "The great ".concat(magician); });
}
//creating an array
var magician_name = ["Jhon", "Michael", "Zampa", "christ"];
//function call (show_magician)
show_magicians(magician_name);
console.log("\tPrint the name of the magicains with (the great) ");
//create copy of an array bu using the spread operator that prints the "The great" 
var copyOfmagician = make_great(__spreadArray([], magician_name, true));
//function call (show_magician)
show_magicians(copyOfmagician);

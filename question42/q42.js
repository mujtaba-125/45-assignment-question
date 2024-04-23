/*Great Magicians: Start with a copy of your program from Exercise 39.
Write a function called make_great() that modifies the array of magicians
by adding the phrase the Great to each magician’s name. Call show_magicians()
to see that the list has actually been modified */
//create a function and passing the parameter using the foreach loop call back the function
function show_magicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
function make_great(magicians) {
    return magicians.map(function (magician) { return "The great ".concat(magician); });
}
//creating an array
var magician_name = make_great(["Jhon", "Michael", "Zampa", "christ"]);
//function call 
show_magicians(magician_name);

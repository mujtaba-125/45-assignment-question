/*Magicians: Make a array of magician’s names. Pass the array to a function called
show_magicians(), which prints the name of each magician in the array.*/
//create a function and passing the parameter using the foreach loop call back the function
function show_magicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician); //print each element
    });
}
//creating an array
var magician_name = ["Jhon", "Michael", "Zampa", "christ"];
//function call 
show_magicians(magician_name);

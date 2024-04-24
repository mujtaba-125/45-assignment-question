/*Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.
The function should have one parameter that collects as many items as the function call
provides, and it should print a summary of the sandwich that is being ordered. Call the
function three times, using a different number of arguments each time.*/
//create a function named as the Sandwiches 
function Sandwiches() {
    var collect_toppings = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        collect_toppings[_i] = arguments[_i];
    }
    console.log("\nThe toppings for the person that ordered is : "); //print the simple statement every time the ordered is placed according to the toppings
    collect_toppings.forEach(function (collect_topping) {
        //print the summary of the ordered 
        return console.log(collect_topping);
    });
}
//calling the function 
//calling the funcion first time
Sandwiches("mayoniese", "ketchup", "chuttni", "fries");
//calling the funcion second time
Sandwiches("Tomato", "onion", "mustard");
//callin the funciton third time
Sandwiches("grill", "butter", "olives");

/*City Names: Write a function called city_country() that takes in the name of
 a city and its country. The function should return a string formatted like this:

"Lahore, Pakistan"

Call your function with at least three city-country pairs, and print the value
that’s returned.*/
//making a function named as describe function
function city_country(city, country) {
    //store the first value in the variable
    var nameOfCity = city;
    //store the second value in the variale
    var nameOfCountry = country;
    //store the both value in the one variable
    var statement = "\"".concat(nameOfCity, " , ").concat(nameOfCountry, "\"");
    // return the value
    return statement;
}
//calling the function 
var value1 = city_country("Lahore", "Pakistan");
console.log(value1);
//calling the function 
var value2 = city_country("Paris", "France");
console.log(value2);
//calling the function 
var value3 = city_country("Washington DC", "America");
console.log(value3);

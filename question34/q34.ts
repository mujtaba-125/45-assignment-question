/*Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a 
array, and then use a for loop to print the name of each pizza.

• Modify your for loop to print a sentence using the name of the pizza instead of printing
 just the name of the pizza. For each pizza you should have one line of output containing a 
 simple statement like I like pepperoni pizza.

• Add a line at the end of your program, outside the for loop, that states how much you like 
pizza. The output should consist of three or more lines about the kinds of pizza you like and 
then an additional sentence, such as I really love pizza!*/

// creating a list of the pizzas and store in the array 
let pizzas:string[]=["chicken","fajita","tikka","chessey","peparoni"]

//using for loop to print the each of the pizza in an array 
for(let pizza of pizzas){
    console.log(`I like ${pizza} pizza`)//modify the loop by adding the lines of statement
}
//add the statement outside of the program that represent how much I like the pizza
console.log("I really love pizza such as these flavor \n"+`\t ${pizzas} `+ "\nI mentioned these flavor and one of my favourite in the above list I mentioned it's "+pizzas[3]+" flavor")

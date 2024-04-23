/*Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() 
with a copy of the array of magicians’ names. Because the original array will be unchanged, 
return the new array and store it in a separate array. Call show_magicians() with each array 
to show that you have one array of the original names and one array with the Great added to 
each magician’s name*/

//create a function and passing the parameter using the foreach loop call back the function

function show_magicians(magicians:string[]):void{
    magicians.forEach(magician => {//using the foreach loop array and call back the function
      console.log(magician)
    });
  }


//create another function named as the greet_function

function make_great(magicians: string[]): string[] {
  return magicians.map(magician => `The great ${magician}`);
}


//creating an array
let magician_name= ["Jhon","Michael","Zampa","christ"]

//function call (show_magician)
show_magicians(magician_name)

console.log("\tPrint the name of the magicains with (the great) ")


//create copy of an array by using the spread operator that prints the "The great" with each element of an array
let copyOfmagician:string[]=make_great([...magician_name])

//function call (show_magician)
show_magicians(copyOfmagician)
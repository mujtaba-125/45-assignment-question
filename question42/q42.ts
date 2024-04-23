/*Great Magicians: Start with a copy of your program from Exercise 39.
Write a function called make_great() that modifies the array of magicians
by adding the phrase the Great to each magician’s name. Call show_magicians() 
to see that the list has actually been modified */

//create a function and passing the parameter using the foreach loop call back the function
function show_magicians(magicians:string[]):void{
     magicians.forEach(magician => {//using the foreach loop array and call back the function    
          console.log(magician)
     });
   }
//creating another function named as the make_great   
function make_great(magicians:string[]):string[]{
     return magicians.map(magician=>`The great ${magician}`)//map function return the each value
}   

//creating an array named as magician name
let magician_name:string[]=make_great(["Jhon","Michael","Zampa","christ"])
//function call 
show_magicians(magician_name)


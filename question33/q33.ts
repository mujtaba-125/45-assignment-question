/*Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd.
 Most ordinal numbers end in th, except 1, 2, and 3.
• Store the numbers 1 through 9 in a array.

• Loop through the array.

• Use an if-else chain inside the loop to print the proper ordinal ending for each number.
 Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on 
 a separate line. */

//store the numbers 1 through 9 in a array 
let ordinal_number:number[]=[1,2,3,4,5,6,7,8,9];

//loop all the numbers present in the list
for(let number of ordinal_number){
    if(number ===1 ){//condition of 1
        console.log(number+"st")
    }else if(number===2){//condition of 2
        console.log(number+"nd")
    }else if(number===3){//condition of 3
        console.log(number+"rd")
    }else{//other number condition 
        console.log(number+"th")
    }
}
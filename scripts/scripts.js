// Takes one parameter as a radius with a circle
let user_input = prompt("Enter the radius of a circle");

// This is the function that does the calculation
function circle_area(radius){
    let area = Math.PI * radius ** 2
    return area
}

// Remember to put in a variable your outcome to be used later.
let result = circle_area(user_input) 

// Requested outcome from Neda. 
alert(`The area of a circle with radius ${user_input} is ${result}.`)


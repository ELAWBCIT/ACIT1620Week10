// let user_input = prompt("Hello! Please Enter Your Name");

// function welcome(name, time = "day") {
//     alert(`Good ${time} ${name}`);
//     console.log(`Good ${time} ${name}!`);
//     }

// welcome(user_input)

// let welcome = (name) => { 
//     alert(`Welcome ${name}`);
//     console.log(`Welcome ${name}!`);
// }

// welcome(user_input)

// const welcome = function(name) {
//     alert(`Welcome ${name}`);
//     console.log(`Welcome ${name}!`);
// }

// welcome("Neda")
// welcome("Neda", "Evening");

let user_input

do {
    user =  prompt("Please enter a radius");
}while(isNaN(user) === true)
    function CircleArea(radius) {
        area = Math.PI * radius ** 2
        console.log(`The area of the circle is ${area}`)
        alert(`The area of the circle is ${area}`) 
    }
    CircleArea(user)
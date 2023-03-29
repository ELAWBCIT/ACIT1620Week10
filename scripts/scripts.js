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

// let user_input = prompt("Please enter a radius") 

// do {
//     user =  prompt("Please enter a radius");
// }while(isNaN(user) === true)
//     function CircleArea(radius) {
//         area = Math.PI * radius ** 2
//         console.log(`The area of the circle is ${area}`)
//         alert(`The area of the circle is ${area}`) 
//     }
//     CircleArea(user)

//==============================================================================

// const radiusPara = document.querySelector('#radius');
// console.log(radiusPara);
// const resultPara = document.querySelector('#result');
// console.log(resultPara);

// let user_input = prompt("Please enter a radius") 
// update the text of the radiuspara
    // radiusPara.textContent += user_input
// prompt always returns a string

// function CircleArea(radius) {
//     if (isNaN(radius)) {
//         alert("This is not a number");
//         // replace alert with updating text of resultPara 
//         resultPara.textContent = "Sike DAS the WRONG NUMBAH"
//     }
//     else {
//         area = Math.PI * radius ** 2
//         // console.log(`The area of the circle is ${area}`)
//         // alert(`The area of the circle is ${area}`)
//         resultPara.textContent = area
//         return area
//     }
// }

// let result = CircleArea(user_input)
// if(result !== undefined){
//     alert(`The area of a circle for radius ${user_input} is ${result.toFixed(2)}.`); 
// }

// Bottom if statement is if the number that is taken from user input is undefined
// We are not going to use it in the alert as then it will give us an error. 

//==============================================================================

function populateList(shoppingList) {
// 1. Select and store a reference to the ul --> query selector.
const ulList = document.querySelector('.shopping');
console.log(ulList) 
// 2. Loop through the shopping list (for loop)
for (let item of shoppingList) {
//      3. Create an li --> createElement 
    const newli = document.createElement('li');
//      4. Append the li to the ul --> parent.appendChild(child)
    ulList.appendChild(newli);
//      5. update the textContent of the li with array item  
    newli.textContent = item
}
}

let myList = ['bread', 'cheese', 'green pepper']
populateList(myList);

function squareListMaker() {
    const ulList = document.querySelector('.shopping');
    //remove circleList class on ulList
    ulList.classList.remove('circleList');
    //add squareList class on ulList 
    ulList.classList.add('squareList');
}

squareListMaker();
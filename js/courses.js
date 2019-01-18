'use strict';

// let items = document.getElementsByClassName('item');
// console.log(items);
let cart = [
    // { name: name, price: price,},
    // { name: name, price: price,},
    // { name: name, price: price,},
    // { name: name, price: price,},
    // { name: name, price: price,},
    // { name: name, price: price,},
];

//adding total cost in cart
var cartTotal =0;


function getTotal(cost){
    var totalAmount = document.getElementById('cartTotalAmount')
    totalAmount.innerHTML = "";

    cartTotal= cartTotal += cost;
    totalAmount.append(cartTotal);

    

    // totalAmount.append()
}

function reduceTotal(cost){
    var totalAmount = document.getElementById('cartTotalAmount')
    totalAmount.innerHTML = "";

    cartTotal= cartTotal -= cost;
    totalAmount.append(cartTotal);
}

var counter=0;
function myFun(){
let courseId1= document.getElementById('course1')
addCart(course1.name,' '+'R'+ course1.price, courseId1, 0);
getTotal(course1.price);
counter++;
};

function myFun1(){
    let courseId2= document.getElementById('course2')
    addCart(course2.name,' '+'R'+ course2.price, courseId2, 1);
    getTotal(course2.price)
counter++;    
    
};

function myFun2(){
    let courseId3= document.getElementById('course3')
    addCart(course3.name,' '+'R'+ course3.price, courseId3, 2);
getTotal(course3.price);
    
counter++;
};

///////////////////////////course list///////////////////////////////////////
let course1 = { name : "Create with Code Series", price: 1800, };

let course2 = { name : "Tech Innovations Level 1", price: 4200, };

let course3 = { name : "Tech Innovations Level 2", price: 5600, };

let course4 = { name : "Intro to Coding : Web Pages", price: 250, };

let course5 = { name : "Intro to Coding : Music", price: 250, };

let course6 = { name : "Intro to Coding : Animations", price: 250, };

let course7 = { name : "Create with Code : Web Pages", price: 960, };

let course8 = { name : "Create with Code : Music", price: 960, };

let course9 = { name : "Create with Code : Animations", price: 960, };

let course10 = { name : "Getting Started as a Developer", price: 250, };

let course11 = { name : "Beginner JavaScript", price: 1800, };

let course12 = { name : "Beginner Front End Web Development", price: 1800, };

let course13 = { name : "Beginner Python", price: 1800, };

let course14 = { name : "Full Stack JavaScript", price: 1800, };

let course15 = { name : "Website Deployment", price: 1200, };

let course16 = { name : "Innovation Challenge", price: 750, };

let course17 = { name : "CodeStorm", price: 1500, };

let course18 = { name : "Industry Immersion", price: 1500, };

let course19 = { name : "Code Conversation", price: 300, };

let course20 = { name : "Presentation Skills", price: 300, };

let course21 = { name : "CV & LinkedIns", price: 300, };
    
let course22 = { name : "Networking", price: 300, };

let course23 = { name : "Digital Communication Skills", price: 300, };

let course24 = { name : "Applying to Tertiary Studies", price: 300, };
///////////////////////////////////////////end of course list////////////////////////////////////////

function addCart(name, price, courseId, value) {
    
    //create item
    let item = {
        name: name,
        price: price,
    };

    //check if array empty
    if (cart.length != 0) {
        //search an item in an array
        let check = false;
        for (let cartItem in cart) {
            if (cart[cartItem].name === item.name) {
                check = true;
            }
        }

        //if check returns false,  item was not found in the array.
        if (!check) { 
            cart.push(item) 
        }

        //else push to array
    } else {
        cart.push(item);
    }

    //get cart div
    let div = courseId;
    //clear cart
    div.innerHTML = "";
    
    console.log(item);

    //show cart with updated array
   
    // Create a <li> node
        let node = document.createElement("li");
        // document.getElementsByTagName('li').id = 'newId'

        // Create a text node               
        let textnode = document.createTextNode(cart[value].name);
        let textnode1 = document.createTextNode(cart[value].price);


        // Append the text to <li>
        node.appendChild(textnode);
        node.appendChild(textnode1);


        // Append <li> to <ul> with id="myList"                             
        div.appendChild(node);
    }
/////////////////////////removing Item from cart//////////////////////////////

function myFunction(){
    let list = document.getElementById("course1");
    list.removeChild(list.childNodes[0]);
reduceTotal(course1.price);

}

function myFunction1(){
    let list = document.getElementById("course2");
    list.removeChild(list.childNodes[0]);
reduceTotal(course2.price);

}

function myFunction2(){
    let list = document.getElementById("course3");
    list.removeChild(list.childNodes[0]);
reduceTotal(course3.price);

}
//STILL TO DO
//remove an item from cart
//write a function that calculates the total of the cart
//add a quantity to cart items
//be able to increase and decrease the quantity 
//REMEMBER the cart total must update as the quantity changes
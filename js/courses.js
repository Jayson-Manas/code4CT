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

////////////////adding total cost and count in cart/////////////////////
var cartTotal =0;
var  cartCount =0;

function getTotal(cost){
    var totalAmount = document.getElementById('cartTotalAmount')
    var totalCount = document.getElementById('cartCount');
    totalAmount.innerHTML = "";
    totalCount.innerHTML = "";
    
    cartCount = cartCount+=1;
    totalCount.append(cartCount);

    cartTotal= cartTotal += cost;
    totalAmount.append(cartTotal);
    
}
//////////////////////reduce cost and count in cart//////////////////////
function reduceTotal(cost){
    var totalAmount = document.getElementById('cartTotalAmount')
    var totalCount = document.getElementById('cartCount');

    totalAmount.innerHTML = "";
    totalCount.innerHTML = "";

    cartCount = cartCount-=1;
    totalCount.append(cartCount);

    cartTotal= cartTotal -= cost;
    totalAmount.append(cartTotal);
}
////////////////////////////adding value to cart/////////////////////
var counter=0;
function myFun(){
let courseId1= document.getElementById('course1')
addCart(course1.name,' '+'R'+ course1.price, courseId1, 0);
getTotal(course1.price);

};

function myFun1(){
    let courseId2= document.getElementById('course2')
    addCart(course2.name,' '+'R'+ course2.price, courseId2, 1);
    getTotal(course2.price)
    
    
};

function myFun2(){
    let courseId3= document.getElementById('course3')
    addCart(course3.name,' '+'R'+ course3.price, courseId3, 2);
getTotal(course3.price);
    

};

function myFun3(){
    let courseId4= document.getElementById('course4')
    addCart(course4.name,' '+'R'+ course4.price, courseId4, 3);
getTotal(course4.price);
    

};

function myFun4(){
    let courseId5= document.getElementById('course5')
    addCart(course5.name,' '+'R'+ course5.price, courseId5, 4);
getTotal(course3.price);
    

};

function myFun5(){
    let courseId6= document.getElementById('course6')
    addCart(course6.name,' '+'R'+ course6.price, courseId6, 5);
getTotal(course6.price);
    

};
function myFun6(){
    let courseId7= document.getElementById('course7')
    addCart(course7.name,' '+'R'+ course7.price, courseId7, 6);
getTotal(course7.price);
    

};
function myFun7(){
    let courseId8= document.getElementById('course8')
    addCart(course8.name,' '+'R'+ course8.price, courseId8, 7);
getTotal(course8.price);
    

};
function myFun8(){
    let courseId9= document.getElementById('course9')
    addCart(course9.name,' '+'R'+ course9.price, courseId9, 8);
getTotal(course9.price);
    

};
function myFun9(){
    let courseId10= document.getElementById('course10')
    addCart(course10.name,' '+'R'+ course10.price, courseId10, 9);
getTotal(course10.price);
    

};
function myFun10(){
    let courseId11= document.getElementById('course11')
    addCart(course11.name,' '+'R'+ course11.price, courseId11, 10);
getTotal(course11.price);
    

};
function myFun11(){
    let courseId12= document.getElementById('course12')
    addCart(course12.name,' '+'R'+ course12.price, courseId12, 11);
getTotal(course12.price);
    

};
function myFun12(){
    let courseId13= document.getElementById('course13')
    addCart(course13.name,' '+'R'+ course13.price, courseId13, 12);
getTotal(course13.price);
    

};
function myFun13(){
    let courseId14= document.getElementById('course14')
    addCart(course14.name,' '+'R'+ course14.price, courseId14, 13);
getTotal(course14.price);
    

};
function myFun14(){
    let courseId15= document.getElementById('course15')
    addCart(course15.name,' '+'R'+ course15.price, courseId15, 14);
getTotal(course15.price);
    

};
function myFun15(){
    let courseId16= document.getElementById('course16')
    addCart(course16.name,' '+'R'+ course16.price, courseId16, 15);
getTotal(course16.price);
    

};
function myFun16(){
    let courseId17= document.getElementById('course17')
    addCart(course17.name,' '+'R'+ course17.price, courseId17, 16);
getTotal(course17.price);
    

};
function myFun17(){
    let courseId18= document.getElementById('course18')
    addCart(course18.name,' '+'R'+ course18.price, courseId18, 17);
getTotal(course18.price);
    

};
function myFun18(){
    let courseId19= document.getElementById('course19')
    addCart(course19.name,' '+'R'+ course19.price, courseId19, 18);
getTotal(course19.price);
    

};
function myFun19(){
    let courseId20= document.getElementById('course20')
    addCart(course20.name,' '+'R'+ course20.price, courseId20, 19);
getTotal(course20.price);
    

};
function myFun20(){
    let courseId21= document.getElementById('course21')
    addCart(course21.name,' '+'R'+ course21.price, courseId21, 20);
getTotal(course21.price);
    

};
function myFun21(){
    let courseId22= document.getElementById('course22')
    addCart(course22.name,' '+'R'+ course22.price, courseId22, 21);
getTotal(course22.price);
    

};
function myFun22(){
    let courseId23= document.getElementById('course23')
    addCart(course23.name,' '+'R'+ course23.price, courseId23, 22);
getTotal(course23.price);
    

};
function myFun23(){
    let courseId24= document.getElementById('course24')
    addCart(course24.name,' '+'R'+ course24.price, courseId24, 23);
getTotal(course24.price);
    


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
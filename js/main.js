'use strict'
// ====================counter=======================
var timeLeftForCoffee=0;
var timeLeftForGirls=280;
var timeLeftForProjects=2680;
var timeLeftForHours=8265;

var cupsOfCoffee=document.getElementById("cupsOfCoffee");
var girls=document.getElementById("girls");
var projects=document.getElementById("projects");
var hoursCoding=document.getElementById("hoursCoding");

var timer=setInterval(function(){
cupsOfCoffee.innerHTML=timeLeftForCoffee;
girls.innerHTML=timeLeftForGirls;
projects.innerHTML=timeLeftForProjects;
hoursCoding.innerHTML=timeLeftForHours;

if (timeLeftForCoffee===3000) {
clearInterval(timer);
cupsOfCoffee.innerHTML="3000+";
girls.innerHTML="780+";
projects.innerHTML="3120+";
hoursCoding.innerHTML="8765+";
}
timeLeftForGirls++;
timeLeftForCoffee+=10;
timeLeftForProjects++;
timeLeftForHours++;
},
1);


// ===============scroll back to top button=======================
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
// ===============scroll back to top button=======================


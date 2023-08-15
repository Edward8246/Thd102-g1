
//關視窗
// document.getElementById("loginbutton2").addEventListener("click", function(){
//     document.querySelector(".poppup").style.display = "flex";
// })

// document.querySelector(".close-btn").addEventListener("click", function(){
// 	document.querySelector(".loginPage").style.display = "none";
// })


const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const goBackButton = document.getElementById('goBack');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	document.getElementById("sign-in-container").style.display = "block";
	
	container.classList.remove("right-panel-active");
});

goBackButton.addEventListener('click', () => {
	document.getElementById("sign-in-container").style.display = "block";
});




///RDW

document.addEventListener("DOMContentLoaded", function() {
    const signUpLink = document.getElementById("sigup-link");
    const signInContainer = document.getElementById("sign-in-container");

    signUpLink.addEventListener("click", function() {
        
    });
});

// 關視窗
document.getElementById("user").addEventListener("click", function(){
    document.querySelector(".loginPage").style.display = "flex";
})

document.querySelector(".close-btn").addEventListener("click", function(){
	document.querySelector(".loginPage").style.display = "none";
})


const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	document.getElementById("sign-in-container").style.display = "block";
	
	container.classList.remove("right-panel-active");
});

///RDW

document.addEventListener("DOMContentLoaded", function() {
    const signUpLink = document.getElementById("sigup-link");
    const signInContainer = document.getElementById("sign-in-container");

    signUpLink.addEventListener("click", function() {
    signInContainer.style.display = "none";
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const loginLink = document.getElementById("login-link");
    const signInContainer = document.getElementById("sign-in-container");

    loginLink.addEventListener("click", function() {
    signInContainer.style.display = "block";
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const forgotPwBtn = document.getElementById("forgot_password");
    forgotPwBtn.addEventListener("click", function() {
    container.style.display = "none";
    
    const forgotPwForm = document.getElementById("container-forgot");
    forgotPwForm.style.display = "block";
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const cancelBtn = document.getElementById("cancel-button");
    cancelBtn.addEventListener("click", function() {
    const forgotPwForm = document.getElementById("container-forgot");
    forgotPwForm.style.display = "none";
    
    container.style.display = "block";
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const confirmBtn = document.getElementById("confirm-button");
    confirmBtn.addEventListener("click", function() {
    const forgotPwForm = document.getElementById("container-forgot");
    forgotPwForm.style.display = "none";
    
    const successPw = document.getElementById("successPw");
    successPw.style.display = "block";
    });
});
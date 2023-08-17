//點擊登入鍵跳出LOGIN
document.getElementById("user").addEventListener("click", function(){
    document.querySelector(".loginPage").style.display = "flex";
    //修改密碼成功畫面關閉
    const successPw = document.getElementById("successPw");
    successPw.style.display = "none";
})

//登入畫面的X關掉鍵
document.querySelector(".close-btn").addEventListener("click", function(){
	document.querySelector(".loginPage").style.display = "none";
    //如在註冊畫面關掉,再開啟會在登入畫面
    document.getElementById("sign-in-container").style.display = "block";
	container.classList.remove("right-panel-active");
})



//登入和註冊畫面左右切換
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


//RWD的登入畫面 > 立即註冊鍵切換
document.addEventListener("DOMContentLoaded", function() {
    const signUpLink = document.getElementById("sigup-link");
    const signInContainer = document.getElementById("sign-in-container");

    signUpLink.addEventListener("click", function() {
    signInContainer.style.display = "none";
    });
});

//RWD的註冊畫面 > 立即登入鍵切換
document.addEventListener("DOMContentLoaded", function() {
    const loginLink = document.getElementById("login-link");
    const signInContainer = document.getElementById("sign-in-container");

    loginLink.addEventListener("click", function() {
    signInContainer.style.display = "block";
    });
});

//點忘記密碼的 登入NONE 忘記密碼開啟
document.addEventListener("DOMContentLoaded", function() {
    const forgotPwBtn = document.getElementById("forgot_password");
    forgotPwBtn.addEventListener("click", function() {
    container.style.display = "none";
    
    const forgotPwForm = document.getElementById("container-forgot");
    forgotPwForm.style.display = "block";
    });
});

//忘記密碼>取消>跳回登入畫面
document.addEventListener("DOMContentLoaded", function() {
    const cancelBtn = document.getElementById("cancel-button");
    cancelBtn.addEventListener("click", function() {
    const forgotPwForm = document.getElementById("container-forgot");
    forgotPwForm.style.display = "none";
    container.style.display = "block";
    
    });
});
//忘記密碼> 成功> 成功畫面
document.addEventListener("DOMContentLoaded", function() {
    const confirmBtn = document.getElementById("confirm-button");
    confirmBtn.addEventListener("click", function() {
    const forgotPwForm = document.getElementById("container-forgot");
    forgotPwForm.style.display = "none";
    
    const successPw = document.getElementById("successPw");
    successPw.style.display = "block";
    
    });
});


// 忘記密碼成功送出
document.addEventListener("DOMContentLoaded", function() {
    let successBtn = document.getElementById("success-button");
    successBtn.addEventListener("click", function() {
    
    let loginPage = document.getElementById("loginPage");
    container.style.display = "block";
    loginPage.style.display = "none";

    });
});
function close_window(){
    document.querySelector(".loginPage").style.display = "none";
    //如在註冊畫面關掉,再開啟會在登入畫面
    document.getElementById("sign-in-container").style.display = "block";
	container.classList.remove("right-panel-active");
}

//點擊登入鍵跳出LOGIN
document.getElementById("user_login").addEventListener("click", function(){
    document.querySelector(".loginPage").style.display = "flex";
    //修改密碼成功畫面關閉
    const successPw = document.getElementById("successPw");
    successPw.style.display = "none";
})

//登入畫面的X關掉鍵
document.querySelector(".close-btn").addEventListener("click", function(){
	close_window();
})
//按下esc觸發關閉
document.addEventListener("keydown", function(e) {
    if (e.key === "Escape") {
        close_window();
    }
})
// document.getElementById("loginPage").addEventListener("click",function(){
//     close_window();
// })



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

//登入成功畫面 > 點選按鈕 回首頁 or 會員中心
document.addEventListener("DOMContentLoaded", function() {
    let member_button = document.getElementById("member-button");
    let home_button = document.getElementById("home-button");

    //按鈕登出鍵
    function btn_logout(){
        let user_login = document.getElementById("user_login"); 
        let user_logout = document.getElementById("user_logout"); 
        user_logout.classList.remove("-none");
        user_login.classList.add("-none");
    }

    member_button.addEventListener("click",function(e){
        e.preventDefault(); // 取消預設事件 test用後續要修改
        btn_logout();
    })
    home_button.addEventListener("click",function(e){
        e.preventDefault(); // 取消預設事件 test用後續要修改
        btn_logout();
    })

});


document.addEventListener("DOMContentLoaded", function () {
    const loginPage = document.getElementById("loginPage");
    const container = document.getElementById("container");
    const signUpContainer = document.getElementById("sign-up-container");
    const signInContainer = document.getElementById("sign-in-container");
    
    loginPage.addEventListener("click", function (event) {
        if (event.target === loginPage) {
            container.classList.remove("active");
            signUpContainer.classList.remove("active");
            signInContainer.classList.remove("active");
        }
    });
});
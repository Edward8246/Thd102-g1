//關閉視窗
function close_window(){
    document.querySelector(".loginPage").style.display = "none";
    //如在註冊畫面關掉,再開啟會在登入畫面
    document.getElementById("sign-in-container").style.display = "block";
	container.classList.remove("right-panel-active");
}

//------------------------------------------------
//註冊功能
let doSubmit_signUp_el=document.getElementById("doSubmit_signUp");
doSubmit_signUp_el.addEventListener("click",function(e){
    e.preventDefault(); //取消預設送出事件
    doSubmit_signUp();
})

function doSubmit_signUp(){
    let signUp_name_el = document.getElementById("signUp_name").value; //姓名
    let signUp_email_el = document.getElementById("signUp_email").value; //email
    let signUp_password_el = document.getElementById("signUp_password").value; //密碼
    let signUp_password_2_el = document.getElementById("signUp_password_2").value; //確認密碼
    // console.log(signUp_name_el);
    // console.log(signUp_email_el);
    // console.log(signUp_password_el);
    // console.log(signUp_password_2_el);
}


// //======================================================

//點擊登入鍵跳出LOGIN
document.getElementById("user_login").addEventListener("click", function(){
    document.querySelector(".loginPage").style.display = "flex";
    document.body.classList.add("no-scroll");
    //修改密碼成功畫面關閉
    const successPw = document.getElementById("successPw");
    successPw.style.display = "none";
})

//登入畫面的X關掉鍵
document.querySelector(".close-btn").addEventListener("click", function(){
    document.body.classList.remove("no-scroll");
	close_window();
})
//按下esc觸發關閉
document.addEventListener("keydown", function(e) {
    if (e.key === "Escape") {
        document.body.classList.remove("no-scroll");
        close_window();
    }
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


//密碼一致
$(document).ready(function() {

    $("#signUp_password_2").blur(function() {
        validatePasswordsMatch();
    });
});

//驗證密碼是否一致
function validatePasswordsMatch() {
    var password1 = $("#signUp_password").val();
    var password2 = $("#signUp_password_2").val();

    if (password1 !== password2) {
        $("#password-mismatch").text("密碼不一致").css("color", "red");
        $("#signUp_password").css('border','1px solid red');
        $("#signUp_password_2").css('border','1px solid red');
    } else {
    $("#signUp_password").css('border','none');
    $("#signUp_password_2").css('border','none');
    $("#password-mismatch").text(""); // 清除提示信息
    }
}
//=============================================================
//login_top資料
    function init(){
        showMember();
        }
        
        function showMember(){
            $.ajax({            
                method: "POST",
                url: "/thd102/g1/API/Frontend/Member.php",
                data:{},            
                dataType: "text",
                success: function (response) { 
                    //   const r = JSON.parse(response) 

                    // console.log(response.login);
                    
        
                    //   $("#showMember").html(r.text); 
  
            if(response == true){
                
                $("#showMember").html(
                    "<a href='API/Frontend/Logout.php'>" +
                    "<div class='btn_white user logout -none' id='user_logout'>" +
                    "<i class='fa-solid fa-arrow-right-from-bracket'></i>" +
                    "<span>登出</span>" +
                    "</div>" +
                    "</a>"
                )

                $('#memberCenter').show();
            }else{
                $("#showMember").html(
                    "<div class='btn_white user login -none' id='user_login'>" +
                    "<i class='fa-solid fa-user'></i>" +
                    "<span>登入</span>" +
                    "</div>"
                )

                $('#memberCenter').hide();
            }
              
          },
          error: function(exception) {
              alert("數據載入失敗: " + exception.status);
          }
      });
    }
  
 //=================================================
 //登入的AJAX** <!-- 8/26更改 -->*************************************************************
 function doSubmit() {
    if (document.getElementById('account').value == '') {
        alert("請填寫[帳號]");
        return false;
    }
    if (document.getElementById('pwd').value == '') {
        alert("請填寫[密碼]");
        return false;
    }        

    //AJAX送出表單內容
    $.ajax({            
        method: "POST",
        url: "/thd102/g1/API/Frontend/Login.php",
        data:{ 
            account: $("#account").val(),
            pwd: $("#pwd").val()
        },
        dataType: "text",
        success: function (response) {
            if(response == 'Y'){
                
                //登入成功->導回產品頁
                $('#signin-success').css('display','block');
                $('#container').css('display','none');
                $(function(){
                    $(".member-button").click(function(){
                        location.href = 'member.html';
                    });
                    $(".home-button").click(function(){
                        location.href = 'index.html';
                    });
                });
                // location.href = 'index.html';
            }else{
                alert('帳號或密碼錯誤');
            }                
        },
        error: function(exception) {
            alert("發生錯誤: " + exception.status);
        }
    });
}
//註冊的AJAX** <!-- 8/26更改 -->*************************************************************
function doSubmitjoin() {
    if (document.getElementById('signUp_name').value == '') {
        alert("請填寫[姓名]");
        return false;
    }
    if (document.getElementById('signUp_email').value == '') {
        alert("請填寫[email]");
        return false;
    }
    if (document.getElementById('signUp_password').value == '') {
        alert("請填寫[密碼]");
        return false;
    }   
    if (document.getElementById('signUp_password_2').value == '') {
        alert("請填寫[確認密碼]");
        return false;
    }      

    //AJAX送出表單內容
    $.ajax({            
        method: "POST",
        url: "/thd102/g1/API/Frontend/Join.php",
        data:{ 
            email: $("#signUp_email").val(),
            password: $("#signUp_password").val(),
            name: $("#signUp_name").val(),
        },
        dataType: "text",
        success: function (response) {
            //加入成功->導回登入頁
            // alert(response);
            if(response == 'Y'){
                // location.href = 'index.html';
                $('#signup-success').css('display', 'block');
                $('#container').css('display', 'none');
                $(function () {
                  $(".home-button").click(function () {
                    location.href = 'index.html';
                  });
                });
        
            }else{
                alert('此帳號已註冊');
            }              
        },
        error: function(exception) {
            alert("發生錯誤: " + exception.status);
        }
    });
}

//登入按下enter
$('input[name="pwd"]').keydown(function (event) {
    if (event.which === 13) {
    $('#loginButton').click();
    // var loginSuccess = doSubmit();
    if (loginSuccess) {
        // 登录成功后执行的操作
        // alert("登录成功！");
    } else {
        // 登录失败后执行的操作
        // alert("登录失败！");
    }
    }
});

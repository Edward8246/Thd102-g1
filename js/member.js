let tab_m = document.getElementsByClassName("tab")[0];
let tab_p = document.getElementsByClassName("tab")[1];
let tab_h = document.getElementsByClassName("tab")[2];
let main_s = document.getElementsByClassName("main")[0];
let main_p = document.getElementsByClassName("main")[1];
let main_h = document.getElementsByClassName("main")[2];
// let intro = document.getElementsByClassName('intro')[0];

tab_m.addEventListener("click", function () {
    tab_m.classList.add("t-choose");
    tab_p.classList.remove("t-choose");
    tab_h.classList.remove("t-choose");
    main_s.classList.remove("d-none");
    main_p.classList.add("d-none");
    main_h.classList.add("d-none");

});
tab_p.addEventListener("click", function () {
    tab_p.classList.add("t-choose");
    tab_m.classList.remove("t-choose");
    tab_h.classList.remove("t-choose");
    main_p.classList.remove("d-none");
    main_s.classList.add("d-none");
    main_h.classList.add("d-none");

});
tab_h.addEventListener("click", function () {
    tab_h.classList.add("t-choose");
    tab_p.classList.remove("t-choose");
    tab_m.classList.remove("t-choose");
    main_h.classList.remove("d-none");
    main_p.classList.add("d-none");
    main_s.classList.add("d-none");

});

// function initial() {
//     const GetData = localStorage.getItem('user');
  
//     fetch(`/thd102/g1/API/Frontend/setting.php?account=${GetData}`, {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//     })
//       .then(response => response.json())
//       .then(data => {
//         document.getElementById('name').value = data[0].name;
//         document.getElementById('email').value = data[0].email;
//         document.getElementById('password').value = data[0].password;
//         document.getElementById('address').value = data[0].address;
//         document.getElementById('phone').value = data[0].phone;

            
//             // name = data.name;
//         console.log(data); // 打印响应数据到控制台
//       })
//       .catch(error => {
//         console.error(error); // 打印错误信息到控制台
//       });
//   }
  
//   initial();

  document.addEventListener("DOMContentLoaded", function() {
    // 當文檔載入完成後執行
  
    // 初始化表單
    initial();
  
    // 添加保存更改的事件監聽器
    document.getElementById('saveChanges').addEventListener('click', function() {
        saveChanges();
    });
  });
  
  
    function initial() {
      const GetData = localStorage.getItem('user');
      fetch("/thd102/g1/API/Frontend/setting.php?account=".concat(GetData), {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(function (response) {
        return response.json();
      }).then(function (data) {
        document.getElementById('name').value = data[0].name;
        document.getElementById('email').value = data[0].email;
        document.getElementById('password').value = data[0].password;
        document.getElementById('address').value = data[0].address;
        document.getElementById('phone').value = data[0].phone;
    
        // name = data.name;
        // console.log(data); // 打印响应数据到控制台
      })["catch"](function (error) {
        console.error(error); // 打印错误信息到控制台
      });
    }
    
    initial();
  
  function saveChanges() {
    // 收集表單資料
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
  
    // 封裝成 JSON 格式
    const account = localStorage.getItem('user'); // 假設您已經在 localStorage 設置了用戶資料
    const userData = {
        "name": name,
        "phone": phone,
        "password": password,
        "email": email,
        "address": address
    };
    const payload = {
        "account": account,
        "userData": userData
    };
  
    // 發送更新請求到後端
    fetch("/thd102/g1/API/Frontend/setting_update.php", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }).then(response => response.json())
      .then(data => {
          // console.log(data);
          // 可以在這裡加入成功的反饋，例如：
          if (data.message === "更新成功") {
              alert("更新成功！");
          }
      })
      .catch(error => {
          console.error(error);
          // 可以在這裡加入失敗的反饋
      });
  }
  

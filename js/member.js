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

function initial() {
    const GetData = localStorage.getItem('user');
  
    fetch(`/thd102/g1/API/Frontend/setting.php?account=${GetData}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then(response => response.json())
      .then(data => {
        document.getElementById('name').value = data[0].name;
        document.getElementById('email').value = data[0].email;
        document.getElementById('password').value = data[0].password;
        document.getElementById('address').value = data[0].address;
        document.getElementById('phone').value = data[0].phone;

            
            // name = data.name;
        console.log(data); // 打印响应数据到控制台
      })
      .catch(error => {
        console.error(error); // 打印错误信息到控制台
      });
  }
  
  initial();

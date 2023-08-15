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

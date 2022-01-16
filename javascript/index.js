let btn =document.querySelector("#btn");
let sidebar = document.querySelector(".siderbar");
let btn2 = document.querySelector("#btn2");

btn.onclick = function(){
    sidebar.classList.toggle("active");
}
btn2.onclick = function(){
    sidebar.classList.toggle("active");
}
//////////////////dark maode/////////////

var content = document.getElementsByClassName('body1')[0];
var darkMode = document.getElementById('dark-change');
darkMode.addEventListener('click', function(){
    darkMode.classList.toggle('active');
    content.classList.toggle('night');
})
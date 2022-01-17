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


//////////////////////heart contact///////////////////////
const btn =document.querySelector("button");//post button
const post =document.querySelector(".post");//post div
const widget =document.querySelector(".star-widget");//satrt widget class 
const editbtn =document.querySelector(".edit");//edit div 
//functiom create..
btn.onclick = () =>{
    widget.style.display = "none";//button per click karna per sart div none hoo jaaya ga
    post.style.display ="block";
    return false;
}

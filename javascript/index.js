const list = document.querySelectorAll(".list");

function activeLink() {
    list.forEach((item) =>
    item.classList.remove("active"));
    this.classList.add("active");
}

list.forEach((item) =>
item.addEventListener("click", activeLink));

//////////////////dark maode/////////////

var content = document.getElementsByClassName('body1')[0];
var darkMode = document.getElementById('dark-change');
darkMode.addEventListener('click', function(){
    darkMode.classList.toggle('active');
    content.classList.toggle('night');
})


//////////////////////heart contact///////////////////////


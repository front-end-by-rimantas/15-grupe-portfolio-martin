console.log("hello world");

const header = document.querySelector(".navigation-bar");
const martinText = document.querySelector(".martinText");
const menuText = document.querySelector(".hoverEffect");


window.onscroll = function(){
    var top = window.scrollY;
    console.log(top);
    if (top >= 100){
        header.classList.add('active')
        martinText.classList.add('active')
        menuText.classList.add('active')
    }else{
        header.classList.remove('active');
        martinText.classList.remove('active');
    }  
}
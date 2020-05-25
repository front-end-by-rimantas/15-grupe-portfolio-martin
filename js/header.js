console.log("hello world");

const header = document.querySelector(".navigation-bar");
const martinText = document.querySelector(".martinText");
var menuText = document.querySelectorAll(".hoverEffect");


window.onscroll = function(){
    var top = window.scrollY;
    if (top >= 100){
        header.classList.add('active')
        martinText.classList.add('active')
        menuText[0].classList.add('active')
        menuText[1].classList.add('active')
        menuText[2].classList.add('active')
        menuText[3].classList.add('active')
        menuText[4].classList.add('active')
        menuText[5].classList.add('active')
       
    }else{
        header.classList.remove('active');
        martinText.classList.remove('active');
        menuText[0].classList.remove('active')
        menuText[1].classList.remove('active')
        menuText[2].classList.remove('active')
        menuText[3].classList.remove('active')
        menuText[4].classList.remove('active')
        menuText[5].classList.remove('active')
    }  
}
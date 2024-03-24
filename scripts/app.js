let menu = document.querySelector(".menu")
let menuBtn = document.querySelector(".header__icon")
let btnIcon = document.querySelector(".header__icon i")

menuBtn.addEventListener("click", function(){
    if(btnIcon.classList.contains("fa-bars")){
        menu.style.left = "0";
        btnIcon.classList = "fa fa-times"
    }
    else {
        menu.style.left = "-16rem";
        btnIcon.classList = "fa fa-bars"
    }
})
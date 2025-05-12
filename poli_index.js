let burger = document.querySelector(".burger")
burger.addEventListener("click",function(){
    let about_menu = document.querySelector(".about-menu")
    if (about_menu.style.display==="block"){
        about_menu.style.display="none"
    }else{
        about_menu.style.display="block"
    }
})

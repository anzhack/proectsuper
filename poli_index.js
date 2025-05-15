let burger = document.querySelector(".menu")
burger.addEventListener("click",function(){
    let about_menu = document.querySelector(".about_menu_div")
    
    if (about_menu.style.display==="block"){
        about_menu.style.display="none"
    }else{
        about_menu.style.display="block"
    }
})



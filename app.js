
// toggle mobile menu

let mobileMenu = document.querySelector(".nav-mobile-menu");
let mainMenu = document.querySelector(".row-headMenu");

mobileMenu.addEventListener("click", function(){
    mobileMenu.classList.toggle("active-menu");
    if(mobileMenu.classList.contains("active-menu"))
    {
    mainMenu.classList.add("active-menu")
    } 
    else{
        mainMenu.classList.remove("active-menu")
    }
});

// slick slider

    $('.slider-block').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        dots:true,



    });
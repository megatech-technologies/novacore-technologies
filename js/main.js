const header = document.querySelector(".header");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 80){

        header.classList.add("sticky");

    }

    else{

        header.classList.remove("sticky");

    }

});




//script overlay
const menuToggle = document.querySelector(".menu-toggle");

const navigation = document.querySelector(".navigation");

const overlay = document.querySelector(".nav-overlay");

menuToggle.addEventListener("click",()=>{

    navigation.classList.toggle("active");

    overlay.classList.toggle("active");

});

overlay.addEventListener("click",()=>{

    navigation.classList.remove("active");

    overlay.classList.remove("active");

});



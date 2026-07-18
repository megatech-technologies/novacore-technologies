/*==================================================
NAVIGATION
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

const header=document.querySelector(".header");
const menuToggle=document.querySelector(".menu-toggle");
const navbar=document.querySelector(".navbar");
const navLinks=document.querySelectorAll(".nav-links a");

/*==================================================
STICKY HEADER
==================================================*/

if(header){

window.addEventListener("scroll",()=>{

header.classList.toggle(

"scrolled",

window.scrollY>50

);

});

}

/*==================================================
MOBILE MENU
==================================================*/

if(menuToggle && navbar){

menuToggle.addEventListener("click",()=>{

menuToggle.classList.toggle("active");

navbar.classList.toggle("active");

document.body.classList.toggle("menu-open");

});

}

/*==================================================
CLOSE MENU
==================================================*/

navLinks.forEach(link=>{

link.addEventListener("click",()=>{

if(navbar && navbar.classList.contains("active")){

navbar.classList.remove("active");

menuToggle.classList.remove("active");

document.body.classList.remove("menu-open");

}

});

});

/*==================================================
CLICK OUTSIDE
==================================================*/

if(menuToggle && navbar){

document.addEventListener("click",(e)=>{

if(

navbar.classList.contains("active") &&

!navbar.contains(e.target) &&

!menuToggle.contains(e.target)

){

navbar.classList.remove("active");

menuToggle.classList.remove("active");

document.body.classList.remove("menu-open");

}

});

}

/*==================================================
RESIZE
==================================================*/

window.addEventListener("resize",()=>{

if(window.innerWidth>992 && navbar && menuToggle){

navbar.classList.remove("active");

menuToggle.classList.remove("active");

document.body.classList.remove("menu-open");

}

});

});
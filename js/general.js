/*==================================================
BACK TO TOP
==================================================*/

const backToTop=document.querySelector(".back-to-top");

window.addEventListener("scroll",()=>{

backToTop.classList.toggle("show",window.scrollY>500);

});

backToTop.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});







/*==================================================
FOOTER YEAR
==================================================*/

const year = document.getElementById("year");

if(year){

    year.textContent = new Date().getFullYear();

}
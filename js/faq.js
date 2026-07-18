const faqItems=document.querySelectorAll(".faq-item");

faqItems.forEach(item=>{

const button=item.querySelector(".faq-question");
const icon=button.querySelector("span");

button.addEventListener("click",()=>{

faqItems.forEach(faq=>{

if(faq!==item){

faq.classList.remove("active");

faq.querySelector("span").textContent="add";

}

});

item.classList.toggle("active");

icon.textContent=item.classList.contains("active")
? "remove"
: "add";

});

});
const counters=document.querySelectorAll(".counter");

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const counter=entry.target;
const target=+counter.dataset.target;

let count=0;

const update=()=>{

count+=Math.ceil(target/80);

if(count>=target){

counter.textContent=target+"+";
}else{

counter.textContent=count;

requestAnimationFrame(update);

}

};

update();

observer.unobserve(counter);

}

});

});

counters.forEach(counter=>observer.observe(counter));
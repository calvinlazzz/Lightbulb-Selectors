// Write your code here
let bulb1  = document.querySelector("#lightbulb1");
let bulb2  = document.querySelector("#lightbulb2");
let bulb3  = document.querySelector("#lightbulb3");
let sub = document.querySelector(".subtitle");
let count = 0;
bulb1.addEventListener("click", function(){
    count++;
    sub.innerHTML = `You've clicked the light ${count} times`;
    this.classList.toggle("active");
});
bulb2.addEventListener("click", function(){
    count++;
    sub.innerHTML = `You've clicked the light ${count} times`;
    this.classList.toggle("active");

});
bulb3.addEventListener("click", function(){
    count++;
    sub.innerHTML = `You've clicked the light ${count} times`;
    this.classList.toggle("active");

});
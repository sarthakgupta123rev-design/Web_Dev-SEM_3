let a=document.getElementById("25032001");
let b=document.getElementById("25032008");
let c=document.getElementById("25032009");
let d=document.getElementById("form");

console.log("SCRIPT LOADED");
a.addEventListener("click",function(){
    window.location.href("a.htm")
});
b.addEventListener("click",function(){
    window.location.href("b.htm")
});
c.addEventListener("click",function(){
    window.location.href("c.htm")
})
d.addEventListener("click",function(){
    window.location.href("form.htm")
})
let nav = document.querySelectorAll("nav");
let navItems = Array.from(nav);

navItems.forEach(element => {
    element.addEventListener("mouseover" , function(event) {
        event.target.style.color = 'red';
    });
    element.addEventListener("mouseout" , function(event) {
        event.target.style.color = 'black';
    });
    element.addEventListener("click",function(event){
        event.preventDefault();
    })
});

document.addEventListener("keydown", function(event){
    if(event.key === "ArrowUp"){
        window.scrollTo(0,0);
    }
    if(event.key === "ArrowDown"){
        window.scrollTo(0, document.body.scrollHeight);
    }
});

let mainImg = document.querySelector("header img");
let scale = 1;
mainImg.addEventListener("wheel", function(event){
    event.preventDefault();
    scale += event.deltaY * -0.01;
    scale = Math.min(Math.max(.125, scale), 4);
    event.target.style.transform = `scale(${scale})`;
});

// let btn = document.querySelectorAll(".btn");
// let btnArr = Array.from(btn);
// btnArr.forEach((item) => {
//     item.addEventListener("focus", function(event) {
//         event.target.style.backgroundColor = 'black';
//     });
// });

window.addEventListener("resize", function(event){
    document.querySelector("body").style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);//random HEX color generator
    document.querySelector("header").style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
});

Array.from(document.querySelectorAll("body")).forEach(item => {//double click will remove an element
    item.addEventListener("dblclick", function(event){
        event.target.remove();
    });
    item.addEventListener("mousedown", function(event){
        event.target.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    });
});

let x = document.createElement("INPUT");
x.type = "text";
x.value = "select this text"
x.id = "input"
document.querySelector(".home").appendChild(x);

let y = document.createElement("span");
y.id = "selectedText";
y.style.fontSize = "1.5em";
document.querySelector(".home").appendChild(y);

document.querySelector("#input").addEventListener("select", function(event){
    const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
    document.querySelector("#selectedText").innerHTML = selection;
});

document.querySelector("#input").addEventListener("focus", function(event){
    event.target.style.fontSize = '5em';
});
document.querySelector("#input").addEventListener("blur", function(event){
    event.target.style.fontSize = '1.5em';
});

window.addEventListener('load', function(event) {
    alert('page is fully loaded');
  });

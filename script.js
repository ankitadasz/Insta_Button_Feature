const button = document.querySelector("#btn");
const sts = document.querySelector("h5");
let check = 0;
button.addEventListener("click", function () {
  if (check == 0) {
    sts.innerHTML = "Friend";
    sts.style.color = "green";
    button.innerHTML = "Remove";
    check = 1;
  } else {
    sts.innerHTML = "Stranger";
    sts.style.color = "Red";
    button.innerHTML = "Add Friend";
    check = 0;
  }
});

const img = document.querySelector("#img-container");
const love = document.querySelector("i");
img.addEventListener("dblclick", function () {
  love.style.transform = "translate(-50%,-50%) scale(1)";
  love.style.opacity = "1";
  setTimeout(function () {
    love.style.transform = "translate(-50%,-50%) scale(0)";
    love.style.opacity = "0";
  }, 1000);
});

const main=document.querySelector("body");
const cursor=document.querySelector(".cursor");
main.addEventListener("mousemove",function(move){
         cursor.style.left=move.x+"px";
         cursor.style.top=move.y+"px";


})
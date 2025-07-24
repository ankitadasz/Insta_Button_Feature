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

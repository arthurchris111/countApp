var result = document.querySelector(".result");
var decrease = document.querySelector(".decrease");
var reset = document.querySelector(".reset");
var increase = document.querySelector(".increase");


increase.addEventListener("click", () => {
    result.innerHTML++;
})

reset.addEventListener("click", () => {
    result.innerHTML = 0;
})


decrease.addEventListener("click", () => {
    result.innerHTML--;
})
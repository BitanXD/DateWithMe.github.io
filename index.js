// var b = document.querySelector(".no-btn");
// b.addEventListener("click",change);
// function change()
// {
//     var i = Math.floor(Math.random()*500)+1;
//     var j = Math.floor(Math.random()*500)+1;
//     b.style.left = i+"px";
//     b.style.top = j+"px";
// }


const c = document.querySelector(".container1");
const b = document.querySelector(".no-btn");

function change() {
  const
    { width: cWidth, height: cHeight } = c.getBoundingClientRect(),
    { width: bWidth, height: bHeight } = b.getBoundingClientRect(),
    i = Math.floor(Math.random() * (cWidth - bWidth)) + 1,
    j = Math.floor(Math.random() * (cHeight - bHeight)) + 1;

  b.style.left = i + "px";
  b.style.top = j + "px";
  document.getElementById("text").innerHTML="Arre Button ta to Dhor 🤣 ";
  document.getElementById("change-pic").src='laughing.gif';
}
b.addEventListener("click", () => {
  document.getElementById("text").innerHTML="Arre odike";
})
b.addEventListener("click", change);
let circle = document.querySelector(".circleMouse");
function move(e) {
  circle.style.left = e.clientX + "px";
  circle.style.top = e.clientY + "px";
}

document.addEventListener("mousemove", move);

function toggleMobileMenu(menu) {
  menu.classList.toggle("open");
}

//Toggle sidebar 
const navContainer = document.getElementById('nav-menu')
const menuBtn = document.getElementById('menu-icon')

menuBtn.onclick = function(e) {
  //stop propagation of document click
  e.stopPropagation()

  //toggle side nav
  if (!navContainer.classList.contains("open")) {
    navContainer.classList.add("open");
  } else {
    navContainer.classList.remove("open");
  }
}

//stop propagation on the side nav element
navContainer.onclick = function(e) {
  e.stopPropagation()
}

//close menu when document is clicked
document.onclick = function() {
  navContainer.classList.remove("open");
}


//Scroll animation
function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);
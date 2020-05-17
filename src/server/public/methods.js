var navButtons = document.querySelectorAll('.navButtons');

window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("header");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
	if (window.pageYOffset >= sticky) {
		navbar.classList.add("sticky");
	} else {
		navbar.classList.remove("sticky");
		console.log("remove Sticky");
	}
};

var slideIndex = 0;
carousel();

function carousel() {
	  var i;
	  var x = document.getElementsByClassName("reviewSlides");
	  for (i = 0; i < x.length; i++) {
		      x[i].style.display = "none";
		    }
	  slideIndex++;
	  if (slideIndex > x.length) {slideIndex = 1}
	  x[slideIndex-1].style.display = "block";
	  setTimeout(carousel, 4000); // Change image every 2 seconds
}

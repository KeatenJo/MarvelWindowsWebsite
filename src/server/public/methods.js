var navButtons = document.querySelectorAll('.navButtons');

	
navButtons.forEach(function(button) {
	button.onmouseover = function () {
		button.style.backgroundColor = "rgb(255, 255, 255)";		
		button.style.color = "black";
	}
});

navButtons.forEach(function(button) {
	button.onmouseout = function () {
		button.style.backgroundColor = "#0080FF";
		button.style.color = "white";
	}
});




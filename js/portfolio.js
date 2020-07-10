/*functions for opening links*/

/*function that opens your Github page in a new tab*/
function OpenGithub() {
	window.open("https://github.com/levit123");
}

/*function that opens your LinkedIn profile in a new tab*/
function OpenLinkedIn() {
	window.open("https://www.linkedin.com/in/levi-blodgett-software/");
}

function OpenProject(){
 window.open("Project1.html");
}

function OpenProject2(){
	window.open("Project2.html");
}

function OpenProject3(){
window.open("Project3.html");
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
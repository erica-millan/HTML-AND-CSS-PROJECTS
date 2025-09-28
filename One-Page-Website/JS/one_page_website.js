//Sets the Modals display to block; on the "current slide(..)" from HTML.
//html calls this function when a hue image is clicked.
//by default the html element has display:none. This makes the modal visible
//by changing the display to block. 
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

// Close the Modal, triggered when you press the "x" button from HTML.
//hides the model
function exitModal() {
  document.getElementById("myModal").style.display = "none";
}

let slideIndex = 1;
//calling show slides
showSlides(slideIndex);

//the html element moveSlide will pass either a +1 or -1 depending on 
//if forward or backward arrow is pressed.
function moveSlide(n) {
  showSlides(slideIndex += n);
}

//this gets called directly from HTML when you click image

function currentSlide(n) {
  //calling showSlides passing in the current 
  // slide number that was passed from the HTML file
  showSlides(slideIndex = n);
}

//both arrows and images ultimatley call this function when clicked.
//both pass slide number to be displayed.
//this function will show a specific slide based on the number "n" slide number that was
//passed through
function showSlides(n) {

  //creating a const for slides which is all full size images in the modal
  const slides = document.getElementsByClassName("mySlides");
  // dots which is small thumbnail image
  const dots = document.getElementsByClassName("demo");
  //caption text
  const captionText = document.getElementById("caption");

  //looping back to the first slide if you go past the end, or to the last if you go 
  //before the beggining. this prevents slideshow from going out of bounds.
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
//hiding all slides making sure only the current slide is visible
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
//prepares to highlight current slide
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  //this line overrides the css display: none for slides, but just for the selected slide
  slides[slideIndex - 1].style.display = "block";
  //highlight matching thumbnail
  dots[slideIndex - 1].className += " active";
  //updates caption based on the alt text from image
  captionText.innerHTML = dots[slideIndex - 1].alt;
}

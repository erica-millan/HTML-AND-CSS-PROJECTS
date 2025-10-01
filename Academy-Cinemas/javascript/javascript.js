//Initialize Popovers
//This variable targets all html elements that contian the custom data attribute data-bs-toggle popover and 
//turns them into a list. When user hovers over images the browser will loop through
//each popover and determine which stars image it sohuld display based on the data attribute bs image. 
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')

//foreach loop on the popover trigger list variable

//element argument represents each item in the popover trigger list array.
popoverTriggerList.forEach(function (element) {
    //created a variable "imgSrc" that gets the image path from the data attribute data-bs-image and 
    //pass data into variable "content" that holds the html image tag to insert when the popover is triggered.
    var imgSrc = element.getAttribute('data-bs-img');
    var content = "<img class='star-rating' src='" + imgSrc + "'>";
    new bootstrap.Popover(element, {
        //sets the content of the popover to the content variable which contains the HTML string for the image.
        content: content,
        //indicates that the content is html
        html: true,
        //sets the trigger event for the popover to hover so it will show when the user hovers over the element.
        trigger: 'hover'
    })
});

//Initialize Toast

const toastElList = document.querySelectorAll('.toast')
const toastList = [...toastElList].map(toastEl => new bootstrap.Toast(toastEl))

//Function to display toast with selected options

function displaySelectedMovieOptions() {
    var movie = document.getElementById('movieSelect').options[document.getElementById('movieSelect').selectedIndex].text;
    var time = document.getElementById('timeSelect').options[document.getElementById('timeSelect').selectedIndex].text
    var quantity = document.getElementById("quantity").value;
    var message = "Purchase confirmed for: " + movie + "\nTime: " + time + "\nTickets: " + quantity;
    //Display Toast     
    var toastBody = document.getElementById('toastBody');
    toastBody.textContent = message;
    var toast = new bootstrap.Toast(document.getElementById('toastDisplay'));
    toast.show()
}

function buyTickets() {
    displaySelectedMovieOptions();
}


//JQUERY

//Shrinks header size when the document is scrolled down by 80 pixels
$(document).on("scroll", function () {
    //when the webpage is scrolled down from the top by 50px this
    //if statement will trigger
    if ($(document).scrollTop() > 50) {
        //once the 50px requirement has been met add
        //the nav-shrink class selector to the same HTML element
        //that has the nav class
        $("nav").addClass("nav-shrink");
        //adjust the position of the mobile drop menu
        //to accommodate the new height change
        $("div.navbar-collapse").css("margin-top", "-6px");
    } else {
        //If the webpage has not been scrolled down or
        //is removed from the nav-shrink class selector
        //is removed from the HTML element with the nav
        //class selector
        $("nav").removeClass("nav-shrink");
        //the margin for the drop down menu is now 
        //returned to it's original amount
        $("div.navbar-collapse").css("margin-top", "14px");
    }
});

// Close mobile menu when a navigation link is clicked
$(document).ready(function () {
    // On click when end element contains just the nav-link class and not the dropdown-toggle and
    // then also close when an element with the class .dropdown-item (each movie link) has been clicked
    $('.navbar-nav').on('click', '.nav-link:not(.dropdown-toggle), .dropdown-item', function () {
        // Collapse the navbar when a link or dropdown item is clicked
        $('.navbar-collapse').collapse('hide');
    });
});

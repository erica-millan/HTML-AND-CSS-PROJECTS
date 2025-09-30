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

function buyTickets(){
    displaySelectedMovieOptions();
}
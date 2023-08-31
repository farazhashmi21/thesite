function displ(){
    let greetings = "Assalam-O-Alaiqum World";
    console.log(greetings);
}
function mouseMove(){
// Attach an event listener to the "mousemove" event
    document.addEventListener('mousemove', function() {
    // Display a prompt when the mouse is moved
        var userInput = prompt('Hey there! Move your mouse to see this prompt.');
        // window.location.assign("https://www.hashmiwebsol.com/");
        // Display the user's input in the console
        console.log('User input:', userInput);
    });
}
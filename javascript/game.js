const lineTwo = new OutputText("What is your Name?", 60)
    // inputArea ;


// Execute a function when the user presses a key on the keyboard
inputArea.addEventListener("keypress", function(event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
        // Cancel the default action, if needed
        event.preventDefault();

        if (inputArea.value != "") {
            enterName()
        }
    }
});


function enterName() {
    console.log("OSDI)SD")

    lineTwo.str = "Your name is " + inputArea.value + " is that okay?"
    lineTwo.resetInterval()
    lineTwo.startInterval()
}
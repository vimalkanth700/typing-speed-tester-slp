
function restartTest() {
    // Clear the typing area
    document.getElementById("typingArea").value = "";
    
    // Reset the text to prompt message
    document.getElementById("textToType").innerText = "Click 'Start' to begin the test.";
    
    // Clear the result
    document.getElementById("result").innerText = "";
    
    // Disable the typing area
    document.getElementById("typingArea").disabled = true;
    
    // Reset timing variables
    startTime = null;
    endTime = null;
    
    // Reset selected text to ensure a new random text is picked
    selectedText = null;
}





































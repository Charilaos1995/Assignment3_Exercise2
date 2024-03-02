// Wait for the DOM content to be fully loaded before executing JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Select relevant elements from the DOM
    const colorPalette = document.querySelector('#colorPalette');
    const colorDisplay = document.querySelector('#colorDisplay');
    const historyList = document.querySelector('#historyList');
    
     // Add event listener to the color palette table
    colorPalette.addEventListener('click', function(event) {
         // Check if the clicked element is a table cell with a background color
        const selectedColor = event.target.style.backgroundColor;
        if (selectedColor) {
            // Update the display text color and content
            colorDisplay.style.color = selectedColor;
            colorDisplay.textContent = "Hello world!";
            // Add the selected color to the history list
            addToHistory(selectedColor);
        }
    });

    // Function to add selected color to the history list
    function addToHistory(color) {
        const listItem = document.createElement('li');
        listItem.textContent = color;
        historyList.appendChild(listItem);
    }
});

# buildmychoice

<input type="text" id="itemInput" placeholder="Enter item">
<button id="addItemButton">Add Item to Array</button>
<p>Current Array: <span id="arrayDisplay"></span></p>


let myArray = []; // Initialize an empty array

const itemInput = document.getElementById('itemInput');
const addItemButton = document.getElementById('addItemButton');
const arrayDisplay = document.getElementById('arrayDisplay');

addItemButton.addEventListener('click', function() {
    const newItem = itemInput.value; // Get the value from the input field

    if (newItem) { // Only add if the input is not empty
        myArray.push(newItem); // Add the item to the array
        itemInput.value = ''; // Clear the input field
        arrayDisplay.textContent = myArray.join(', '); // Update the display
    }
});
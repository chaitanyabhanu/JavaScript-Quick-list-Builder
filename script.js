// Step 1: Find the Input Box, Button, and List in Your HTML
const InputContainer = document.querySelector('#InputContainer');
const btnContainer = document.querySelector('#btnContainer');
const orderList = document.querySelector('#orderList');

// Step 2: Listen for a Click on the 'ADD-MORE' Button
btnContainer.addEventListener('click', function() {
    const productName = InputContainer.value.trim();  // Get the text you typed in the box

    if (productName) {  // If there's something typed, do this:
        const newProductItem = document.createElement('li');  // Create a new list item
        newProductItem.textContent = productName;  // Set the list item's text to what you typed

        const deleteBtn = document.createElement('span');  // Create a delete button
        deleteBtn.textContent = '❌';  // Set the button to look like an 'X'
        deleteBtn.className = 'delete-btn';  // Give the delete button a class for styling

        newProductItem.appendChild(deleteBtn);  // Add the delete button to the new list item
        orderList.appendChild(newProductItem);  // Add the new list item to the list

        InputContainer.value = '';  // Clear the input box for the next item

        // Step 3: Listen for a Click on the Delete Button to Remove the Item
        deleteBtn.addEventListener('click', function() {
            orderList.removeChild(newProductItem);  // Remove the list item when the delete button is clicked
        });
    }
});

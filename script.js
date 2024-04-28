document.addEventListener('DOMContentLoaded', function() {
    // Get the input field
    var dhAmountInput = document.getElementById('dhAmount');

    // Prevent the default behavior of Enter key press within the input field
    dhAmountInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
        }
    });
});

function multiply() {
    // Get the input values
    var dhAmount = parseFloat(document.getElementById('dhAmount').value);

    // Check if all inputs are valid numbers
    if (!isNaN(dhAmount)) {
        // Perform the calculation
        var total_dh = dhAmount / 3.67;
        var result = total_dh.toFixed(0);
        document.getElementById('result').value = result;
    } else {
        // If any input is not a valid number, display a message
        document.getElementById('result').value = 'Please enter valid numerical values in all fields';
    }
}

function copyResult() {
    // Get the result field
    var resultField = document.getElementById('result');

    // Select the text in the result field
    resultField.select();
    resultField.setSelectionRange(0, 99999); // For mobile devices

    // Copy the selected text to the clipboard
    document.execCommand('copy');

    // Show the alert
    var copyResultAlert = document.getElementById('copyResultAlert');
    copyResultAlert.style.display = 'block';

    // Hide the alert after a delay (e.g., 3 seconds)
    setTimeout(function () {
        copyResultAlert.style.display = 'none';
    }, 2000);
}

/* Name: Sid Shankar
Email: siddarth_shankar@student.uml.edu 
This file is responsible for generating a mult table dynamically
using a generateTable functuon, and it also checks to make sure that 
the numbers follow the parameters. Otherwise, an error message pops up
asking the user to put in valid parameters.  */

function generateTable() {
    // Read input values
    var num1 = parseInt(document.getElementById('num1').value);
    var num2 = parseInt(document.getElementById('num2').value);
    var num3 = parseInt(document.getElementById('num3').value);
    var num4 = parseInt(document.getElementById('num4').value);

    // Validate input
    if (isNaN(num1) || isNaN(num2) || isNaN(num3) || isNaN(num4)) {
        displayErrorMessage('Please enter valid numbers.');
        return;
    }

    // Check if numbers are within the specified range
    if (num1 < -50 || num1 > 50 || num2 < -50 || num2 > 50 || num3 < -50 || num3 > 50 || num4 < -50 || num4 > 50) {
        displayErrorMessage('Invalid input, numbers should be between -50 and 50, inclusive.');
        return;
    }

    // Generate multiplication table
    var tableContent = '<table>';

    // Create the header row with horizontal numbers
    tableContent += '<tr><td></td>';
    for (var j = num3; j <= num4; j++) {
        tableContent += '<th>' + j + '</th>';
    }
    tableContent += '</tr>';

    for (var i = num1; i <= num2; i++) {
        tableContent += '<tr>';
        tableContent += '<th>' + i + '</th>';
        for (var j = num3; j <= num4; j++) {
            var product = i * j;
            var cellClass = '';

            // Check if the number is even
            if (product % 2 === 0) {
                cellClass += 'even ';
            }

            // Check if the number is negative
            if (product < 0) {
                cellClass += 'negative';
            }

            tableContent += '<td class="' + cellClass.trim() + '">' + product + '</td>';
        }
        tableContent += '</tr>';
    }

    tableContent += '</table>';

    // Save the table content to sessionStorage
    sessionStorage.setItem('tableContent', tableContent);

    // Redirect to a new page
    window.location.href = 'table.html';
}

function displayErrorMessage(message) {
    // Create a div for error message
    var errorDiv = document.getElementById('error-message');
    
    // Clear previous error message
    errorDiv.innerHTML = '';

    // Create a new text node with the error message
    var errorMessage = document.createTextNode(message);

    // Append the text node to the div
    errorDiv.appendChild(errorMessage);
}

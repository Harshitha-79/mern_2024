function square() {
    let num = parseInt(document.getElementById('number').value);
    if (isNaN(num)) {
        document.getElementById('output').value = "Invalid input";
        return;
    }
    let res = num * num;
    document.getElementById('output').value = res;  // Output the result in the input field
    document.getElementById('output_caption').innerHTML = "Square: " + res;  // Display result caption
}

function cube() {
    let num = parseInt(document.getElementById('number').value);
    if (isNaN(num)) {
        document.getElementById('output').value = "Invalid input";
        return;
    }
    let res = num * num * num;
    document.getElementById('output').value = res;  // Output the result in the input field
    document.getElementById('output_caption').innerHTML = "Cube: " + res;  // Display result caption
}

function findresult(option) {
    var num = document.getElementById('number').value;
    var outputField = document.getElementById('output');
    
    // Check if the input is a valid number
    if (isNaN(num) || num === "") {
        outputField.value = "Please enter a valid number";
        return;
    }

    num = parseFloat(num);
    
    if (option === 1) {
        // Square
        outputField.value = Math.pow(num, 2);
        document.getElementById('output_caption').innerHTML = "Square: " + Math.pow(num, 2);
    } else if (option === 2) {
        // Cube
        outputField.value = Math.pow(num, 3);
        document.getElementById('output_caption').innerHTML = "Cube: " + Math.pow(num, 3);
    }
}

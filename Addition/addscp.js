function addTwoNum() {
    // Get the values from the input fields and convert them to numbers
    const firstNumber = parseFloat(document.getElementById("firstNumber").value);
    const secondNumber = parseFloat(document.getElementById("secondNumber").value);

    // Check if both inputs are valid numbers
    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        alert("Please enter valid numbers.");
        return;
    }

    // Calculate the sum
    const sum = firstNumber + secondNumber;

    // Display the result in the "sum" input field
    document.getElementById("sum").value = sum;
}

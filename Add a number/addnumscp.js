var number_list = [];

function doAdd() {
    let number = parseInt(document.getElementById("number").value);

    // Push the number to the list
    number_list.push(number);

    let items = '';
    // Loop through the list to create list items
    for (let n of number_list) {
        items += `<LI class="p-2 btn btn-primary m-2" style="list-style-type:none;">${n}</LI>`;
    }

    // Create the unordered list with the items
    let numberListHtml = `<UL class="d-flex flex-wrap">${items}</UL>`;

    // Update the inner HTML of the number_list div
    document.getElementById("number_list").innerHTML = numberListHtml;

    // Clear the input field and refocus
    document.getElementById("number").value = '';
    document.getElementById("number").focus();
}

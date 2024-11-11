function findAmont(){
    let qty =parseInt(document.getElementById('qty').value);
    let price =parseInt(document.getElementById('price').value);
    let amount =qty*price
    document.getElementById("amount").value=amount

}

function addItem(){
    let name =document.getElementById("name").value
    let qty =parseInt(document.getElementById("qty").value)
    let price =parseInt(document.getElementById("price").value)
    let amount =parseInt(document.getElementById("amount").value)
}
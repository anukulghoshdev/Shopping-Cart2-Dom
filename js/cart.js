const cartArray = []; // {nodejs, 90}

function display(cartProduct){
    const tableBody = document.getElementById('card-product');
    tableBody.innerHTML = '';

    for(let i = 0; i< cartProduct.length; i++){
        const name = cartProduct[i].productName;
        const price = cartProduct[i].productPrice;

        const tr = document.createElement('tr');
        tr.innerHTML = `
        <th>${i+1}</th>
        <td>${name}</td>
        <td>${price}</td>
        `
        tableBody.appendChild(tr);
    }

}


function addToCart(element){

    const productName = element.parentNode.parentNode.children[0].innerText;
    const productPrice = element.parentNode.parentNode.children[1].children[0].innerText;
    

    const productObj= {
        productName: productName,
        productPrice: parseInt(productPrice),
    }
    cartArray.push(productObj);

    document.getElementById('total-added-product').innerText = cartArray.length;
    
    display(cartArray);
}
const products = {
  p1: { name: "Laptop", price: 1200, stock: 10 },
  p2: { name: "Mouse", price: 25, stock: 0 },
  p3: { name: "Teclado", price: 75, stock: 5 }
}

function getAvailableProducts(products){
    return Object.values(products).filter((obj) => obj.stock > 0)
}
console.log(getAvailableProducts(products));


console.log('');
console.log('------------------------------------------');
console.log('');


function getProductNames(products){
    return Object.values(products).map((obj) => obj.name)
}
console.log(getProductNames(products));


console.log('');
console.log('------------------------------------------');
console.log('');


function getTotalInventoryValue(products){
    return Object.values(products).reduce((total, product) => total + product.price * product.stock, 0)
}
console.log(getTotalInventoryValue(products));


console.log('');
console.log('------------------------------------------');
console.log('');


function findProduct(products, id){
    return products?.[id] ?? null
}
console.log(findProduct(products, 'p7'));


console.log('');
console.log('------------------------------------------');
console.log('');


function getExpensiveProducts(products, minPrice){
    return Object.values(products).filter((obj) => obj.price > minPrice)
}
console.log(getExpensiveProducts(products, 60));

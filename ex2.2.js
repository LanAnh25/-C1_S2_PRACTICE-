const PRODUCTS = [
    { id: 1, name: "Apple", price: 2.5 },
    { id: 2, name: "Banana", price: 1.5 },
    { id: 3, name: "Orange", price: 3 },
    { id: 4, name: "Rice", price: 1.5 },
    { id: 5, name: "Chocolate", price: 3 },
  ];
  
  const SHOPPING_CART = [
    { id: 1, quantity: 2 },
    { id: 3, quantity: 1 },
  ];

function addProductToCart(productId) {
    let totalAmount = 0;
    const index = SHOPPING_CART.findIndex(item => item.id === productId)
    if(index !== -1){
        SHOPPING_CART[index].quantity++;
    }else{
        SHOPPING_CART.push({
                id: productId,
                quantity: 1
            })
    }
}

console.log("Before adding product:");
console.log(SHOPPING_CART);

addProductToCart(1);
console.log("After adding product 1:");
console.log(SHOPPING_CART);

addProductToCart(2);
console.log("After adding product 2:");
console.log(SHOPPING_CART);
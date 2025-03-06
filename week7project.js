function calculatePrice (productType, quantity, isMember) {
    let price;

    if (productType = "Electronics") {
        price = 100;
    }
    else if (productType = "Clothing") {
        price = 50;
    }
    else if (productType = "Grocery") {
        price = 20;
    }

    let totalPrice = price * quantity;

    if (isMember) {
        totalPrice = totalPrice * 0.9;
    }
    else if (quantity > 5) {
        totalPrice = totalPrice * 0.95;
    }
    else if (totalPrice > 500) {
        totalPrice = totalPrice - 50;
    }

    return totalPrice;
}

console.log(calculatePrice("Electronics", 5, false ))
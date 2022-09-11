function fruitPrice(fruit, grams, pricePerKg){
    let kg = grams * 0.001;
    let totalPrice = kg * pricePerKg;

    console.log(`I need $${totalPrice.toFixed(2)} to buy ${kg.toFixed(2)} kilograms ${fruit}.`);
}
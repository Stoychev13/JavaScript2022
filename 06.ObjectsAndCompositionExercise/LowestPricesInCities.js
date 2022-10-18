function LowestPricesInCities(array) {

    const products = [];

    for (let index = 0; index < array.length; index++) {

        const split = array[index].split(' | ');
        let townName = split[0];
        let productName = split[1];
        let productPrice = Number(split[2]);

        const object = {
            townName, productName, productPrice
        }

        if (products.some(a => a.productName == productName)) {
            let indexOfProduct = products.indexOf(products.find(a => a.productName == productName));

            if (productPrice < products[indexOfProduct].productPrice) {
                products[indexOfProduct].townName = townName;
                products[indexOfProduct].productPrice = productPrice;
            }
        } else {
            products.push(object);
        }
    }

    products.forEach(a => console.log(`${a.productName} -> ${a.productPrice} (${a.townName})`));

}
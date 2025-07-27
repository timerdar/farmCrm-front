var products = [
        {id: 1, name: "Яйцо", cost: 33, orderedCount: 10, createdCount: 4}]

export function createProduct(name, cost){    
    if (name !== '' && !isNaN(cost) && cost > 0){
        const newProduct = {id: products.length + 1, name: name, cost: cost, orderedCount: 0, createdCount: 0}
        products.push(newProduct);
    }
}

export function getProductsList(){
    return products;
}

export function changeCost(productId, newCost){
    console.log(`${productId} изменили цену на ${newCost}`);
    
    return true;
}

export function changeCreatedCount(productId, newCreatedCount){
    console.log(`${productId} изменили изготовлено на ${newCreatedCount}`);
    return true;
}

export function getShortProductsList(){
    return [
        {id: 1, name: "Яйцо"},
        {id: 2, name: "Курица"}
    ]
}

export function getProduct(id){
    return products[0];
}

export function getDeliverySummary(){
    return [
        {id: 1, name: "Яйцо", count: 10, createdCount: 30},
        {id: 2, name: "Курица", count: 10, createdCount: 30},
    ]
}
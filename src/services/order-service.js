export function changeOrderStatus(orderId, status){
    console.log(`Статус у ${orderId} поменялся на ${status}`);
}

export function getDeliveryOrdersOfConsumer(consumerId){
    var products = [];
    for (let i = 0; i < 5; i++){
        products.push({id: i, productName: "Яйца 1", count: i*10, cost: 233, isProductWeight: true, weight: 0.56});
    }
    return products;
}
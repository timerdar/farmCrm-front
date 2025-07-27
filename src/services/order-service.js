export function changeOrderStatus(orderId, status){
    console.log(`Статус у ${orderId} поменялся на ${status}`);
    return true;
}

/*export function getDeliveryOrdersOfConsumer(consumerId){
    var products = [];
    for (let i = 0; i < 5; i++){
        products.push({id: i, name: "Яйца 1", count: i*10, cost: 233, isProductWeight: true, weight: 0.56});
    }
    return products;
    //const orders = [{id: 1, name: "Яйца", count: 10, cost: 233, amount: 3, isProductWeight: true, weight: 0.56}]
}*/

export function getCreatedOrdersOfConsumer(consumerId){
    var products = [];
    for (let i = 0; i < 5; i++){
        products.push({id: i, name: "Яйца 1", count: i*10, cost: 233, isProductWeight: true, weight: 0.56});
    }
    return products;
    //const orders = [{id: 1, name: "Яйца", count: 10, cost: 233, amount: 3, isProductWeight: true, weight: 0.56}]
}

export function getCreatedOrdersOfProduct(productId){
    var consumers = [];
    for (let i = 0; i < 5; i++){
        consumers.push({id: i, name: `Заказчик ${i}`, count: i*10, cost: 233, isProductWeight: true, weight: 0.56});
    }
    return consumers;
}

export function changeCount(orderId, newCount){
    console.log(`${orderId} изменили количество на ${newCount}`);
    
}

export function changeWeight(orderId, newWeight){
    console.log(`${orderId} изменили вес на ${newWeight}`)
}

export function createOrder(consumerId, productId, amount){
    console.log(`Заказ для ${consumerId} = ${productId} * ${amount}`)
}

export function clearDelivery(){
    console.log("Почистили доставку");
}

export function getDeliveryOrders(){
    const delivery = [
        {id: 1, name: "Заказчик", address: "Кольцевая 123", phone: "8989988888", orders: [
            {id: 1, name: "Яйца", count: 10, cost: 233, amount: 3, isProductWeight: true, weight: 0.56},
            {id: 2, name: "Яйца2", count: 10, cost: 233, amount: 3, isProductWeight: true, weight: 0.56}
        ]},
        {id: 2, name: "Заказчик2", address: "Кольцевая 123", phone: "8989988888", orders: [
            {id: 1, name: "Яйца", count: 10, cost: 233, amount: 3, isProductWeight: true, weight: 0.56},
            {id: 2, name: "Яйца2", count: 10, cost: 233, amount: 3, isProductWeight: true, weight: 0.56}
        ]}
    ]
    return delivery;
}
import { api } from "../core/api.js"; 

export async function changeOrderStatus(orderId, status){
    try{
        var data = {
            id: orderId,
            status: status
        }
        const response = await api().post("/api/orders/change-status", data);
        return response.status == 200;
    }catch(e){
        console.log(e);
        throw e;
    }
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

export async function getCreatedOrdersOfConsumer(consumerId){
    try{
        const response = await api().get(`/api/orders/consumers/${consumerId}?status=CREATED`);
        return response.data;
    }catch(e){
        console.log(e);
        throw e;
    }

}

export async function getCreatedOrdersOfProduct(productId){
    try{
        const response = await api().get(`/api/orders/products/${productId}?status=CREATED`);
        return response.data;
    }catch(e){
        console.log(e);
        throw e;
    }

}

export function changeCount(orderId, newCount){
    console.log(`${orderId} изменили количество на ${newCount}`);
    
}

export function changeWeight(orderId, newWeight){
    console.log(`${orderId} изменили вес на ${newWeight}`)
}

export async function createOrder(consumerId, productId, amount){
    try{
        var data = {
            consumerId: consumerId,
            productId: productId,
            amount: amount
        };
        const response = await api().post('/api/orders', data);
        return response.status == 200;
    }catch(e){
        console.log(e);
        throw e;
    }
    console.log(`Заказ для ${consumerId} = ${productId} * ${amount}`)
}

export async function clearDelivery(){
    try{
        const response = await api().get("/api/orders/clear-delivery");
        return response.status == 200;
    }catch(e){
        console.log(e);
        throw e;
    }
    console.log("Почистили доставку");
}

export async function getDeliveryOrders(){
    try{
        const response = await api().get("/api/orders/delivery");
        return response.data;
    }catch(e){
        console.log(e);
        throw e;
    }
}
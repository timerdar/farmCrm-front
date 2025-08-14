import { api } from "../core/api.js";

var products = [
    { id: 1, name: "Яйцо", cost: 33, orderedCount: 10, createdCount: 4 }]

export async function createProduct(name, cost, isWeight) {
    try {
        if (name !== '' && !isNaN(cost) && cost > 0) {

            var data = {
                name: name,
                cost: cost,
                isWeight: isWeight
            }

            const response = await api().post('/api/products', data);
            return response.status == 200;
        }

    } catch (e) {
        console.log(e);
        throw e;
    }
}


export async function getProductsList() {
    try{
        const response = await api().get('/api/products');
        return response.data;
    }catch(e){
        console.log(e);
        throw e;
    }
}

export function changeCost(productId, newCost) {
    console.log(`${productId} изменили цену на ${newCost}`);

    return true;
}

export function changeCreatedCount(productId, newCreatedCount) {
    console.log(`${productId} изменили изготовлено на ${newCreatedCount}`);
    return true;
}

export function getShortProductsList() {
    return [
        { id: 1, name: "Яйцо" },
        { id: 2, name: "Курица" }
    ]
}

export function getProduct(id) {
    return products[0];
}

export function getDeliverySummary() {
    return [
        { id: 1, name: "Яйцо", count: 10, createdCount: 30 },
        { id: 2, name: "Курица", count: 10, createdCount: 30 },
    ]
}
import { Button } from "../../components/Button.js";
import { ConsumerWithOrders } from "../../components/cards/ConsumerWithOrders.js";
import { navigateTo } from "../../core/navigate.js";

export function Delivery(){

    const div = document.createElement("div");
    div.className = 'container';
    
    const seeSummaryOfProductsBtn = Button("Сводку по продукции", () => {navigateTo('/delivery/summary')});
    div.appendChild(seeSummaryOfProductsBtn);

    const consumer = {name: "Заказчик", address: "Кольцевая 123", mobilePhone: "8989988888"};
    const products = [];

    for (let i = 0; i < 5; i++){
        products.push({id: i, name: "Яйца", count: i*10, cost: 233, isProductWeight: true, weight: 0.56});
    }

    div.appendChild(ConsumerWithOrders(consumer, products))
    
    return div;

}
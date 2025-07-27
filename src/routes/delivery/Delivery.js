import { Button } from "../../components/Button.js";
import { ConsumerWithOrders } from "../../components/cards/ConsumerWithOrders.js";
import { navigateTo } from "../../core/navigate.js";
import { getDeliveryOrdersOfConsumer } from "../../services/order-service.js";

export function Delivery(){

    const div = document.createElement("div");
    div.className = 'container';
    
    const seeSummaryOfProductsBtn = Button("Сводку по продукции", () => {navigateTo('/delivery/summary')});
    div.appendChild(seeSummaryOfProductsBtn);

    const consumer = {id: 1, name: "Заказчик", address: "Кольцевая 123", mobilePhone: "8989988888"};
    const orders = getDeliveryOrdersOfConsumer(consumer.id);

    div.appendChild(ConsumerWithOrders(consumer, orders))
    
    return div;

}
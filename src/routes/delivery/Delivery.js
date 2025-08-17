import { Button } from "../../components/Button.js";
import { ConsumerWithOrders } from "../../components/cards/ConsumerWithOrders.js";
import { navigateTo } from "../../core/navigate.js";
import { clearDelivery, getDeliveryOrders } from "../../services/order-service.js";

export async function Delivery(){

    const div = document.createElement("div");
    div.className = 'container';
    
    const seeSummaryOfProductsBtn = Button("Сводку по продукции", () => {navigateTo('/delivery/summary')});
    const cleanDeliveryBtn = Button('Очистить доставку', async () => {
        if (confirm("Точно готовы почистить доставку?")){
            const res = await clearDelivery();
            if(res) navigateTo('/menu');
        }
    })
    div.appendChild(seeSummaryOfProductsBtn);
    div.appendChild(cleanDeliveryBtn);

    const delivery = await getDeliveryOrders();

    for (let consumer of delivery){
        div.appendChild(ConsumerWithOrders(consumer, consumer.orders));
    }
    
    return div;

}
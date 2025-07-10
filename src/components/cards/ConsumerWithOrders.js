import { TextWithLabel } from "../TextWithLabel.js";
import { ConsumerCard } from "./ConsumerCard.js";
import { MiniOrderCard } from "./MiniOrderCard.js";

export function ConsumerWithOrders(consumer, orders){

    const card = document.createElement("div");
    card.className = 'consumer-with-orders-card';

    var sum = 0;
    orders.forEach(order => {
        sum += order.cost;
    })

    const consumerCard = ConsumerCard(consumer, () => {});
    consumerCard.appendChild(TextWithLabel("Сумма", `${sum} руб`))

    card.appendChild(consumerCard);
    
    const ul = document.createElement("ol");
    orders.forEach(order => {
        const li = document.createElement("li");
        const orderCard = MiniOrderCard(order);
        li.appendChild(orderCard);
        ul.appendChild(li);
    })

    card.appendChild(ul);


    return card;


}
import { TextWithLabel } from "../TextWithLabel.js";
import { ConsumerCard } from "./ConsumerCard.js";
import { MiniOrderCard } from "./MiniOrderCard.js";
import { IconButton } from "../IconButton.js";

export function ConsumerWithOrders(consumer, orders) {

    const card = document.createElement("div");
    card.className = 'consumer-with-orders-card';

    function renderWithOrders(){
        card.innerHTML = '';
        const consumerCard = ConsumerCard(consumer, () => {});
        consumerCard.appendChild(IconButton('/src/assets/arrow-up.png', renderWithoutOrders));
        card.appendChild(consumerCard);
        
        const ul = document.createElement("ul");
        orders.forEach(order => {
            const orderCard = MiniOrderCard(order);
            ul.appendChild(orderCard);
        });
        card.appendChild(ul);
    }

    function renderWithoutOrders(){
        card.innerHTML = '';
        const consumerCard = ConsumerCard(consumer, () => {});
        consumerCard.appendChild(IconButton('/src/assets/arrow-down.png', renderWithOrders));
        card.appendChild(consumerCard);
    }

    renderWithoutOrders();
    return card;

}
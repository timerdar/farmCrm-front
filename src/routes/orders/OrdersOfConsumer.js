import { Button } from "../../components/Button.js";
import { ConsumerCard } from "../../components/cards/ConsumerCard.js";
import { EditableConsumerCard } from "../../components/cards/EditableConsumerCard.js";
import { OrdersList } from "../../components/lists/OrdersList.js";
import { TextWithLabel } from "../../components/TextWithLabel.js";

export function OrdersOfConsumer(){
    
    const div = document.createElement('div');
    div.className = 'container';

    const h1 = document.createElement("h1");
    h1.textContent = 'Карта заказчика';
    div.appendChild(h1);

    const consumer = {id: 13, name: "Заказчик", address: "Кольцевая 123, кв 123 второй подъезд", mobilePhone: "8989988888", totalSum: 12334};

    const consumerCard = EditableConsumerCard(consumer, () => {});
    consumerCard.appendChild(TextWithLabel("Сумма выкупа", `${consumer.totalSum} руб.`));
    div.appendChild(consumerCard);

    const addOrderBtn = Button("Добавить заказ", () => {});
    div.appendChild(addOrderBtn);

    const orders = [{id: 1, name: "Яйца", count: 10, cost: 233, amount: 3, isProductWeight: true, weight: 0.56}]

    const ordersList = OrdersList(orders, true);
    div.appendChild(ordersList);

    return div;
    
}

function extractId(){
    const hash = location.hash;
    const regex = /consumer\/(.*?)\/order/;
    const id = hash.match(regex);
    return id;
}
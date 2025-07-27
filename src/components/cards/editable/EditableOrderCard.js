import { changeOrderStatus } from "../../../services/order-service.js";
import { EditableTextWithLabelForNumber } from "../../EditableTextWithLabelForNumber.js";
import { IconButton } from "../../IconButton.js";
import { TextWithLabel } from "../../TextWithLabel.js";

export function EditableOrderCard(order) {

    const card = document.createElement("div");
    card.className = 'card';

    const nameDiv = document.createElement('div');
    nameDiv.className = 'name';
    nameDiv.textContent = order.productName;
    card.appendChild(nameDiv);

    const onclick = () => { };

    if (order.isProductWeight) {
        card.appendChild(EditableTextWithLabelForNumber("Вес", `${order.weight} кг.`, onclick));
    }
    card.appendChild(EditableTextWithLabelForNumber("Кол-во", `${order.amount} шт.`, onclick));


    card.appendChild(TextWithLabel("Сумма", `${order.cost} руб.`));

    const invis = document.createElement("div");
    card.appendChild(invis);

    invis.appendChild(IconButton('/src/assets/delivery.png',
        () => {
            changeOrderStatus(order.id, 'DELIVERY');
            invis.innerHTML = '';
        }))

    return card;
}
import { changeCount, changeOrderStatus, changeWeight } from "../../../services/order-service.js";
import { EditableTextWithLabelForNumber } from "../../EditableTextWithLabelForNumber.js";
import { IconButton } from "../../IconButton.js";
import { TextWithLabel } from "../../TextWithLabel.js";

export function EditableOrderCard(order) {

    const card = document.createElement("div");
    card.className = 'card';

    const nameDiv = document.createElement('div');
    nameDiv.className = 'name';
    nameDiv.textContent = order.name;
    card.appendChild(nameDiv);

    const onWeightChange = (newWeight) => { changeWeight(order.id, newWeight)};
    const onCountChange = (newCount) => { changeCount(order.id, newCount) };

    if (order.isProductWeight) {
        card.appendChild(EditableTextWithLabelForNumber("Вес", `${order.weight} кг.`, onWeightChange));
    }
    card.appendChild(EditableTextWithLabelForNumber("Кол-во", `${order.count} шт.`, onCountChange));


    card.appendChild(TextWithLabel("Сумма", `${order.cost} руб.`));

    const invis = document.createElement("div");
    card.appendChild(invis);

    invis.appendChild(IconButton('/src/assets/delivery.png',
        () => {
            if (changeOrderStatus(order.id, 'DELIVERY')){
                invis.innerHTML = '';
            };
        }))

    return card;
}
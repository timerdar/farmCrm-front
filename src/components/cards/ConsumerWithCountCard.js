import { TextWithLabel } from "../TextWithLabel.js";
import { ConsumerCard } from "./ConsumerCard.js";

function ConsumerWithCountCard(orderOfProduct) {

    const consumerCard = ConsumerCard(orderOfProduct);
    consumerCard.appendChild(TextWithLabel("Заказано", orderOfProduct.count));

    return consumerCard;

}
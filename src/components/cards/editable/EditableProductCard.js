import { navigateTo } from "../../../core/navigate.js";
import { changeCost, changeCreatedCount } from "../../../services/product-service.js";
import { EditableTextWithLabelForNumber } from "../../EditableTextWithLabelForNumber.js";
import { TextWithLabel } from "../../TextWithLabel.js";

export function EditableProductCard(product){

    const div = document.createElement("div");
    div.className = 'card';
    
    const nameDiv = document.createElement("div");
    nameDiv.className = 'name';
    nameDiv.innerText = `${product.name}`
    
    const onCostClick = (e) => {
        changeCost(product.id, e);
    }

    const onCreatedCountClick = (e) => {
        changeCreatedCount(product.id, e);
    }

    div.appendChild(nameDiv);
    const cost = EditableTextWithLabelForNumber("Цена", `${product.cost} руб`, onCostClick);
    const count = TextWithLabel("Заказано", `${product.orderedCount}`);
    const createdCount = EditableTextWithLabelForNumber("Изготовлено", `${product.createdCount} шт.`, onCreatedCountClick);

    count.addEventListener('click', () => {
        navigateTo(`/products/${product.id}/orders`);
    })

    div.appendChild(cost);
    div.appendChild(count);
    div.appendChild(createdCount);

    return div;

}
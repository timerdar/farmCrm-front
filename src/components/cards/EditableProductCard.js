import { EditableTextWithLabel } from "../EditableTextWithLabel.js";
import { TextWithLabel } from "../TextWithLabel.js";

export function EditableProductCard(product){

    const div = document.createElement("div");
    div.className = 'card';
    
    const nameDiv = document.createElement("div");
    nameDiv.className = 'name';
    nameDiv.innerText = `${product.name}`
    
    const onclick = (e) => {
        console.log(e);
    }

    div.appendChild(nameDiv);
    const cost = EditableTextWithLabel("Цена", `${product.cost} руб`, onclick);
    const count = TextWithLabel("Заказано", `${product.count}`);
    const createdCount = EditableTextWithLabel("Изготовлено", `${product.createdCount} шт.`, onclick);

    div.appendChild(cost);
    div.appendChild(count);
    div.appendChild(createdCount);

    return div;

}
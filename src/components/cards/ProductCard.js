import { TextWithLabel } from "../TextWithLabel.js";

export function ProductCard(product){

    const div = document.createElement("div");
    div.className = 'card';
    
    const nameDiv = document.createElement("div");
    nameDiv.className = 'name';
    nameDiv.innerText = `${product.name}`
    
    div.appendChild(nameDiv);

    const cost = TextWithLabel("Цена", `${product.cost} рублей`);

    const count = TextWithLabel("Заказано", `${product.count}`);

    div.appendChild(cost);
    div.appendChild(count);

    return div;

}
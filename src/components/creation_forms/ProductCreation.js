import { createProduct } from "../../services/product-service.js";
import { IconButton } from "../IconButton.js";

export function ProductCreation(onAcceptClick){

    const mainDiv = document.createElement("div");
    mainDiv.className = 'creation-card';

    const label = document.createElement("label");
    label.textContent = 'Создание продукта';
    mainDiv.appendChild(label);

    const div = document.createElement("div");
    div.className = 'forms';

    const nameInput = document.createElement("input");
    nameInput.className = 'creation-input';
    nameInput.type = 'text';
    nameInput.placeholder = 'Название';
    div.appendChild(nameInput);

    const priceInput = document.createElement('input');
    priceInput.className = 'creation-input';
    priceInput.type = 'number';
    priceInput.placeholder = 'Цена';
    div.appendChild(priceInput);

    div.appendChild(IconButton('/src/assets/accept.png', () => {
        createProduct(nameInput.value);    
        onAcceptClick();
    }
    ))
    div.appendChild(IconButton('/src/assets/close.png', () => {
        onAcceptClick();
    }))

    mainDiv.appendChild(div);


    return mainDiv;

}
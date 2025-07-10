import { TextWithLabel } from "../TextWithLabel.js";

export function ConsumerCard(consumer, onClick){

    const card = document.createElement("div");
    card.className = 'card';

    const nameDiv = document.createElement("div");
    nameDiv.className = 'name';

    nameDiv.innerText = `${consumer.name}`;
    nameDiv.addEventListener('click', () => onClick(consumer.id));

    card.appendChild(nameDiv);
    
    card.appendChild(TextWithLabel("Адрес", consumer.address));
    card.appendChild(TextWithLabel("Телефон", consumer.mobilePhone));

    return card;

}
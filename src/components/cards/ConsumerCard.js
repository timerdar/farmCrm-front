import { TextWithLabel } from "../TextWithLabel.js";

export function ConsumerCard(consumer, onClick){

    const card = document.createElement("div");
    card.className = 'consumer-card';
    card.innerText = `${consumer.name}`;
    card.addEventListener('click', onClick);
    
    card.appendChild(TextWithLabel("Адрес", consumer.address));

    return card;

}
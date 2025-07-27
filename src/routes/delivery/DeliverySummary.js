import { getDeliverySummary } from "../../services/product-service.js";

export function DeliverySummary(){
    const orders = getDeliverySummary();

    const div = document.createElement("div");
    div.className = 'container';
    
    const h1 = document.createElement('h1');
    h1.innerText = 'Сводка по продукции в доставке';
    div.appendChild(h1);

    const list = document.createElement('ul');
    for (let order of orders){
        const li = document.createElement('li');
        li.innerHTML = `${order.name} - готово ${order.createdCount} из ${order.count}`;
        list.appendChild(li);
    }

    div.appendChild(list);

    return div;

}
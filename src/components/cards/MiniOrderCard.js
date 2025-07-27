import { changeOrderStatus } from "../../services/order-service.js";
import { IconButton } from "../IconButton.js";

export function MiniOrderCard(order, update){

    const div = document.createElement("div");
    div.className = 'mini-card';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'checkbox';

    checkbox.addEventListener('click', () => {
        if (checkbox.checked){
            changeOrderStatus(order.id, 'DONE');
            div.style.backgroundColor = 'green';
        }else{
            changeOrderStatus(order.id, 'DELIVERY');
            div.style.backgroundColor = 'white';
        }
    });

    div.appendChild(checkbox);

    const nameDiv = document.createElement("div");
    nameDiv.className = 'name';
    nameDiv.innerText = order.name;
    div.appendChild(nameDiv);

    const mainDiv = document.createElement("div");
    mainDiv.className = 'info';

    if (order.isProductWeight){
        mainDiv.innerText = `${order.count} шт. ${order.weight} кг. ${order.cost} руб.`
    }else{
        mainDiv.innerText = `${order.count} шт. ${order.cost} руб.`
    }

    div.appendChild(mainDiv);
    const invis = document.createElement("div");

    invis.appendChild(IconButton('/src/assets/product-return.png', () => {
        if (changeOrderStatus(order.id, 'CREATED')){
            invis.innerHTML = '';
        }
    }));

    div.appendChild(invis);

    return div;

}
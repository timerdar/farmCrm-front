import { changeOrderStatus } from "../../services/order-service.js";

export function MiniOrderCard(order){

    const div = document.createElement("div");
    div.className = 'mini-card';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    checkbox.addEventListener('click', () => {
        if (checkbox.checked){
            changeOrderStatus(order.id, 'DONE');
        }else{
            changeOrderStatus(order.id, 'DELIVERY');
        }
    });

    div.appendChild(checkbox);

    const nameDiv = document.createElement("div");
    nameDiv.className = 'mini-order-name';
    div.appendChild(nameDiv);

    const mainDiv = document.createElement("div");

    if (order.isProductWeight){
        mainDiv.innerText = `${order.count} шт. ${order.weight} кг. ${order.cost} руб.`
    }else{
        mainDiv.innerText = `${order.count} шт. ${order.cost} руб.`
    }

    div.appendChild(mainDiv);

    return div;

}
import { changeOrderStatus, changeCount, changeWeight } from "../../services/order-service.js";
import { EditableTextWithLabelForNumber } from "../EditableTextWithLabelForNumber.js";
import { IconButton } from "../IconButton.js";
import { TextWithLabel } from "../TextWithLabel.js";


export function MiniOrderCard(order, update){

    const div = document.createElement("div");
    div.className = 'mini-card';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'checkbox';
    checkbox.checked = order.status == 'DONE';
    div.style.backgroundColor = checkbox.checked ? 'green' : 'white';

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

    
    async function changeOrderCount(newCount){
        return await changeCount(order.id, newCount);
    }

    async function changeOrderWeight(newWeight){
        return await changeWeight(order.id, newWeight);
    }

    div.appendChild(EditableTextWithLabelForNumber("Количество", `${order.count} шт`, newCount => changeOrderCount(newCount)));
    
    if (order.weighed)
        div.appendChild(EditableTextWithLabelForNumber("Вес", `${order.weight} кг`, newWeight => changeOrderWeight(newWeight)));
    else 
        div.appendChild(TextWithLabel("", ""));

    div.appendChild(TextWithLabel("Стоимость", `${order.cost} руб`))

    const invis = document.createElement("div");

    invis.appendChild(IconButton('/src/assets/product-return.png', () => {
        if (changeOrderStatus(order.id, 'CREATED')){
            invis.innerHTML = '';
        }
    }));

    div.appendChild(invis);

    return div;

}
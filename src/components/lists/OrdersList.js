import { EditableOrderCard } from "../cards/editable/EditableOrderCard.js";
import { OrderCard } from "../cards/OrderCard.js";

export function OrdersList(orders, isEditable){

    const ul = document.createElement("ul");

    function render(data){
        ul.innerHTML = '';
        data.forEach(order => {
            const li = document.createElement("li");
            if(isEditable){
                li.appendChild(EditableOrderCard(order));
            }else{
                li.appendChild(OrderCard(order));
            }
            ul.appendChild(li);
        })
    }
    
    render(orders);
    
    ul.update = render;

    return ul;
}
import { ConsumersList } from "../../components/ConsumersList.js";

export function UndoneOrdersConsumers(){
    
    const consumers = [{name: "Заказчик 1", deliveryAddress: "Адрес1"},
        {name: "Заказчик 2", deliveryAddress: "Адрес2"}
    ]

    const div = document.createElement("div");
    const list = ConsumersList(consumers);
    div.appendChild(list);

    return div;

}
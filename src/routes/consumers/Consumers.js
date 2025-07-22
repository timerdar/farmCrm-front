import { Button } from "../../components/Button.js";
import { ConsumersList } from "../../components/lists/ConsumersList.js";
import { navigateTo } from "../../core/navigate.js";

export function Consumers(){

    const consumers = [{id: 1, name: "Абоба 1", address: "Адрес1"},
        {id: 2, name: "Заказчик 2", address: "Адрес2"}
    ]

    const div = document.createElement("div");
    div.className = 'container';
    
    const h1 = document.createElement("h1");
    h1.innerText = 'Заказчики';
    div.appendChild(h1);

    const searchInput = document.createElement("input");
    searchInput.type = 'text';
    searchInput.className = 'search-input';
    searchInput.placeholder = 'Начните вводить имя заказчика';
    div.appendChild(searchInput);

    const addNewConsumerBtn = Button("Добавить заказчика", () => {
        navigateTo('/create-consumer');
    });

    div.appendChild(addNewConsumerBtn);

    const list = ConsumersList(consumers, (id) => {
        navigateTo(`/consumers/${id}/orders`);
    });

    searchInput.addEventListener('input', () => {
        if (searchInput.value === ''){
            list.update(consumers);
        }else{
            const newConsumers = [];
            consumers.forEach(consumer => {
                if (consumer.name.toLocaleLowerCase().includes(searchInput.value.toLowerCase())){
                    newConsumers.push(consumer);
                }
            })
            list.update(newConsumers);

        }
    })

    div.appendChild(list);

    return div;

}
export function ConsumersList(consumers){

    const ul = document.createElement("ul");
    consumers.forEach(consumer => {
        const li = document.createElement("li");
        li.innerText = `${consumer.name} ${consumer.deliveryAddress}`;
        ul.appendChild(li);
    })

    return ul;

}
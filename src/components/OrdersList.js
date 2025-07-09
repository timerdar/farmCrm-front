export function OrdersList({orders}){

    const ul = document.createElement("ul");

    orders.forEach(order => {
        const li = document.createElement("li");
        li.innerText = order;
        ul.appendChild(li);
    })
    
    return ul;
}
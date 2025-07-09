export function OrdersList(orders){

    const ul = document.createElement("ul");

    function render(data){
        data.forEach(order => {
            const li = document.createElement("li");
            li.innerText = `${order.productName}`;
            ul.appendChild(li);
        })
    }
    
    render(orders);
    
    ul.update = render(orders);

    return ul;
}
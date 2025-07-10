export function MiniOrderCard(order){

    const div = document.createElement("div");
    div.className = 'mini-card';
    if (order.isProductWeight){
        div.innerText = `${order.name} ${order.count} шт. ${order.weight} кг. ${order.cost} руб.`
    }else{
        div.innerText = `${order.name} ${order.count} шт. ${order.cost} руб.`
    }

    return div;

}
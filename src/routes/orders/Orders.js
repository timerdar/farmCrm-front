import { OrdersList } from "../../components/OrdersList.js";

export function UndoneOrders(){
    const orders = {orders: ["Заказ1", "Заказ2", "Заказ3"]};

    const app = document.createElement("div");
    var ordersList = OrdersList(orders);
    app.appendChild(ordersList);
    return app;
    
}
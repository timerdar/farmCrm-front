import { Auth } from "../routes/Auth.js";
import { Menu } from "../routes/Menu.js";
import { NotFound } from "../routes/NotFound.js";
import { Consumers } from "../routes/consumers/Consumers.js";
import { Products } from "../routes/products/Products.js";
import { Delivery } from "../routes/delivery/Delivery.js"
import { OrdersOfConsumer } from "../routes/orders/OrdersOfConsumer.js";

const routes = {
    '^/menu$': Menu,
    '^/consumers/(.*?)/orders$': OrdersOfConsumer,
    '^/consumers$': Consumers,
    '^/products$': Products,
    '^/delivery$': Delivery,
    '^/$': Auth
}

export function router() {
    const hash = location.hash.slice(1);

    var page = NotFound;

    if (hash === '') {
        page = Auth;
    } else {
        for (const route in routes) {
            const regex = RegExp(route);
            if (regex.test(hash)) {
                page = routes[route];
                break;
            }
        };
    }

    const app = document.getElementById('app');

    app.innerHTML = '';

    app.appendChild(page());
};
import { Menu } from "../routes/Menu.js";
import { NotFound } from "../routes/NotFound.js";
import { Orders } from "../routes/orders/UndoneOrdersOfUser.js";

const routes = {
    '/': Menu,
    '/orders': Orders
}

export function router() {
    const hash = location.hash.slice(1) || "/";
    const page = routes[hash] || NotFound;
    const app = document.getElementById('app');
    app.innerHTML = '';
    app.appendChild(page());
};